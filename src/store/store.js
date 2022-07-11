import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/TaskCounterSlice'
import userReducer from './slices/UserSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})
