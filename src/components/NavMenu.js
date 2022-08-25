import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuToggler from './MenuToggler';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/UserSlice';
import { useDispatch } from 'react-redux'
const NavMenu = () =>  {
  const activeMenuClassName = 'header__menu-list_state_active';
  const[isMenuOpen, setMenuOpen] = useState(false);
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  function handleOpenMenu(e) {
    setMenuOpen(!isMenuOpen);
  }
  function handleLogout() {
    dispatch(removeUser())
  }

    return (
      <nav className="header__menu">

        <ul className={`header__menu-list ${isMenuOpen ? activeMenuClassName : ''}`}>


          { !isAuth
          ? <>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_login" to="/login">Login</NavLink>
          </li>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/registration">Registration</NavLink>
          </li>
              <li className="header__menu-list-item">
                <NavLink className="header__menu-link header__menu-link_register" to="/">Home</NavLink>
              </li>
          </>
           : <li className="header__menu-list-item">
              <NavLink className="header__menu-link header__menu-link_logout" to="/" onClick={handleLogout}>Logout</NavLink>
            </li>
          }



          {/* <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/admin">Admin</NavLink>
          </li> */}
          {/* <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/lounge">Lounge</NavLink>
          </li> */}
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/tasks">Tasks</NavLink>
          </li>
        </ul>
        <MenuToggler onClick={handleOpenMenu} isMenuOpen={isMenuOpen}/>
      </nav>
    )

}
export default NavMenu
