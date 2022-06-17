import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class NavMenu extends Component {
  render() {
    return (
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-list-item">
            <Link className="header__menu-link header__menu-link_login" to="/signin">Войти</Link>
          </li>
          <li className="header__menu-list-item">
            <Link className="header__menu-link header__menu-link_register" to="/signup">Зарегистрироваться</Link>
          </li>
          <li className="header__menu-list-item">
            <Link className="header__menu-link header__menu-link_register" to="/welcome">Главная</Link>
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
