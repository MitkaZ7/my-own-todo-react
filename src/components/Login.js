import React, {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Login({onSubmit}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleСhangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({password, email});
  }
  return (
    <div className="popup popup_type_login" onSubmit={handleSubmit}>
      <div className="popup__content">
        <h3 className="popup__title">ВХОД</h3>
        {/* <button className="button button_close button" type="button"></button> */}
        <form action="#" name="form-registration" className="form popup__form">
          <fieldset className="popup__form-fieldset">
            <input className="popup__form-input form-input" id="inputEmail" type="email" name="email" placeholder="ваша почта" required onChange={handleСhangeEmail}/>
              <span className="popup__input-error"></span>
            <input className="popup__form-input form-input" id="input-password" type="text" name="password" placeholder="пароль" required onChange={handleChangePassword}/>
                <span className="popup__input-error"></span>
              </fieldset>
              <button type="submit" className="button_type_submit popup__button-submit">Войти</button>
            </form>
            <span className="popup__links">Нет аккаунта?&nbsp;<Link className="popup__link" to="/signup">Регистрация</Link></span>
          </div>
      </div>

  )
}

