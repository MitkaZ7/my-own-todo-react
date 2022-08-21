import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, updateTask } from '../store/slices/TasksSlice'
import { selectActiveCount, selectCompletedCount, selectTotalCount, countAll, countActive, countCompleted } from '../store/slices/CounterSlice'



function TaskItem({_id, text, isCompleted}){
  const counter = useSelector((state) => state.counter)
  const tasksArr = useSelector((state) => state.tasks.tasks)
  const dispatch = useDispatch();

  const taskCompletedClassName = (`task_state_completed`);



  function handleClick() {
    dispatch(updateTask(_id));
    // countAll(tasksArray);
    // dispatch(countMyTasks(tasksArr))
    console.log(counter)
  }

  function handleDeleteClick() {
    dispatch(deleteTask(_id));
    // countAll(tasksArray);
    // dispatch(countMyTasks(tasksArr))
  }

    return (
      <li className={`task ${isCompleted ? taskCompletedClassName : ''}`} key={_id}>
      <div className="task__content">
      {/* Temporary disabled because not relised */}
        {/* <button className="button task__button-edit"></button> */}
          <label className="task__input-label">
          <span className="task__text">{text}</span>
            <input
            className='task__input-сhbx'
            type="checkbox"
            checked={isCompleted}
            onChange={handleClick}
            />
          <span className="task__checkbox"></span>

        </label>
          <button className="button task__button-remove" onClick={handleDeleteClick} ></button>
      </div>
    </li>
    )
}

export default TaskItem;

