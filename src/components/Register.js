import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }
  function handleSubmit(evt) {
    // evt.preventDefault();
    // props.handleRegistration(email, password);
  }
    return (
      <div class="popup popup_type_registration">
        <div class="popup__content">
          <h3 class="popup__title">регистрация</h3>
          <button class="button button_close button" type="button"></button>
          <form action="#" name="form-registration" class="form popup__form">
            <fieldset class="popup__form-fieldset">
              <input class="popup__form-input form-input" id="input-email" type="email" name="email"
                placeholder="ваша почта" />
                <span class="popup__input-error"></span>
                <input class="popup__form-input form-input" id="input-password" type="text" name="password" placeholder="пароль"/>
                  <span class="popup__input-error"></span>
                </fieldset>
                <button type="submit" class="button_type_submit popup__button-submit">Зарегистрироваться</button>
              </form>
              <span class="popup__links">Уже есть аккаунт?&nbsp;<Link class="popup__link" to="/signin">Войдите</Link></span>
            </div>
        </div>
    )
}

export default Register;
