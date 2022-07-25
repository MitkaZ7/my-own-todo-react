import {useState, useEffect} from 'react'
import { createTask } from '../store/slices/TasksSlice'
import { useDispatch } from 'react-redux'
function FormAddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(createTask(text))
    setText('')

  }
  function handleChangeInput(evt) {
    setText(evt.target.value);
  }
  return (
    <form className="form form_add-task tasks__form" onSubmit={handleSubmit}>
      <input
      type="text"
      className="tasks__form-input form__input"
      id="form__input"
      name="task"
      onChange={handleChangeInput}
      value={text}
      />
      <span className="form__input-error"></span>
      <button className="tasks__add-button button_type_submit" type="submit"></button>
    </form>
  )
}

export default FormAddTask
