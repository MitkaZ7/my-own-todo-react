import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/TaskCounterSlice'
import userReducer from './slices/UserSlice'
import tasksSlice from './slices/TasksSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    tasks: tasksSlice,
  },
})
