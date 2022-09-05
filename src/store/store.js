import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import tasksSlice from './slices/TasksSlice'
import counterSlice from './slices/CounterSlice'
import themeSlice from './slices/ThemeSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: userReducer,
    tasks: tasksSlice,
    theme: themeSlice,
  },
})
