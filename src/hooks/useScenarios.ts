'use client';

import { create } from 'zustand';
import { supabase } from '@/lib/supabase';

interface Scenario {
  id: string;
  name: string;
  model_key: string;
  updated_at: string;
}

interface ScenarioState {
  scenarios: Scenario[];
  selectedId: string;
  setSelectedId: (id: string) => void;
  loadList: (userId: string) => Promise<void>;
  save: (userId: string, name: string, modelKey: string | null, data: Record<string, unknown>) => Promise<void>;
  load: (id: string) => Promise<Record<string, unknown> | null>;
  remove: (id: string) => Promise<void>;
}

export const useScenarios = create<ScenarioState>((set, get) => ({
  scenarios: [],
  selectedId: '',
  setSelectedId: (id) => set({ selectedId: id }),

  loadList: async (userId) => {
    const { data } = await supabase
      .from('scenarios')
      .select('id,name,model_key,updated_at')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });
    set({ scenarios: data || [] });
  },

  save: async (userId, name, modelKey, scenarioData) => {
    const selId = get().selectedId;
    if (selId) {
      const { error } = await supabase.from('scenarios').update({
        name,
        data: scenarioData,
        model_key: modelKey,
        updated_at: new Date().toISOString(),
      }).eq('id', selId);
      if (error) throw error;
    } else {
      const { data, error } = await supabase.from('scenarios').insert({
        user_id: userId,
        name,
        data: scenarioData,
        model_key: modelKey,
      }).select('id').single();
      if (error) throw error;
      if (data) set({ selectedId: data.id });
    }
  },

  load: async (id) => {
    const { data } = await supabase.from('scenarios').select('*').eq('id', id).single();
    if (data) return data;
    return null;
  },

  remove: async (id) => {
    await supabase.from('scenarios').delete().eq('id', id);
    set({ selectedId: '' });
  },
}));
