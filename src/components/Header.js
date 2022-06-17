import React from 'react';
import NavMenu from './NavMenu'

export default function Header() {
  return (
    <header className="header">
      <ul className="header__btns">
        {/* <li>
          <button className="header__button button">Ru</button>
        </li>
        <li>
          <button className="header__button button">En</button>
        </li> */}
      </ul>
      <NavMenu />
    </header>
  )
}
