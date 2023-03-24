import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const TAGS_SLICE = 'slice/posts'

export type TAG = {
  tags: { [key: string]: Set<string> } | null
}

const initialState: TAG = {
  tags: null,
}

export const postsSlice = createSlice({
  name: TAGS_SLICE,
  initialState,
  reducers: {
    setTags(state, action: PayloadAction<TAG['tags']>) {
      state.tags = action.payload
    },
  },
})

export const { setTags } = postsSlice.actions
export default postsSlice.reducer
