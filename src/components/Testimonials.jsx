import React from 'react'
import testimonial_1 from '/src/assets/testimonial_1.jpg'
import testimonial_2 from '/src/assets/testimonial_2.png'
import testimonial_3 from '/src/assets/testimonial_3.jpg'
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Emma Rodriguez",
            address: "Barcelona, Spain",
            image: testimonial_1,
            rating: 5,
            review: "I’ve tried different hotel apps, but none matched the personal touch and attention to detail this service offers."
        },
        {
            id: 2,
            name: "Liam Johnson",
            address: "New York, USA",
            image: testimonial_2,
            rating: 4,
            review: "Everything went beyond my expectations. Booking was smooth, and the quality of the hotels was outstanding. Definitely recommending it!"
        },
        {
            id: 3,
            name: "Sophia Lee",
            address: "Seoul, South Korea",
            image: testimonial_3,
            rating: 5,
            review: "Fast and easy reservations, great customer service, and beautiful hotel choices. Will book again for sure!"
        }
    ];
    return (
        <section className='py-8 px-6 flex flex-col justify-center items-center gap-5'>
            <div className='text-center'>
                <h2 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-[#e69138] to-[#b6d7a8] bg-clip-text text-transparent '>What Our Guests Say</h2>
                <p className='text-[#4b4b4b] md:text-base sm:text-sm'>Real experience from real travelers. Discover why people love booking with us.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-5'>
                {testimonials.map((testimonial,index)=>(
                    <div key={index} className='flex flex-col gap-4 justify-center items-center bg-white  shadow-[#11101025] shadow-md rounded-lg p-3 max-w-[355px] max-h-[285px]' >
                        <div className='h-16 w-16 rounded-full'>
                            <img src={testimonial.image} alt={testimonial.name} className='h-full w-full rounded-full bg-cover '  />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-sm md:text-[1.2rem] text-[#d79732] font-semibold'>{testimonial.name}</h3>
                            <span className='text-sm  text-[#2d2d2d] font-medium'>{testimonial.address}</span>
                        </div>
                        <div className="flex gap-1 justify-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar key={i} className='text-[#ce7e00]' />
                            ))}
                        </div>
                        <div>
                            <p className=' text-[#2d2d2d] text-wrap text-sm '>{testimonial.review}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials