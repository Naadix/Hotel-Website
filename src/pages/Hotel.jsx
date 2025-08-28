import React, { useContext, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import {  useNavigate } from 'react-router-dom'
import { HotelContext } from '../context/HotelContext';



const Hotel = () => {
    const [openFiltre, setIsOpenFiltre] = useState(false);
    const navigate = useNavigate();

   const {roomsData} = useContext(HotelContext);
    const roomFilter = [
        "Single Room",
        "Double Room",
        "Swimming Pool",
        "Family Suite"
    ]

    const priceFilter = [
        "0 to 500",
        "500 to 1000",
        "1000 to 2000",
        "2000 to 3000",
    ]

    const sortOption = [
        "Price Low To High",
        "Price High To Low",
        "Newest"

    ]
    return (
         <section className='  mt-32 mb-3 px-8 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 items-start'>
            {/* Left */}
            <div className=' flex flex-col justify-center items-center gap-3'>
                <div className='text-center'>
                    <h2 className=' text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-[#e69138] to-[#b6d7a8] bg-clip-text text-transparent '>Hotle Rooms</h2>
                    <p className='text-[#4b4b4b] md:text-base sm:text-sm'>Discover comfortable and stylish rooms tailored to every traveler's needs - from cozy singles to luxurious suties.</p>
                </div>
                <div className='flex flex-col gap-3 divide-y divide-black/30 justify-center items-center'>
                    {roomsData.map((room, index) => (
                        <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center py-4'>
                            <div className='w-full h-full cursor-pointer rounded-xl'>
                                <img src={room.images} alt={room.hotel} className='bg-cover w-full h-full rounded-xl'
                                    onClick={() => navigate(`/rooms/${room._id}`)} />
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <div className='flex flex-col justify-center'>
                                    <h3 className='text-[#d79732] font-semibold md:text-xl'>{room.hotel}</h3>
                                    <span className='text-base text-[#2c2828] font-mono '>{room.city}</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex  gap-1'>
                                        {[...Array(room.rating)].map((_, i) => (
                                            <FaStar key={i} className='text-[#ce7e00]' />
                                        ))}
                                    </div>
                                    <div className='flex justify-center items-center text-[#7b7b7b] gap-1'>
                                        <FaLocationArrow />
                                        <span className='text-sm'>{room.address}</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-2'>
                                    {room.amenities.map((ament, index) => (
                                        <span key={index} className='p-2 bg-[#6b6b6b9e] text-xs font-medium rounded-md'>{ament}</span>
                                    ))}
                                </div>
                                <div>
                                    <span className='text-[#d79732] font-semibold'>{room.pricePerNight}$/Night</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Right */}
            <div className={`w-80 border border-gray-400 text-gray-600 py-2 flex flex-col lg:divide-y-2 divide-black/40 ${openFiltre ? 'divide-y-2 ' : 'divide-y-0'}`} >
                <div className='flex justify-between p-2'>
                    <span>Filters</span>
                    <div>
                        <button type="button" className=' hidden lg:block'>Clear</button>
                        <button type="button" className='block lg:hidden' onClick={() => setIsOpenFiltre(!openFiltre)}>{openFiltre ? 'Hide' : 'Show'}</button>
                    </div>
                </div>
                <div className={`${openFiltre ? 'h-auto' : 'h-0'} px-2 lg:h-auto overflow-hidden transition-all duration-700 flex flex-col justify-center items-start gap-3 `}>
                    <div className='flex flex-col justify-center gap-2'>
                        <div>
                            <h4 className='text-gray-500 font-semibold mt-3'>Popular Filtters</h4>
                        </div>
                        {roomFilter.map((r, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <input type="checkbox" name={r} id={r} />
                                <label htmlFor={r} className='text-sm'>{r}</label>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center gap-2'>
                        <div>
                            <h4 className='text-gray-500 font-semibold mt-3'>Price Range</h4>
                        </div>
                        {priceFilter.map((p, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <input type="checkbox" name={p} id={p} />
                                <label htmlFor={p} className='text-sm'>{p}</label>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center gap-2'>
                        <div>
                            <h4 className='text-gray-500 font-semibold mt-3'>Price Range</h4>
                        </div>
                        {sortOption.map((s, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <input type="radio" name={s} id={s} />
                                <label htmlFor={s} className='text-sm'>{s}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hotel