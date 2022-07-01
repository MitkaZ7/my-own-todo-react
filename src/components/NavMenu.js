import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuToggler from './MenuToggler'
const NavMenu = () =>  {
  const activeMenuClassName = 'header__menu-list_state_active';
  const[isMenuOpen, setMenuOpen] = useState(false);
  function handleOpenMenu(e) {
    setMenuOpen(!isMenuOpen);
  }
    return (
      <nav className="header__menu">

        <ul className={`header__menu-list ${isMenuOpen ? activeMenuClassName : ''}`}>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_login" to="/signin">Signin</NavLink>
          </li>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/signup">signup</NavLink>
          </li>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/">Home</NavLink>
          </li>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/admin">Admin</NavLink>
          </li>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/lounge">Lounge</NavLink>
          </li>
          <li className="header__menu-list-item">
            <NavLink className="header__menu-link header__menu-link_register" to="/tasks">Tasks</NavLink>
          </li>
        </ul>
        <MenuToggler onClick={handleOpenMenu} isMenuOpen={isMenuOpen}/>
      </nav>
    )

}
export default NavMenu
