import {useState, useEffect} from 'react'
import { createTask } from '../store/slices/TasksSlice'
function FormAddTask({ onSubmit }) {
  const [value, setValue] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({value});
    setValue('');
  }
  function handleChangeTaskInput(evt) {
    setValue(evt.target.value);
  }
  return (
    <form className="form form_add-task tasks__form" onSubmit={handleSubmit}>
      <input
      type="text"
      className="tasks__form-input form__input"
      id="form__input"
      name="task"
      onChange={handleChangeTaskInput}
      value={value}
      />
      <span className="form__input-error"></span>
      <button className="tasks__add-button button_type_submit" type="submit"></button>
    </form>
  )
}

export default FormAddTask
