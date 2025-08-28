import React from 'react'
import offer_1 from '/src/assets/offer_1.jpg'
import offer_2 from '/src/assets/offer_2.jpg'
import offer_3 from '/src/assets/offer_3.jpg'
import offer_4 from '/src/assets/offer_4.jpg'

const Offers = () => {
    const offers = [


        {
            _id: 1,
            title: "Sunny Escape Deal",
            description: "Get a free night stay and morning meal included",
            priceOff: 25,
            expiryDate: "Aug 31",
            image: offer_1
        },

        {
            _id: 2,
            title: "Couple’s Special",
            description: "Relaxing package with spa services for two",
            priceOff: 20,
            expiryDate: "Sep 20",
            image: offer_2

        },

        {
            _id: 3,
            title: "Advance Luxury Saver",
            description: "Reserve two months early and enjoy discounts at top-class hotels globally",
            priceOff: 30,
            expiryDate: "Sep 25",
            image: offer_3
        },

        {
            _id: 4,
            title: "Family Fun Package",
            description: "Enjoy theme park tickets and family-friendly amenities",
            priceOff: 20,
            expiryDate: "Oct 10",
            image: offer_4,
        }


    ]
    return (
        <section className='flex flex-col justify-center items-center -z-50 py-8 px-6 bg-[#eaeaea]'>
            <div className='text-center mb-6'>
                <h2 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-[#e69138] to-[#b6d7a8] bg-clip-text text-transparent '>Special Offers</h2>
                <p className='text-[#4b4b4b]'>Discover limited-time deals to save more on your next trip .</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-3'>
                {offers.map((offer,index)=>(
                    <div key={index} className='flex flex-col overflow-hidden shadow-[#11101025] shadow-md justify-center gap-2 bg-white rounded-2xl p-3'>
                        <div className='h-48 w-full rounded-xl'>
                            <img src={offer.image} alt={offer.title} className='h-full w-full object-cover rounded-xl'/>
                        </div>
                        <div className='flex flex-col justify-center gap-4 '>
                            <div className='text-center'>
                                <h3 className='text-[#e69138] text-xl font-semibold'>{offer.title}</h3>
                                <p className='text-sm  text-[#525050d8] text-wrap max-w-[350px]'>{offer.description}</p>
                            </div>
                            <div className='text-center'>
                                <span className='text-[#ae9898] font-medium'>Valid until {offer.expiryDate}</span>
                            </div>
                            <div className='flex justify-between items-center '>
                                <span className='text-sm font-semibold text-[#73481c]'>Save {offer.priceOff} % price today</span>
                                <button className='py-2 px-5 rounded-xl bg-[#ce7e00] text-white font-bold text-sm hover:bg-[#ea9102]'>
                                    View Offer
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Offers