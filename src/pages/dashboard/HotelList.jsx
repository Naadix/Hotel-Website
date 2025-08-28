import React from 'react'
import { useContext } from 'react'
import { HotelContext } from '/src/context/HotelContext'
import { FaLocationArrow } from 'react-icons/fa'

const HotelList = () => {
  const {roomsData} = useContext(HotelContext);
  return (
    <div className='mt-32 mb-4  flex flex-col gap-2 '>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold  text-[#e59400]' >Available Hotels</h2>
      </div>
      <div className='flex flex-col gap-3 divide-y divide-gray-400'>
        {roomsData.map((room) => (
          
          <div key={room._id} className={`grid md:grid-cols-2 place-items-center gap-3 p-2 rounded-md max-w-[450px] overflow-hidden ${room.isAvailable ? 'bg-green-500':'bg-red-500'}`}>
             <div className='w-full h-full rounded-md'>
              <img src={room.images} alt={room.hotel} className='w-full h-full rounded-md object-cover' />
            </div>
            <div className='flex flex-col gap-1 items-center justify-center '>
              <h3 className='text-xl font-semibold  text-white' >{room.hotel}</h3>
              <span className='text-base text-[#2c2828] font-mono font-medium '>{room.city}</span>
              <div className='flex justify-center items-center text-[#362d2d] gap-1'>
                <FaLocationArrow />
                <span className='text-xs'>{room.address}</span>
              </div>
              <div>
                <span className='text-sm font-semibold text-[#0e0d0d]' >{room.isAvailable ? 'Available' : 'Not Available'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelList