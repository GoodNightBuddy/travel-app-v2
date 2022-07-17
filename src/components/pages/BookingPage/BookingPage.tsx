import Booking from './Booking/Booking';
import './styles.scss'
import bookings from '../../../data/bookings.json';
import { useState } from 'react';
import {IBooking} from './types/types'

const BookingPage: React.FC = () => {
  useState(bookings as IBooking[])
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings.map(booking => <Booking bookingInfo={booking} key={booking.id} />)}
      </ul>
    </main>
  )
};

export default BookingPage