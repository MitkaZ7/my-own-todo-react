import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'
const Layout = () => {
  return (
    <>
      <Header />
      <Profile />
      <Outlet />
      <Footer />

    </>
  )
}

export default Layout;
