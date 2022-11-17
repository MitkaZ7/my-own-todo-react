import React from 'react'
import { useNavigate } from 'react-router-dom'
const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className='section section-unauthorized'>
      <h1 className='section__title'>Unauthorized</h1>
        <br/>
      <p className='section__subtitle'>You do not have access to the requested page.</p>
      <button className='button section__button' onClick={goBack}>&larr; Go Back and authorize</button>
    </section>
  )
}

export default Unauthorized
