import React from 'react'
import { useState } from 'react';
import uploadArea from '../../assets/uploadArea.png'
const AddHotel = () => {
    const [image, setImage] = useState({
        1: null,
        2: null,
        3: null
    });

    const [inputData, setInputData] = useState({
        roomType: "",
        pricePerNight: "",
        amenities: {
            "Free Wi-Fi": false,
            "Breakfast Included": false,
            "Airport Shuttle": false,
            "Swimming Pool": false,
        }
    });
    return (
        <div className='mt-32  flex flex-col gap-2 '>
             <div>
                <h2 className='text-2xl font-semibold  text-[#e59400]'> Add Hotel </h2>
                <p className='text-base text-gray-500'>Please fill in the details below to add a new hotel</p>
            </div>
            <div className='grid grid-cols-3'>
                {Object.keys(image).map((key)=>(
                    <label htmlFor={`hotelImage${key}`} key={key}>
                        <img src={image[key] ? URL.createObjectURL(image[key]): uploadArea } alt="" className='max-h-16 cursor-pointer rounded-lg opacity-80' />
                        <input type="file"
                        id={`hotelImage${key}`}
                        accept='image/*'
                        hidden
                        onChange={(e)=> setImage({...image,[key]:e.target.files[0]})}
                        />
                    </label>
                ))}
            </div>
        
            <div className='w-full flex sm:flex-col sm:gap-4'>
                <div className='flex-1 max-w-50'>
                    <h2 className='text-2xl font-semibold  text-[#e59400] mt-2'>Room Type</h2>
                    <select  value={inputData.roomType} onChange={(e) => setInputData({...inputData, roomType: e.target.value})}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d06a00]' >
                        <option value="">Select Room Type</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="suite">Suite Room</option>
                    </select>
                </div>
            </div>
            <div>
                <p className='text-2xl font-semibold  text-[#e59400] mt-2'>Price Par Night</p>
                <input type="number" placeholder='Enter price per night' className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d06a00]' onChange={(e) => setInputData({...inputData, pricePerNight: e.target.value})} />
            </div>
            <div>
                <h2 className='text-2xl font-semibold  text-[#e59400] mt-1'>Amenities</h2>
                <div className='flex flex-col gap-1'>
                    {Object.keys(inputData.amenities).map((amenity,index) => (
                        <label key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={inputData.amenities[amenity]}
                                onChange={(e) => setInputData({
                                    ...inputData,
                                    amenities: {
                                        ...inputData.amenities,
                                        [amenity]: e.target.checked
                                    }
                                })}
                            />
                            <span className="ml-2 ">{amenity}</span>
                        </label>
                    ))}
                </div>
            </div>
            <button type="button" className='bg-[#d06a00] text-white px-4 py-2 font-semibold hover:bg-[#ef7d02] my-2 rounded-lg transition-all duration-300'>Add Hotel</button>
        </div>
    )
}

export default AddHotel