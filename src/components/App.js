import { Routes, Route } from 'react-router-dom';

import Tasks from './Tasks'
import Task from './Task'

import Welcome from './Welcome'
import Layout from './Layout'
import NotFound from './NotFound'
import Login from './Login'
import Register from './Register'
import Admin from './Admin'

import Unauthorized from './Unauthorized'

import * as authApi from '../utils/Auth'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Welcome />}/>
        <Route path='signin' element={<Login />} />
        <Route path='signup' element={<Register />} />
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
