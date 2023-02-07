import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import rootReducer from './reducer'

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
  })
  return store
}

const wrapper = createWrapper(makeStore)

type AppStore = ReturnType<typeof makeStore>
type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export default wrapper
