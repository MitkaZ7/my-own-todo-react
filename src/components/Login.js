import { useRef, useEffect, useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/UserSlice'
import Form from './Form';

const Login = ({onSubmit}) => {
  const dispatch = useDispatch();


  const handleLogin = (evt) => {
    evt.preventDefault();
  }

  return (
    <Form
      buttonText='Login'
      formTitle='Login'
      linkText='Don`t have an account?'
      linkTitle='Registrate'
      submitForm={handleLogin}
    />
  )
}

export default Login;
