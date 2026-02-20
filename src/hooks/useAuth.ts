'use client';

import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

function phoneToEmail(phone: string): string {
  if (phone.includes('@')) return phone;
  const clean = phone.replace(/\D/g, '');
  return clean + '@fnb-validator.app';
}

interface AuthState {
  user: User | null;
  displayName: string;
  loading: boolean;
  error: string;
  setError: (e: string) => void;
  login: (id: string, password: string) => Promise<void>;
  signup: (id: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  skip: () => void;
  checkSession: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  displayName: '',
  loading: false,
  error: '',
  setError: (e) => set({ error: e }),

  login: async (id, password) => {
    if (!id || !password) { set({ error: 'Vui lòng nhập đầy đủ!' }); return; }
    set({ loading: true, error: '' });
    const { data, error } = await supabase.auth.signInWithPassword({ email: phoneToEmail(id), password });
    if (error) { set({ error: 'Sai thông tin đăng nhập!', loading: false }); return; }
    set({ user: data.user, displayName: id, loading: false });
  },

  signup: async (id, password) => {
    if (!id || password.length < 6) { set({ error: 'Mật khẩu tối thiểu 6 ký tự!' }); return; }
    set({ loading: true, error: '' });
    const { data, error } = await supabase.auth.signUp({ email: phoneToEmail(id), password });
    if (error) { set({ error: error.message, loading: false }); return; }
    set({ user: data.user, displayName: id, loading: false });
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, displayName: '' });
  },

  skip: () => set({ user: null }),

  checkSession: async () => {
    try {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        const email = data.session.user.email || '';
        set({
          user: data.session.user,
          displayName: email.replace('@fnb-validator.app', ''),
        });
      }
    } catch (e) {
      console.warn('Auth session check failed:', e);
    }
  },
}));
