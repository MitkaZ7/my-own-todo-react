import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Welcome from '../pages/Welcome'
import Layout from './Layout'
import NotFound from '../pages/NotFound'
import Login from './Login'
import Register from './Register'
import Admin from './Admin'
import Lounge from './Lounge'
import Unauthorized from './Unauthorized'
import RequireAuth from './RequireAuth'
import * as authApi from '../utils/Auth'
function App() {
  // const [currentUser, setCurrentUser] = React.useState({});
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  // const [selectedTask, setSelectedTask] = React.useState({});
  // const [tasks, setTasks] = React.useState([]);
  // const [loggedIn, setLoggedIn] = React.useState(false);
  // const [email, setEmail] = React.useState('');
  // const [isSuccessSignUp, setIsSuccessSignUp] = React.useState(false);
  // const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  // const history = useHistory();
  // const handleTaskClick = (task) => {
  //   setSelectedTask(task);
  // }
  // function handleTaskDelete(task) {
  //   api
  //     .removeTask(task._id)
  //     .then(() => {
  //       setTasks((state) => state.filter((t) => t._id !== task._id));
  //       // closeAllPopups();
  //     })
  //     .catch((error) => {
  //       console.log('Ошибка удаления задания из списка');
  //     })
  // }
  // useEffect(() => {
  //   checkToken();
  //   loggedIn ? history.push('/') : history.push('/sign-in');
  // }, []);
  // function handleCheckToken() {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     authApi.checkToken(token)
  //       .then((res) => {
  //         if (res.data.email) {
  //           setEmail(res.data.email);
  //           setLoggedIn(true);
  //           history.push('/');
  //         }
  //       })
  //       .catch((error) => {
  //         console.log('Не удалось авторизоваться ' + error);
  //       })
  //   }
  // }
  // useEffect(() => {
  //   handleCheckToken();
  // }, []);
  // // registration
  // function handleRegistration(email, password) {
  //   authApi.register(email, password)
  //     .then((res) => {
  //       if (res.data) {
  //         setIsSuccessSignUp(true);
  //         // handleInfoTooltipOpen();
  //         history.push('/sign-in');
  //       }
  //     })
  //     .catch((error) => {
  //       setIsSuccessSignUp(false);
  //       // handleInfoTooltipOpen();
  //       console.log('Не удалось зарегистрироваться ' + error);
  //     })
  // }
  // // lo
  // // login
  // function handleLogin({ email, password }) {
  //   authApi.authorize({ email, password })
  //     .then((res) => {
  //       if (res.message === 'Вход совершен успешно') {
  //         checkToken();
  //         Promise.all([api.getUserInfo(), api.getInitialCards()]).then((res) => {

  //         }).catch(() => console.log(res.status));
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Авторизация не прошла' + error);
  //     })
  // }
  // //logout
  // function handleSignOut() {
  //   localStorage.removeItem('jwt');
  //   setEmail('');
  //   setLoggedIn(false);
  //   history.push('/sign-in');
  // }
  // function checkToken() {
  //   authApi
  //     .checkToken()
  //     .then((res) => {
  //       setLoggedIn(true);
  //       setEmail(res.data);
  //     })
  //     .catch((err) => {
  //       setLoggedIn(false);
  //       console.log(err)
  //     })
  // }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}/>
        {/* Public routes */}
        <Route path='welcome' element={<Welcome />}/>
        <Route path='signin' element={<Login />} />
        <Route path='signup' element={<Register />} />
        <Route path='unauthorized' element={<Unauthorized />} />
        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='/' element={<Main />} />
          <Route path='admin' element={<Admin />} />
          <Route path='lounge' element={<Lounge />} />
        </Route>
        {/* cath all */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
