import { create } from 'zustand'
import { SearchSlice, createSearchSlice } from './createSearchSlice'


type BoundState = SearchSlice
export const useBoundStore = create<BoundState>()((...a) => ({
  ...createSearchSlice(...a),
}))