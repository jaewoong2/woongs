import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const STYLE_SLICE = 'slice/post'

export type Style = {
  isFullPage: boolean
}

const initialState: Style = {
  isFullPage: true,
}

// Type for our state
// Actual Slice
export const styleSlice = createSlice({
  name: STYLE_SLICE,
  initialState,
  reducers: {
    // Action to set the authentication status
    setStyleState(state, action: PayloadAction<Style>) {
      state.isFullPage = action.payload.isFullPage
    },
  },

  /** 페이지 이동 시 상태 초기화가 필요한 경우 추가해야 함 */
  extraReducers: {
    [HYDRATE]: (state) => {
      return {
        ...state,
      }
    },
  },
})

export const { setStyleState } = styleSlice.actions
export default styleSlice.reducer
