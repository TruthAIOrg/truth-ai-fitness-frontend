import { StateCreator } from "zustand"

export interface SearchSlice {
  open: boolean
  setOpen: (bol: boolean) => void
}
export const createSearchSlice: StateCreator<
  SearchSlice,
  [],
  [],
  SearchSlice
  > = (set) => ({
    open: false,
    setOpen: (bol: boolean) => set((state) => ({ ...state, open: bol })),
  })
