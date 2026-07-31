'use client';

import { create } from 'zustand';

// Guest-first save: users from cold Google traffic can save up to 3 scenarios
// locally without signing up. Reduces the 0-conversion problem where the
// phone+password gate on SavePrompt was blocking every non-authed visitor.
// On signup, useAuth calls promoteGuestScenariosOnLogin() to migrate these
// into Supabase under the new user_id so nothing is lost.

const STORAGE_KEY = 'guest_scenarios_v1';
export const GUEST_MAX_SCENARIOS = 3;

export interface GuestScenario {
  id: string;
  name: string;
  model_key: string | null;
  data: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

interface GuestScenariosState {
  scenarios: GuestScenario[];
  hydrated: boolean;
  hydrate: () => void;
  save: (name: string, modelKey: string | null, data: Record<string, unknown>) => GuestScenario;
  remove: (id: string) => void;
  clear: () => void;
  canSave: () => boolean;
}

function readStorage(): GuestScenario[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStorage(scenarios: GuestScenario[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios));
  } catch {}
}

function makeId(): string {
  return `guest-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export const useGuestScenarios = create<GuestScenariosState>((set, get) => ({
  scenarios: [],
  hydrated: false,

  hydrate: () => {
    if (get().hydrated) return;
    set({ scenarios: readStorage(), hydrated: true });
  },

  save: (name, modelKey, data) => {
    const scenarios = [...get().scenarios];
    if (scenarios.length >= GUEST_MAX_SCENARIOS) {
      throw new Error('MAX_GUEST_SCENARIOS');
    }
    const now = new Date().toISOString();
    const record: GuestScenario = {
      id: makeId(),
      name,
      model_key: modelKey,
      data,
      created_at: now,
      updated_at: now,
    };
    const next = [record, ...scenarios];
    writeStorage(next);
    set({ scenarios: next });
    return record;
  },

  remove: (id) => {
    const next = get().scenarios.filter((s) => s.id !== id);
    writeStorage(next);
    set({ scenarios: next });
  },

  clear: () => {
    writeStorage([]);
    set({ scenarios: [] });
  },

  canSave: () => get().scenarios.length < GUEST_MAX_SCENARIOS,
}));

// Reads guest scenarios directly from storage without touching the Zustand
// store — used by promoteGuestScenariosOnLogin (which runs before hydrate).
export function readGuestScenariosDirect(): GuestScenario[] {
  return readStorage();
}

export function clearGuestScenariosDirect() {
  writeStorage([]);
}
