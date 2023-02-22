import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isMobile } from '@utils/index'

const STYLE_SLICE = 'slice/style'

export type Style = {
  isFullPage: boolean
  isMobile: boolean
  navigation: { href: string; name: string }[]
}

const initialState: Style = {
  isFullPage: true,
  isMobile: isMobile(),
  navigation: [],
}

export const styleSlice = createSlice({
  name: STYLE_SLICE,
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<{ href: string; name: string }[]>) {
      state.navigation = action.payload
    },
    setIsFullPage(state, action: PayloadAction<boolean>) {
      state.isFullPage = action.payload
    },
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload
    },
  },
})

export const { setIsFullPage, setIsMobile, setNavigation } = styleSlice.actions
export default styleSlice.reducer
