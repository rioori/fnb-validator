'use client';

import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import type { ChatMessage, ChatSession } from '@/types';

const DAILY_QUOTA = 20;

interface ChatState {
  sessions: ChatSession[];
  activeSessionId: string | null;
  messages: ChatMessage[];
  isStreaming: boolean;
  error: string;
  todayUsed: number;

  loadSessions: (userId: string) => Promise<void>;
  loadMessages: (sessionId: string) => Promise<void>;
  setActiveSession: (sessionId: string | null) => void;
  createSession: (userId: string) => Promise<string | null>;
  deleteSession: (sessionId: string) => Promise<void>;
  sendMessage: (content: string, userId: string, businessContext?: string) => Promise<void>;
  checkQuota: (userId: string) => Promise<number>;
  stopStreaming: () => void;
  clearError: () => void;
}

export const useChat = create<ChatState>((set, get) => ({
  sessions: [],
  activeSessionId: null,
  messages: [],
  isStreaming: false,
  error: '',
  todayUsed: 0,

  loadSessions: async (userId) => {
    const { data } = await supabase
      .from('chat_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });
    if (data) set({ sessions: data });
  },

  loadMessages: async (sessionId) => {
    const { data } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });
    if (data) set({ messages: data, activeSessionId: sessionId });
  },

  setActiveSession: (sessionId) => {
    set({ activeSessionId: sessionId, messages: [], error: '' });
    if (sessionId) get().loadMessages(sessionId);
  },

  createSession: async (userId) => {
    const { data, error } = await supabase
      .from('chat_sessions')
      .insert({ user_id: userId, title: 'Cuộc trò chuyện mới' })
      .select()
      .single();
    if (error || !data) {
      set({ error: 'Không thể tạo phiên chat.' });
      return null;
    }
    set((s) => ({
      sessions: [data, ...s.sessions],
      activeSessionId: data.id,
      messages: [],
    }));
    return data.id;
  },

  deleteSession: async (sessionId) => {
    await supabase.from('chat_sessions').delete().eq('id', sessionId);
    set((s) => ({
      sessions: s.sessions.filter((sess) => sess.id !== sessionId),
      activeSessionId: s.activeSessionId === sessionId ? null : s.activeSessionId,
      messages: s.activeSessionId === sessionId ? [] : s.messages,
    }));
  },

  checkQuota: async (userId) => {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    // Count user messages across all sessions today
    const { count } = await supabase
      .from('chat_messages')
      .select('id', { count: 'exact', head: true })
      .eq('role', 'user')
      .gte('created_at', todayStart.toISOString())
      .in('session_id',
        (await supabase
          .from('chat_sessions')
          .select('id')
          .eq('user_id', userId)
        ).data?.map(s => s.id) || []
      );

    const used = count || 0;
    set({ todayUsed: used });
    return used;
  },

  sendMessage: async (content, userId, businessContext) => {
    // Check daily quota
    const used = await get().checkQuota(userId);
    if (used >= DAILY_QUOTA) {
      set({ error: `Bạn đã dùng hết ${DAILY_QUOTA} câu hỏi hôm nay. Quota sẽ được reset vào 0h ngày mai.` });
      return;
    }

    const state = get();
    let sessionId = state.activeSessionId;

    // Auto-create session if none active
    if (!sessionId) {
      sessionId = await get().createSession(userId);
      if (!sessionId) return;
    }

    // Save user message to Supabase
    const { data: userMsg } = await supabase
      .from('chat_messages')
      .insert({ session_id: sessionId, role: 'user', content })
      .select()
      .single();

    if (!userMsg) {
      set({ error: 'Không thể lưu tin nhắn.' });
      return;
    }

    const updatedMessages: ChatMessage[] = [...get().messages, userMsg];
    set({ messages: updatedMessages, isStreaming: true, error: '', todayUsed: get().todayUsed + 1 });

    // Update session title from first message
    const currentSession = get().sessions.find((s) => s.id === sessionId);
    if (currentSession && currentSession.title === 'Cuộc trò chuyện mới') {
      const title = content.length > 50 ? content.slice(0, 50) + '...' : content;
      await supabase.from('chat_sessions').update({ title }).eq('id', sessionId);
      set((s) => ({
        sessions: s.sessions.map((sess) =>
          sess.id === sessionId ? { ...sess, title } : sess
        ),
      }));
    }

    // Build messages for API (only role + content)
    const apiMessages = updatedMessages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, businessContext }),
      });

      if (!res.ok) {
        const err = await res.json();
        set({ error: err.error || 'Lỗi kết nối AI.', isStreaming: false });
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';
      let buffer = '';

      // Add placeholder assistant message
      const tempId = 'streaming-' + Date.now();
      set((s) => ({
        messages: [
          ...s.messages,
          { id: tempId, role: 'assistant', content: '', created_at: new Date().toISOString() },
        ],
      }));

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;
          const data = trimmed.slice(6);
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            if (parsed.content) {
              assistantContent += parsed.content;
              set((s) => ({
                messages: s.messages.map((m) =>
                  m.id === tempId ? { ...m, content: assistantContent } : m
                ),
              }));
            }
          } catch {
            // skip
          }
        }
      }

      // Save assistant message to Supabase
      if (assistantContent) {
        const { data: savedMsg } = await supabase
          .from('chat_messages')
          .insert({ session_id: sessionId, role: 'assistant', content: assistantContent })
          .select()
          .single();

        if (savedMsg) {
          set((s) => ({
            messages: s.messages.map((m) => (m.id === tempId ? savedMsg : m)),
          }));
        }

        // Update session timestamp
        await supabase
          .from('chat_sessions')
          .update({ updated_at: new Date().toISOString() })
          .eq('id', sessionId);
      }
    } catch (err) {
      console.error('Chat error:', err);
      set({ error: 'Lỗi kết nối. Vui lòng thử lại.' });
    } finally {
      set({ isStreaming: false });
    }
  },

  stopStreaming: () => set({ isStreaming: false }),
  clearError: () => set({ error: '' }),
}));
