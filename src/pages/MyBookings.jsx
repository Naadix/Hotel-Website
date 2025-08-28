import React from 'react'
import allrooms_2 from '/src/assets/allrooms_2.jpg'
import allrooms_3 from '/src/assets/allrooms_3.jpg'
import { format } from 'date-fns'
const MyBookings = () => {
    const userBookingsData = [
        {
            _id: "bkg_01xa9c7e4bf1452a8def33a1",
            user: "Nadir",
            image: allrooms_3,
            hotel: "UrbanStay Central",
            checkInDate: "2025-06-10T15:00:00.000Z",
            checkOutDate: "2025-06-12T11:00:00.000Z",
            totalPrice: 620,
            guests: 2,
            status: "confirmed",
            paymentMethod: "PayPal",
            isPaid: true,
            createdAt: "2025-06-05T12:18:32.101Z",
            updatedAt: "2025-06-06T08:40:00.000Z",
            __v: 0,
        },
        {
            _id: "bkg_02dcbbf9c3fa4317bbac79f9",
            user: "Nadir",
            image: allrooms_2,
            hotel: "Garden Luxe Hotel",
            checkInDate: "2025-07-01T14:00:00.000Z",
            checkOutDate: "2025-07-03T11:00:00.000Z",
            totalPrice: 780,
            guests: 3,
            status: "cancelled",
            paymentMethod: "Cash",
            isPaid: false,
            createdAt: "2025-06-28T10:00:00.000Z",
            updatedAt: "2025-06-30T17:45:22.900Z",
            __v: 0,
        },

    ];
    return (
        <div className='overflow-x-auto mt-32 mb-3 mx-5 rounded-md p-5 bg-[#e0e0e0] felx flex-col items-center justify-center gap-4 shadow-lg shadow-black/10'>
            <div className='text-center'>
                <h3 className='text-[#e69138] font-bold text-2xl'>My Bookings</h3>
            </div>
            <div className='min-w-full'>
                <table className=' overflow-hidden border rounded-md mt-5 min-w-full '>
                    <thead className='bg-[#cccccc]'>
                        <tr className="text-left text-gray-600 uppercase text-sm">
                            <th className="py-3 px-4">User</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Hotel</th>
                            <th className="py-3 px-4">Guests</th>
                            <th className="py-3 px-4">Check-In</th>
                            <th className="py-3 px-4">Check-Out</th>
                            <th className="py-3 px-4">Total Price</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Payment</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                       {userBookingsData.map((booking)=>(
                        <tr key={booking._id} className='border-t border-black'> 
                        <td className='p-3 font-semibold text-sm  '>{booking.user}</td>
                        <td className='py-3 sm:px-3'><img src={booking.image} alt={booking.hotel} className='w-20 h-16 object-cover rounded-md'  /></td>
                        <td className='py-3 font-semibold text-sm '>{booking.hotel}</td>
                        <td className='p-3 font-bold text-sm'>{booking.guests}</td>
                        <td className='p-3 font-semibold text-sm '>{format(new Date (booking.checkOutDate),'yyyy-MM-dd')}</td>
                        <td className='p-3 font-semibold text-sm '>{format(new Date(booking.checkInDate),'yyyy-MM-dd')}</td>
                        <td className='p-3 font-bold text-sm  '>${booking.totalPrice}</td>
                        <td className={`p-3 font-semibold text-sm  ${booking.status == 'confirmed' ? 'text-green-500' : 'text-red-500'}`}>{booking.status == 'confirmed' ? 'Confirmed' : 'Cancelled'}</td>
                        <td className={`${booking.isPaid ? 'text-green-500':'text-red-500'} p-3 font-semibold text-sm `}>{booking.paymentMethod} ({booking.isPaid ? 'Paid':'UnPaid'})</td>
                        </tr>
                       ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default MyBookings