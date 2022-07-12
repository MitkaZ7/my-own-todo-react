import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/Api'

export const getInitialTasks = createAsyncThunk(
  'tasks/getInitialTasks',
  async () => {
    const data = await api.getInitialTasks();
    return data;
  }
)

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data) => {
    const res = await api.addNewTask(data);
    return res.data;
  }
)

const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task) => {
    const res = await api.updateTask(task);
    return res.data;
  }
)

const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskId) => {
    const res = await api.removeTask(taskId);
    return res.data;
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
        state.tasks.push({
          id: action.payload._id,
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        })
      }
    },
    extraReducers: {
      // [getInitialTasks.pending]:(state) => {
      //   state.status = 'Loading';
      // },
      [getInitialTasks.fulfilled]: (state, action) => {
       state.status = 'Resolved';
       state.tasks = action.payload;
      },

      [createTask.fulfilled]:(state,action) => {
        state.push(action.payload);
      },

      [updateTask.fulfilled]:(state,action) => {
        const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [removeTask.fulfilled]:(state,action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      }

    }
})

export const { addTodo, removeTodo, toggleTodoComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
