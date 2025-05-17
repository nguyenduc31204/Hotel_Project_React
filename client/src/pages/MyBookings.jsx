import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className='py-28 md:pb-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title title='My Bookings' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.' align='left'/>

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr]  w-full text-gray-500 font-medium text-base border-b border-gray-300 py-4'>
            <div className='w-1/3'>Hotels</div>
            <div className='w-1/3'>Date & Time</div>
            <div className='w-1/3'>Payment</div>

        </div>

        {bookings.map((booking) => (
            <div key={booking._id} className='grid grid-cols-[3fr_2fr_1fr] w-full text-gray-500 font-medium text-base border-b border-gray-300 py-4'>
                <div className='flex flex-col md:flex-row items-start gap-6'>
                    <img src={booking.room.images[0]} alt="" className='min-md:w-44 rounded shadow object-cover'/>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                        <p className='font-playfair text-2xl'>{booking.hotel.name}
                            <span className='font-inter text-sm'>({booking.room.roomType})</span>
                        </p>
                    </div>
                    
                    <div className='flex items-center gap-2 mt-2 text-gray-500'>
                        <img src={assets.locationIcon} alt="" />
                        <span>{booking.hotel.address}</span>
                    </div>
                    <div className='flex items-center gap-2 mt-2 text-gray-500'>
                        <img src={assets.guestsIcon} alt="" />
                        <span>Guests: {booking.guests}</span>
                    </div>
                    <p className='text-base'>Total: $ {booking.totalPrice}</p>
                </div>


                <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                    <div>
                        <p>Check-In:</p>
                        <p className='text-gray-500 text-sm'>{new Date(booking.checkIndate).toDateString()}</p>
                    </div>

                    <div>
                        <p>Check-Out:</p>
                        <p className='text-gray-500 text-sm'>{new Date(booking.checkOutDate).toDateString()}</p>
                    </div>
                </div>


                <div className='flex flex-col items-start justify-center pt-3'>
                    <div className='flex items-center gap-2'>
                        <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}>

                        </div>
                        <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                            {booking.isPaid ? "Paid" : "UnPaid"}
                        </p>
                    </div>
                    {!booking.isPaid && (
                        <button className='mt-2 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
                            Pay Now
                        </button>
                    )}
                </div>
            </div>
        ) )}
      </div>
    </div>
  )
}

export default MyBookings
