import {useState} from 'react'


const Form = ({ buttonText, submitForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }
  return (
    <div>
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
      <button type="submit" className="button_type_submit popup__button-submit" onClick={submitForm}>{buttonText}</button>
    </div>
  )
}

export default Form
