import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';


const Form = ({ buttonText, submitForm, formTitle, linkText, linkTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }
  return (
    <div className="form-container">

      <form className='form'>
        <h3 className="form__title">{formTitle}</h3>
        <fieldset className="form__fieldset">
          <input
            className="form__input"
            id="inputEmail"
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChangeEmail}
            value={email}
          />
          <span className="form__input-error"></span>
          <input
            className="form__input"
            id="input-password"
            type="password"
            name="password"
            placeholder="password"

            onChange={handleChangePassword}
          value={password}

          />
          <span className="form__input-error"></span>
          </fieldset>
          <button type="submit" className="form__btn-submit button button_submit" onClick={submitForm}>{buttonText}</button>
        </form>
      <span className="form__links">{linkText}&nbsp;<Link className="form__link" to="/signin">{linkTitle}</Link></span>
    </div>
  )
}

export default Form
