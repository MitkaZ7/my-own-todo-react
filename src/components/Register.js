import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import Form from './Form';
const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleReister(evt) {
    evt.preventDefault();
    props.handleRegistration(email, password);
  }
    return (
      <Form
      buttonText='Registrate'
      formTitle='Registration'
      linkText='Already registred?'
      linkTitle='Sign In'
        submitForm={handleReister}
      />

    )
}

export default Register;
