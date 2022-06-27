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


  const handleTaskClick = (task) => {
    setSelectedTask(task);
    console.log(task)
  }
  function handleTaskDelete(task) {
    api
      .removeTask(task._id)
      .then(() => {
        setTasks((state) => state.filter((c) => c._id !== task._id));
      })
      .catch((e) => {
        console.log('Ошибка удаления задачи');
      })
  }

  useEffect(() => {
    api
      .getInitialTasks()
      .then((res) => {
        setTasks(res);
        console.log(res)
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

  function handleAddTask(task) {

    const taskData = {task};
    console.log(taskData);
    api.addNewTask(task)
    .then((res) => {
        setTasks([res, ...tasks]);
      })
    .catch((e) => {
        console.log('Ошибка, не удалось добавить новую задачу');
      })
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
                onTaskClick={handleTaskClick}
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
