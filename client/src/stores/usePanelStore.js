import { create } from 'zustand'

export const usePanelStore = create((set) => ({
  value: false,
  toggle: () => set((state) => ({ value: !state.value }))
}))
