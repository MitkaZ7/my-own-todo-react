import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleRegistration(email, password);
  }

    return (
      <div className="popup popup_type_registration">
        <div className="popup__content">
          <h3 className="popup__title">registration</h3>
          <button className="button button_close button" type="button"></button>
          <form
          action="#"
          name="form-registration"
          className="form popup__form"
          onSubmit={handleSubmit}
          >
            {/* <fieldset className="popup__form-fieldset">
              <input
              className="popup__form-input form-input"
              id="input-email"
              type="email"
              name="email"
              placeholder="email"
              // onChange={handleChangeEmail}
              value={email}
                />
                <span className="popup__input-error"></span>
                <input
                className="popup__form-input form-input"
                id="input-password"
                type="password"
                name="password"
                placeholder="password"
                // onChange={handleChangePassword}
                value={password}
                />
                  <span className="popup__input-error"></span>
                </fieldset>
                <button type="submit" className="button_type_submit popup__button-submit">Registrate</button> */}
              </form>
              <span className="popup__links">Already registred?&nbsp;<Link className="popup__link" to="/signin">Sign In</Link></span>
            </div>
        </div>
    )
}

export default Register;
