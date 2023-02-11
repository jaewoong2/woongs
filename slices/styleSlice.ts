import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isMobile } from '@utils/index'

const STYLE_SLICE = 'slice/style'

export type Style = {
  isFullPage: boolean
  isMobile: boolean
}

const initialState: Style = {
  isFullPage: true,
  isMobile: isMobile(),
}

export const styleSlice = createSlice({
  name: STYLE_SLICE,
  initialState,
  reducers: {
    setIsFullPage(state, action: PayloadAction<boolean>) {
      state.isFullPage = action.payload
    },
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload
    },
  },
})

export const { setIsFullPage, setIsMobile } = styleSlice.actions
export default styleSlice.reducer
