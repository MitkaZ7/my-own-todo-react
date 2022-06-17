import React from 'react'
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <p>You must have been assigned an Admin role.</p>
      <Link to='/'>back</Link>
    </section>
  )
}

export default Admin;
