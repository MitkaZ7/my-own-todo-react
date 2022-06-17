import { useParams } from "react-router-dom";
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
const Task = (props) => {
   const { id } = useParams();

    return (
      <li className="task">
      <div className="task__content">
        <button className="button task__button-edit"></button>
        <label className="task__input-label">
          <span className="task__text"></span>
          <input className="task__input-сhbx" type="checkbox"/>
          <span className="task__checkbox"></span>
          <p>{id}</p>
        </label>
          <button className="button task__button-remove" ></button>
      </div>
    </li>
    )
}

export default Task;

