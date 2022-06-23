import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Tasks from './Tasks'
import Task from './Task'

import Welcome from './Welcome'
import Layout from './Layout'
import NotFound from './NotFound'
import Login from './Login'
import Register from './Register'
import Admin from './Admin'

import Unauthorized from './Unauthorized'
import api from '../utils/Api'
import * as authApi from '../utils/Auth'
function App() {
  const [email, setEmail] = React.useState('');
  let navigate = useNavigate();
  // registration
  function handleRegistration(email, password) {
    authApi.register(email, password)
      .then((res) => {
        if (res.data) {
          navigate('/login');
        }
      })
      .catch((error) => {
        // setIsSuccessSignUp(false);
        // handleInfoTooltipOpen();
        console.log('Не удалось зарегистрироваться ' + error);
      })
  }

  function handleLogin({ email, password }) {
    authApi.authorize({ email, password })
      .then((res) => {
        if (res.message === 'Вход совершен успешно') {
          checkToken();
          Promise.all([api.getInitialTasks()]).then((res) => {

          }).catch(() => console.log(res.status));
        }
      })
      .catch((e) => {
        throw new Error;
      })
  }
  function checkToken() {
    authApi
      .checkToken()
      .then((res) => {
        // setLoggedIn(true);
        setEmail(res.data);
      })
      .catch((err) => {
        // setLoggedIn(false);
        console.log(err)
      })
  }









  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Welcome />}/>
          <Route path='signin' element={<Login onSubmit={handleLogin}/>} />
          <Route path='signup' element={<Register handleRegistration={handleRegistration}/>} />
        <Route path='unauthorized' element={<Unauthorized />} />
        {/* Protected routes */}
        <Route path='tasks' element={<Tasks />} />
        <Route path='tasks/:id' element={<Task />}/>
        <Route path='admin' element={<Admin />} />
        {/* cath all */}
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </>

  );
}

export default App;
