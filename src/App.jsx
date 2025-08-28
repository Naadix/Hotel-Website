import React from 'react'
import Navbar from './components/Navbar'
import { Route, useLocation ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hotel from './pages/Hotel'    
import RoomDetails from './pages/RoomDetails'
import { HotelContext, roomsData } from './context/HotelContext'
import MyBookings from './pages/MyBookings'
import Layout from './pages/dashboard/Layout'
import AddHotel from './pages/dashboard/AddHotel'
import HotelList from './pages/dashboard/HotelList'
import Dashboard from '/src/pages/dashboard/Dashboard'
import About from './pages/About'
import Experience from './pages/Experience'
const App = () => {
  const isDashboard = useLocation().pathname.includes('dashboard');
  return (
    <>
    <HotelContext.Provider value={{roomsData}}>
      {!isDashboard && (
     <div className="">
        <Navbar />
      </div>
    )}
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/hotels' element={<Hotel/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/my-booking' element={<MyBookings/>}/>
        <Route path='/my-booking' element={<MyBookings/>}/>
        <Route path='/dashboard' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/dashboard/add-hotel' element={<AddHotel/>}/>
        <Route path='/dashboard/hotel-list' element={<HotelList/>}/>
        </Route>
      </Routes>
    </div>
    </HotelContext.Provider>
    </>
  )
}

export default App