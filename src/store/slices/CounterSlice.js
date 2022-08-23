import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeQty: 0,
  completedQty: 0,
  totalQty: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    countAll(state, action){
      const tasksArray = action.payload;
      state.activeQty = 0;
      state.completedQty = 0;
      state.totalQty = tasksArray.length
      tasksArray.filter((task) => {
        if (task.isCompleted === true) {
          state.completedQty +=1
        } else {
          state.activeQty += 1;
        }
      })
    },


  }
})

export const selectActiveCount = (state) => state.counter.activeQty;
export const selectCompletedCount = (state) => state.counter.completedQty;
export const selectTotalCount = (state) => state.counter.totalQty;
export const { countAll } = counterSlice.actions;
export default counterSlice.reducer
