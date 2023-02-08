import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const STYLE_SLICE = 'slice/post'

export type Style = {
  isFullPage: boolean
}

const initialState: Style = {
  isFullPage: true,
}

export const styleSlice = createSlice({
  name: STYLE_SLICE,
  initialState,
  reducers: {
    setStyleState(state, action: PayloadAction<Style>) {
      state.isFullPage = action.payload.isFullPage
    },
  },
})

export const { setStyleState } = styleSlice.actions
export default styleSlice.reducer
