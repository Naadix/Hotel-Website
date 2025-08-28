import React from 'react'
import Navbar from '../../components/dashboard/Navbar'
import SideNavbar from '../../components/dashboard/SideNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <div className=' flex md:gap-4 gap-2  h-full'>
          <SideNavbar/>
          <div>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Layout