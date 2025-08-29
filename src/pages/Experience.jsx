import React from 'react'
import ExperienceImage from '../assets/ExperienceImage.jpeg'
const Experience = () => {
    return (
        <section className=' mt-32 mb-5 h-full w-full px-8 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 '>

            <div className='flex flex-col items-center justify-center gap-3'>
                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-4xl font-semibold  text-[#e59400]' >Welcome to Our Experience</h2>
                    <h4 className='text-gray-500 font-mono'>You'll Never Want To Leave</h4>
                    <h3 className='text-2xl font-semibold  text-[#e59400]'>Services</h3>

                </div>
                <div className='flex flex-wrap justify-center items-center gap-2'>
                    <div className='p-2 rounded-md flex justify-center items-center text-white font-semibold bg-[#e59400] font-mono'>
                        Get Breakfast
                    </div>
                    <div className='p-2 rounded-md flex justify-center items-center text-white font-semibold bg-[#e59400] font-mono'>
                        Transfer Services
                    </div>
                    <div className='p-2 rounded-md flex justify-center items-center text-white font-semibold bg-[#e59400] font-mono'>
                        Friendly Service
                    </div>
                    <div className='p-2 rounded-md flex justify-center items-center text-white font-semibold bg-[#e59400] font-mono'>
                        Cozy Rooms
                    </div>
                </div>
                <div>
                    <p className='text-gray-500 font-mono'>Hotel Hunt is a leading online accommodation site. We’re passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.

                        So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house, or tree house, we’ve got you covered.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h3 className='text-2xl font-semibold  text-[#e59400]'>Additional Services</h3>
                    <ul className='flex flex-wrap justify-center items-center gap-2 font-mono'>
                        <li className='py-1 px-3 bg-orange-400 text-white rounded-md font-semibold'>Travel Plan</li>
                        <li className='py-1 px-3 bg-orange-400 text-white rounded-md font-semibold'>Catering Service</li>
                        <li className='py-1 px-3 bg-orange-400 text-white rounded-md font-semibold'>Hire Driver</li>
                        <li className='py-1 px-3 bg-orange-400 text-white rounded-md font-semibold'>Laundry</li>
                    </ul>

                </div>
                <div>
                    <button className='border border-[#e59400] text-[#e59400] mt-3 my-font px-3 py-2 rounded-full hover:bg-[#e59400] hover:text-white'>Reserve Your Room Now</button>
                </div>
            </div>
            <div className='h-96 w-full overflow-hidden group rounded-md cursor-pointer'>
                <img src={ExperienceImage} alt="Experience Image" className='rounded-md w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
            </div>

        </section>
    )
}

export default Experience