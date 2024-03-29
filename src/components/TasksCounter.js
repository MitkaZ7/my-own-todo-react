import React from 'react'
import { useSelector } from 'react-redux'
import { selectActiveCount, selectCompletedCount, selectTotalCount } from '../store/slices/CounterSlice'
const TasksCounter = () => {

  const totalCount = useSelector(selectTotalCount);
  const activeCount = useSelector(selectActiveCount);
  const completedCount = useSelector(selectCompletedCount);

  return (
    <div className="tasks__info">
      <div className="tasks__counters">
        <p className="tasks__counter counter">active:&nbsp;<span className="tasks__counter-active">{activeCount}</span></p>
        <p className="tasks__counter counter">completed:&nbsp;<span className="tasks__counter-completed">{completedCount}</span></p>
        <p className="tasks__counter counter">total:&nbsp;<span className="tasks__counter-total">{totalCount}</span></p>
      </div>
    </div>
  )
}


export default TasksCounter
