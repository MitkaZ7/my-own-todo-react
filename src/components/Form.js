import React, { useState } from 'react'

import { Link } from 'react-router-dom';


const Form = ({ buttonText, onSubmit, formTitle, linkText, linkTitle, linkTo, children }) => {
  return (
    <div className="form-container">

      <form className='form' onSubmit={onSubmit}>
        <h3 className="form__title">{formTitle}</h3>
        <fieldset className="form__fieldset">
          {children}
        </fieldset>
        <button type="submit" className="form__btn-submit button button_submit">{buttonText}</button>
      </form>
      <span className="form__links">{linkText}&nbsp;<Link className="form__link" to={linkTo}>{linkTitle}</Link></span>
    </div>
  )
}

export default Form
