import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import { getInitialTasks } from '../store/slices/TasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import TasksList from './TasksList'
import TaskItem from './TaskItem'
import api from '../utils/Api'
import Welcome from './Welcome'
import Layout from './Layout'
import NotFound from './NotFound'
import Login from './Login'
import Register from './Register'
import Admin from './Admin'


import Unauthorized from './Unauthorized'

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.tasks)
  const [currentUser, setCurrentUser] = React.useState({});
  const [tasks, setTasks] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [taskState, setTaskState] = React.useState(false);
  let navigate = useNavigate();


  // const handleTaskComplete = (task) => {
  //   task.isCompleted = !task.isCompleted;
  //   api
  //     .updateTask(task)
  //     .then((task) => {
  //       setTasks((tasks) => tasks.map((t) => t._id === task._id ? task : t));
  //     })
  //     .catch((e) => {
  //         console.log('Статус задачи не изменился');
  //       })
  // }
  // function handleTaskDelete(task) {
  //   api
  //     .removeTask(task._id)
  //     .then(() => {
  //       setTasks((state) => state.filter((t) => t._id !== task._id));
  //     })
  //     .catch((e) => {
  //       console.log('Ошибка удаления задачи');
  //     })
  // }
  function handleAddTask(task) {
    api.addNewTask(task)
      .then((res) => {
        setTaskState(!taskState);
        setTasks([res, ...tasks]);
      })
      .catch((e) => {
        console.log('Ошибка, не удалось добавить новую задачу');
      })
  }

  useEffect(() => {
    dispatch(getInitialTasks())
  }, []);

  return (

      <Routes>
        <Route path='/' element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Welcome />}/>
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Register />} />
        <Route path='unauthorized' element={<Unauthorized />} />
        {/* Protected routes */}

        <Route path='tasks'element={
        <>
            {status === 'loading' && <h3>LOADING...</h3>}
            {error && <h3>ERROR HAPPENS: {error}</h3>}
            <TasksList />
        </>

        }/>
        <Route path='tasks/:id' element={<TaskItem />}/>
        <Route path='admin' element={<Admin />} />
        {/* cath all */}
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>



  );
}

export default App;
