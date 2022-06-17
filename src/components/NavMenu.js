import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class NavMenu extends Component {
  render() {
    return (
      <nav className="header__menu">
        <ul className="header__menu-list">
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
        <div className="header__menu-toggler menu-toggler">
          <span className="menu-toggler__bar"></span>
          <span className="menu-toggler__bar"></span>
          <span className="menu-toggler__bar"></span>

        </div>
      </nav>
    )
  }
}
