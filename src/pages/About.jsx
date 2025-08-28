import React from 'react'
import AboutImage from '/src/assets/AboutImage.jpeg'
const About = () => {
    return (
        <section className=' mt-32 mb-3 h-screen w-full px-8 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 items-start'>
           
            <div className='flex flex-col items-center justify-center gap-3'>
                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-4xl font-semibold  text-[#e59400]' >About Us</h2>
                <p className='text-gray-500 font-mono'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
                </div>
                <div>
                    <button className='border border-[#e59400] text-[#e59400] my-font px-3 py-2 rounded-full hover:bg-[#e59400] hover:text-white'>Read More</button>
                </div>
            </div>
             <div className='h-96 w-full overflow-hidden group rounded-md cursor-pointer'>
                <img src="src\assets\AboutImage.jpeg" alt="About Image" className='rounded-md w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
            </div>

        </section>
    )
}

export default About