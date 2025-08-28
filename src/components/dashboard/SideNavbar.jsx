import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavbar = () => {
  const SideNavbarLinks = [
    {name:'Dashboard' , path:'/dashboard'},
    {name:'Add Hotel' , path:'/dashboard/add-hotel'},
    {name:'Hotel List' , path:'/dashboard/hotel-list'}
  ]
  return (
    <div className='w-32 overflow-x-hidden md:w-36 min-h-screen border-r border-gray-500 flex flex-col pt-24   
     '>
      {SideNavbarLinks.map((link,index)=>(
        <NavLink key={index} end to={link.path} className={({isActive})=>`text-black sm:text-xs md:block mt-2 text-center md:text-base font-mono  font-medium hover:bg-black hover:text-white transition-all duration-300 ${isActive ? 'bg-orange-500 text-white' :'text-gray-400'}`}>
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

export default SideNavbar