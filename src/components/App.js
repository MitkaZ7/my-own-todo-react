import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';

import Tasks from './Tasks'
import Task from './Task'
import api from '../utils/Api'
import Welcome from './Welcome'
import Layout from './Layout'
import NotFound from './NotFound'
import Login from './Login'
import Register from './Register'
import Admin from './Admin'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Unauthorized from './Unauthorized'

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [tasks, setTasks] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState({});
  let navigate = useNavigate();


  const handleTaskComplete = (task) => {
    // setSelectedTask(task);
    // console.log(task)
    // api
    //   .updateTask(task._id)
    //   .then(() => {
    //     console.log(task)
    //   })
    //     .catch((e) => {
    //       console.log('Статус задачи не изменился');
    //     })
  }
  function handleTaskDelete(task) {
    api
      .removeTask(task._id)
      .then(() => {
        setTasks((state) => state.filter((t) => t._id !== task._id));
      })
      .catch((e) => {
        console.log('Ошибка удаления задачи');
      })
  }
  function handleAddTask(task) {
    api.addNewTask(task)
      .then((res) => {
        setTasks([res, ...tasks]);
      })
      .catch((e) => {
        console.log('Ошибка, не удалось добавить новую задачу');
      })
  }

  useEffect(() => {
    api
      .getInitialTasks()
      .then((res) => {
        setTasks(res);
      })
      .catch((e) => {
        console.log('Ошибка, список задач не загружен');
      })
  }, []);

  function handleLoadTasks() {
    // Promise.all([api.getInitialTasks()])
    // .then((res) => {

    // })
    // .catch((e)=>{
    //   console.log('Ошибка, список задач не загружен')
    // })

  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Welcome />}/>
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Register />} />
        <Route path='unauthorized' element={<Unauthorized />} />
        {/* Protected routes */}
          <Route
            path='tasks'
            element={
              <Tasks
                onTaskDelete={handleTaskDelete}
                onTaskClick={handleTaskComplete}
                onTaskAdd={handleAddTask}
                tasks={tasks}
                />
              }
          />
        <Route path='tasks/:id' element={<Task />}/>
        <Route path='admin' element={<Admin />} />
        {/* cath all */}
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </CurrentUserContext.Provider>

  );
}

export default App;
