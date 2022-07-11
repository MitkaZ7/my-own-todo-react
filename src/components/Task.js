import {useState} from 'react';
import { useParams } from "react-router-dom";
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Task(props){
  const task = props.task;
  const taskCompletedClassName = (`task_state_completed`);
  const activeChecboxClassName = (`task__checkbox_state_checked`);
  const [isChecked, setChecked] = useState(true)

  function handleClick() {
    props.onTaskClick(props.task);
  }

  function handleDeleteClick() {
    props.onTaskDelete(task);
  }

    return (
      <li className={`task ${task.isCompleted ? taskCompletedClassName : ''}`} task={task} key={task._id}>
      <div className="task__content">
        <button className="button task__button-edit"></button>
          <label className="task__input-label">
          <span className="task__text">{task.text}</span>
            <input
            className='task__input-сhbx'
            type="checkbox"
            onClick={handleClick}
              defaultChecked={task.isCompleted ? isChecked : !isChecked}
              onChange={() => setChecked(isChecked)}

            />
          <span className="task__checkbox"></span>

        </label>
          <button className="button task__button-remove" onClick={handleDeleteClick}></button>
      </div>
    </li>
    )
}

export default Task;

