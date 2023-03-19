/* store/reducer.ts */
import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import styleSlice from 'slices/styleSlice'
import postsSlice from 'slices/postsSlice'
import seoSlice from 'slices/seoSlice'

const combinedReducer = combineReducers({
  styleSlice: styleSlice,
  postsSlice: postsSlice,
  seoSlice: seoSlice,
})

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}
export default rootReducer
