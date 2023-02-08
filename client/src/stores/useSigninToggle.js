import { create } from 'zustand'

export const useSigninToggle = create((set) => ({
  value: false,
  toggle: (value) => set((state) => ({ value }))
}))
