import { useRef, useEffect, useState} from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom'
const LOGIN_URL = '/auth';
const Login = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <div className="popup popup_type_login">
      <div className="popup__content">
        <h3 className="popup__title">Login</h3>
        <form
        action="#"
        name="form-registration"
        className="form popup__form"
        onSubmit={handleSubmit}>
          <fieldset className="popup__form-fieldset">
            <input
            className="popup__form-input form-input"
            id="inputEmail"
            type="email"
            name="email"
            placeholder="email"

            onChange={handleChangeEmail}
            value={email}


            />
            <span className="popup__input-error"></span>
            <input
            className="popup__form-input form-input"
            id="input-password"
            type="password"
            name="password"
            placeholder="password"

            onChange={handleChangePassword}
            value={password}

            />
            <span className="popup__input-error"></span>
          </fieldset>
          <button type="submit" className="button_type_submit popup__button-submit">Login</button>
        </form>
        <span className="popup__links">Don't have an account?&nbsp;<Link className="popup__link" to="/signup">Registration</Link></span>
      </div>
      </div>

  )
}

export default Login;
