/* store/reducer.ts */
import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import styleSlice from '../slices/styleSlice'

const combinedReducer = combineReducers({
  styleSlice: styleSlice,
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
