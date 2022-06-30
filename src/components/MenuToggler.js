import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MenuToggler = ({onClick}) => {
  const activeBarClassName ='menu-toggler__bar_state_active';
  return (

    <div className="header__menu-toggler menu-toggler" onClick={onClick}>

      <span className="menu-toggler__bar"></span>
      <span className="menu-toggler__bar"></span>
      <span className="menu-toggler__bar"></span>
    </div>
  )
}

MenuToggler.propTypes = {}

export default MenuToggler
