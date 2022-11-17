import { useRef, useEffect, useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser, authorizeUser } from '../store/slices/UserSlice'
// import { useTranslation, Trans } from 'react-i18next'

import Form from './Form';

const Login = ({}) => {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  const handleLogin = (evt) => {
    evt.preventDefault();
    const authData = {
      email,
      password
    }
    dispatch(authorizeUser(authData))
      .then((res) => {
        // console.log(res.requestStatus)
      });
    navigate('/tasks');
    return authData;
  }

  return (
    // <Trans>
    <Form
      buttonText='Login'
      formTitle='Login'
      linkText='Don`t have an account?'
      linkTitle='Registrate'
      onSubmit={handleLogin}
      linkTo='/registration'
    >
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
    </Form>
    // </Trans>
  )
}

export default Login;
