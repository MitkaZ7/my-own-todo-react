import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/TaskCounterSlice'
const TasksCounter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="tasks__info">

      <div className="tasks__counters">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p className="tasks__counter counter">active:&nbsp;<span className="tasks__counter-current">{count}</span></p>
        <p className="tasks__counter counter">completed:&nbsp;<span className="tasks__counter-completed">{count}</span></p>
      </div>
    </div>
  )
}


export default TasksCounter
