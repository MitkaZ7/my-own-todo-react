import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../store/slices/TasksSlice'


function TaskItem({_id, text, isCompleted}){
  const dispatch = useDispatch();

  const taskCompletedClassName = (`task_state_completed`);



  function handleClick() {
    dispatch(updateTask(_id));
  }

  function handleDeleteClick() {
    dispatch(deleteTask(_id));
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

