import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className= 'fixed overflow-y-hidden h-24 w-full top-0 left-0  flex justify-between items-center px-4 shadow-md bg-white'>
        <div>
            <Link to = {'/'} ><img src="/logo.png" alt="logo" className=' h-36 w-36 object-contain mt-2  pt-2' /></Link>
        </div>
        <UserButton/>
    </header>
  )
}

export default Navbar