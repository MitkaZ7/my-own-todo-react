import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/Api'
import { countAll } from './CounterSlice';

export const getInitialTasks = createAsyncThunk(
  'tasks/getInitialTasks',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const tasksList = await api.getInitialTasks();
      dispatch(countAll(tasksList))
      return tasksList;
    } catch (error) {
        return rejectWithValue((error.message))
    }
  }
)

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data, { rejectWithValue, dispatch, getState}) => {
    try {

      const res = await api.addNewTask(data);
      console.log(res)
      dispatch(addTask(res))

    } catch (error) {
      return rejectWithValue((error.message))
    }
    const arr = [...getState().tasks.tasks]
    dispatch(countAll(arr))
  }
)

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const updatedTask = {...getState().tasks.tasks.find(task => task._id === id)}
    updatedTask.isCompleted = !updatedTask.isCompleted
    try {
      await api.updateTask(updatedTask)
      dispatch(updateTaskStatus(id));
    } catch (error) {
      return rejectWithValue((error.message))
    }
    const arr = [...getState().tasks.tasks]
    dispatch(countAll(arr))
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskId, {rejectWithValue, dispatch, getState}) => {
    try {
      await api.removeTask(taskId);
      dispatch(removeTask(taskId));

    } catch (error) {
      return rejectWithValue((error.message))
    }
    const arr = [...getState().tasks.tasks]
    dispatch(countAll(arr))
  }
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
    tasks: []
  },
    status: null,
    error: null,
    reducers: {
      addTask(state,action) {
        state.tasks.push(action.payload);
      },
      removeTask(state, action) {
        state.tasks.splice(state.tasks.findIndex((task) => task._id === action.payload), 1)

      },
      updateTaskStatus(state, action) {
        const toggledTask = state.tasks.find((task) => task._id === action.payload)
        toggledTask.isCompleted = !toggledTask.isCompleted;

      }
    },
    extraReducers: {
      [getInitialTasks.pending]:(state) => {
        state.status = 'Loading';
      },
      [getInitialTasks.fulfilled]: (state, action) => {
       state.status = 'Resolved';
       state.tasks = action.payload;
      },
      [getInitialTasks.rejected]: (state, action) => {
        state.status = 'Rejected';
        state.error = action.payload;
      },

    }
})

export const { removeTask, updateTaskStatus, addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
