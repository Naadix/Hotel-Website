import React from 'react'
import hotel_3 from '../assets/hotel_3.jpg'

const Hero = () => {
    const cities = [
        'Dubai',
        'Istanbul',     
        'Paris',
        'New York',
        'Tokyo'
    ]
    return (
        <div style={{ backgroundImage: `url(${hotel_3})` }} className=" h-screen bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center ">
            <div className='absolute inset-0 bg-black opacity-60'></div>

                <div className=' relative h-[70vh] md:mt-6 z-10 grid md:grid-cols-2 place-items-center gap-5 px-3 '>  
                    <div className='mt-2 md:mt-5'>
                    <h2 className='text-4xl md:text-5xl bg-gradient-to-r from-[#e69138] to-[#b6d7a8] bg-clip-text text-transparent text-center font-bold'>Welcome to Our Hotel</h2>
                    <p className='mt-2 text-sm md:text-xl text-white font-semibold text-center'>Experience luxury and comfort like never before</p>
                    <div className='mt-3 md:mt-6 flex justify-center'>
                        <button className={`relative border z-10 border-[#a16527] overflow-hidden text-white px-3 py-2 md:px-6 md:py-2 rounded-full bg-[#a16527]   font-bold after:absolute after:content-[''] after:right-0 after:-z-10 after:top-0 after:w-0 after:h-full after:bg-[#e69138] hover:after:w-full after:transition-all after:duration-300  `}>Book Now</button>
                    </div>
                    </div>
                    {/* Booking Form */}
                    <section className="bg-white w-full p-3 md:p-6 mx-auto rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#ffa500] to-[#9fc5e8] bg-clip-text text-transparent">Book Your Stay</h2>
                        <form className=" space-y-2 md:space-y-4  ">
                            <div>
                                <label htmlFor="destination" className="block text-sm font-medium text-[#e59400]">Destination</label>
                                <input list="destination" type="text" name="destination" placeholder="Dubai, Istanbul..."
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d06a00]" />
                                      <datalist id ='destination'>
                                        {cities.map((city, index)=>(
                                        <option key={index} value={city}/>
                                        ))}
                                        </datalist>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="checkin" className="block text-sm font-medium text-[#e59400]">Check-in</label>
                                    <input type="date" id="checkin" name="checkin"
                                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-[#d06a00]" />
                                </div>
                                <div>
                                    <label htmlFor="checkout" className="block text-sm font-medium text-[#e59400]">Check-out</label>
                                    <input type="date" id="checkout" name="checkout"
                                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-[#d06a00]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium  text-[#e59400]">Guests</label>
                                    <input type="number" id="guests" name="guests" min="1" max="10" placeholder='1'
                                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-[#d06a00]" />
                                </div>
                                <div>
                                    <label htmlFor="rooms" className="block text-sm font-medium  text-[#e59400]">Rooms</label>
                                    <input type="number" id="rooms" name="rooms" min="1" max="5"  placeholder='1'
                                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-[#d06a00]" />
                                </div>
                            </div>


                            <div className=' text-center '>
                                <button className='relative mt-3 z-10 font-semibold overflow-hidden py-2 px-4 border border-[#e69705] text-[#e59400] hover:text-white rounded-full
                                after:absolute after:content-[""] after:-z-10 after:left-0 after:top-0 after:w-0 after:h-full after:rounded-full after:bg-[#e89c4b]
                                hover:after:w-full after:transition-all after:duration-300' type="submit">
                                    Search Hotels
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
        </div>
    )
}

export default Hero