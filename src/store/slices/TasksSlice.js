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

    // const response = await api.getInitialTasks();
    // const tasksData = await response.json();
    // console.log(response)
    // return tasksData;
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
  async (task) => {
    const res = await api.updateTask(task);
    return res.data;
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


      // [deleteTask.fulfilled]: (state, action) => {
      //   state.tasks = state.tasks.map((t) => t._id === task._id ? task : t);
      // }


    }
})

export const { removeTask, toggleTodoComplete, addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
