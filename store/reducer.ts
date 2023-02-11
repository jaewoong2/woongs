/* store/reducer.ts */
import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import styleSlice from 'slices/styleSlice'
import postsSlice from 'slices/postsSlice'

const combinedReducer = combineReducers({
  styleSlice: styleSlice,
  postsSlice: postsSlice,
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
