import { useParams } from "react-router-dom";
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Task(props){
  const taskCompletedClassName = (`task_state_completed`);

  function handleClick() {
    props.onTaskClick(props.task);

    props.task.isCompleted = !props.task.isCompleted;
    console.log(props.task)
  }

  function handleDeleteClick() {
    props.onTaskDelete(props.task);
  }

    return (
      <li className="task" task={props.task} key={props.task._id}>
      <div className="task__content">
        <button className="button task__button-edit"></button>
          <label className="task__input-label">
          <span className="task__text">{props.task.text}</span>
            <input className="task__input-сhbx" type="checkbox" onClick={handleClick}/>
          <span className="task__checkbox"></span>

        </label>
          <button className="button task__button-remove" onClick={handleDeleteClick}></button>
      </div>
    </li>
    )
}

export default Task;

