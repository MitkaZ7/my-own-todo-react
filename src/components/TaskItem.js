import {useState} from 'react';
import { useDispatch } from 'react-redux'

// import { CurrentUserContext } from '../contexts/CurrentUserContext';
function TaskItem({_id, text, isCompleted}){
  const dispatch = useDispatch();

  const taskCompletedClassName = (`task_state_completed`);
  const activeChecboxClassName = (`task__checkbox_state_checked`);
  const [isChecked, setChecked] = useState(true)

  function handleClick() {
    // props.onTaskClick(props.task);
  }

  function handleDeleteClick() {

    // props.onTaskDelete(task);
  }

    return (
      <li className={`task ${isCompleted ? taskCompletedClassName : ''}`} key={_id}>
      <div className="task__content">
        <button className="button task__button-edit"></button>
          <label className="task__input-label">
          <span className="task__text">{text}</span>
            <input
            className='task__input-сhbx'
            type="checkbox"
            // onClick={handleClick}
            //   defaultChecked={task.isCompleted ? isChecked : !isChecked}
            //   onChange={() => setChecked(isChecked)}

            />
          <span className="task__checkbox"></span>

        </label>
          <button className="button task__button-remove" onClick={handleDeleteClick}></button>
      </div>
    </li>
    )
}

export default TaskItem;

