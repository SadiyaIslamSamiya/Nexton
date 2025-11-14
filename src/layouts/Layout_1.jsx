import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../components/Navber'

const Layout_1 = () => {
  return (
    <>
    <Navber/>
      <Outlet/>
    </>
  )
}

export default Layout_1
