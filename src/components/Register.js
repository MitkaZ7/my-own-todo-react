import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { createUser, setUser } from '../store/slices/UserSlice';

import Form from './Form';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);

  }
  function handleChangePassword(evt) {
    setPassword(evt.target.value);

  }

  function handleRegister(evt) {
    evt.preventDefault();
    const regData = {
      email,
      password
    }
    dispatch(createUser(regData))
    .then((res)=>{
      // console.log(res.requestStatus)
    });
    navigate('/login');
  }
    return (
      <Form
      buttonText='Registrate'
      formTitle='Registration'
      linkText='Already have an account?'
      linkTitle='Login'
      linkTo='/login'
        onSubmit={handleRegister}
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
        <span className="form__input-error"></span>
      </Form>

    )
}

export default Register;
