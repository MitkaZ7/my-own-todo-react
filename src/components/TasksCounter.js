import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectActiveCount, selectCompletedCount, selectTotalCount, countAll, countActive, countCompleted } from '../store/slices/CounterSlice'
const TasksCounter = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector(selectTotalCount);
  const activeCount = useSelector(selectActiveCount);
  const completedCount = useSelector(selectCompletedCount);
  // const tasksArray = useSelector((state)=> state.tasks.tasks)


  return (
    <div className="tasks__info">
      <div className="tasks__counters">
        {/* <button onClick={() => dispatch(incrementActive())}>Recount</button> */}
        <p className="tasks__counter counter">active:&nbsp;<span className="tasks__counter-active">{activeCount}</span></p>
        <p className="tasks__counter counter">completed:&nbsp;<span className="tasks__counter-completed">{completedCount}</span></p>
        <p className="tasks__counter counter">total:&nbsp;<span className="tasks__counter-total">{totalCount}</span></p>
      </div>
    </div>
  )
}


export default TasksCounter
