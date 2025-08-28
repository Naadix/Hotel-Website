import React from 'react'

const Dashboard = () => {
    const dashInfo =
    {
        totalBooking: '7',
        totalRevenue: '1500'
    }

    return (
        <div className='mt-32 flex flex-col gap-3  text-black'>
            <div>
                <h2 className='text-2xl font-semibold  text-[#e59400]'>Hotel Booking Dashboard </h2>
                <p className='text-base text-gray-500'>Manage hotel listings , add new bookings , and keep track of all your</p>
            </div>
            <div className='flex flex-wrap items-center gap-6'>
                <div className='w-60 h-20 border border-orange-600 py-8 px-3 text-base rounded-md text-white bg-orange-600 flex justify-center items-center font-medium'>
                  Total Booking : <b className='ml-1 text-sm'> {dashInfo.totalBooking} Bookings</b>
                </div>
                <div className=' w-60 h-20 border border-orange-600 py-8 px-3 text-sm rounded-md text-white bg-orange-600 flex justify-center items-center font-medium'>
                  Total Revenue : <b className='ml-1 text-sm'> {dashInfo.totalRevenue} Revenues</b>
                </div>
            </div>
        </div>

    )
}

export default Dashboard