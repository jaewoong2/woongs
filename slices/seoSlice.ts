import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const SEL_SLICE = 'slice/seo'

export type SEO = {
  title: string
  description?: string
  tags: string[]
}

const initialState: SEO = {
  title: '',
  description: '',
  tags: [],
}

export const styleSlice = createSlice({
  name: SEL_SLICE,
  initialState,
  reducers: {
    setSEO(state, action: PayloadAction<SEO>) {
      state.title = action.payload.title
      state.description = action.payload.description
      state.tags = action.payload.tags
    },
  },
})

export const { setSEO } = styleSlice.actions
export default styleSlice.reducer
