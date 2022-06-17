import { useRef, useEffect, useState} from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom'
const LOGIN_URL = '/auth';
const Login = () => {
  // const { setAuth } = useAuth()
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // function handleСhangeEmail(evt) {
  //   setEmail(evt.target.value);
  // }
  // function handleChangePassword(evt) {
  //   setPassword(evt.target.value);
  // }
  // function handleSubmit(evt) {
  //   // evt.preventDefault();
  //   // onSubmit({password, email});
  // }

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);


  useEffect(() => {
    setErrMessage('');
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

  }


  return (
    <div className="popup popup_type_login">
      <div className="popup__content">
        <h3 className="popup__title">Login</h3>
        {/* <button className="button button_close button" type="button"></button> */}
        <form action="#" name="form-registration" className="form popup__form">
          <fieldset className="popup__form-fieldset">
            <input
            className="popup__form-input form-input"
            id="inputEmail"
            type="email"
            name="email"
            placeholder="email"



            />
            <span className="popup__input-error"></span>
            <input
            className="popup__form-input form-input"
            id="input-password"
            type="password"
            name="password"
            placeholder="password"

            />
            <span className="popup__input-error"></span>
          </fieldset>
          <button type="submit" className="button_type_submit popup__button-submit">Login</button>
        </form>
        <span className="popup__links">Don't have an account?&nbsp;<Link className="popup__link" to="/signup">Registration</Link></span>
      </div>
      </div>

  )
}

export default Login;
