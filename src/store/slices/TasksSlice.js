import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/Api'

export const getInitialTasks = createAsyncThunk(
  'tasks/getInitialTasks',
  async (_, {rejectWithValue}) => {
    try {
      const data = await api.getInitialTasks();
      return data;
    } catch (error) {
        return rejectWithValue((error.message))
    }
  }
)

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.addNewTask(data);
      console.log(res)
      dispatch(addTask(res))
    } catch (error) {
      return rejectWithValue((error.message))
    }

  }
)

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (id, { rejectWithValue, dispatch, getState }) => {
    // const tasky = getState().tasks.tasks.find(task => task._id === id);
    let updatedTask = {...getState().tasks.tasks.find(task => task._id === id)}
    updatedTask.isCompleted = !updatedTask.isCompleted
    try {
      await api.updateTask(updatedTask)
      dispatch(updateTaskStatus(id));
    } catch (error) {
      return rejectWithValue((error.message))
    }
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskId, {rejectWithValue, dispatch}) => {
    try {
      await api.removeTask(taskId);
      console.log(taskId)
      dispatch(removeTask(taskId));
    } catch (error) {
      return rejectWithValue((error.message))
    }
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
        toggledTask.isCompleted = !toggledTask.isCompleted
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
