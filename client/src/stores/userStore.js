import { create } from 'zustand'

export const useUserStore = create((set) => ({
  value: null,
  add: (value) => set(() => ({ value })),
  remove: () => set({ value: null }),
  addTag: (tag) => set((state) => ({
    value: {
      ...state.value,
      myTags: [...state.value.myTags, tag]
    }
  })),
  removeTag: (tag) => set((state) => ({
    value: {
      ...state.value,
      myTags: state.value.myTags.filter(t => t !== tag)
    }
  }))
}))
