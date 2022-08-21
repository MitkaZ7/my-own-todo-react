import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import tasksSlice from './slices/TasksSlice'
import counterSlice from './slices/CounterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: userReducer,
    tasks: tasksSlice,
  },
})
