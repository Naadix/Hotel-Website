import React from 'react'
import hotel_1 from '/src/assets/hotel_1.jpg'
import hotel_2 from '/src/assets/hotel_2.jpg'
import hotel_3 from '/src/assets/hotel_3.jpg'
import hotel_4 from '/src/assets/hotel_4.jpg'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const HotelCard = () => {
    const hotels = [
        {
            name: 'Grand Hotel',
            location: 'New York, USA',
            price: '$250/night',
            image: hotel_1,
            rating: 4.5
        },
        {
            name: 'Oceanview Resort',
            location: 'Miami, USA',
            price: '$300/night',
            image: hotel_2,
            rating: 4.7
        },
        {
            name: 'Mountain Lodge',
            location: 'Denver, USA',
            price: '$200/night',
            image: hotel_3,
            rating: 4.3
        },
        {
            name: 'City Center Inn',
            location: 'Chicago, USA',
            price: '$180/night',
            image: hotel_4,
            rating: 4.8
        }

    ]
    return (
        <section className=' flex flex-col justify-center items-center py-8 px-6'>
            <h2 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 bg-gradient-to-r from-[#e69138] to-[#b6d7a8] bg-clip-text text-transparent ' >Featured Hotels</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-3'>
                {hotels.map((hotel, index) => (
                    <div key={index} className='bg-white shadow-[#11101025] shadow-md rounded-lg overflow-hidden flex flex-col gap-5 p-2'>
                        <div className='h-48 w-full'>
                            <img src={hotel.image} alt={hotel.name} className='w-full h-full rounded-2xl object-cover opacity-90 hover:opacity-100 transition-all duration-500 ' />
                        </div>
                        <div className='flex flex-col justify-center gap-4'>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col justify-center items-start'>
                                    <h3 className='font-semibold text-[#2d2d2d]'>{hotel.name}</h3>
                                    <div className='flex justify-center items-center gap-1 text-[#7b7b7b]' >
                                        <FaLocationDot />
                                        <span className='text-sm'>{hotel.location}</span>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-1 text-[#d79732]'>
                                    <span>{hotel.rating}</span>
                                    <FaStar />

                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <span className='text-[#2d2d2d] font-semibold'>{hotel.price}</span>
                                </div>
                                <button className='py-2 px-5 rounded-xl bg-[#ce7e00] text-white font-bold text-sm hover:bg-[#ea9102]'>Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HotelCard