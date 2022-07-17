import { useRef } from 'react'
import { IBookingProps } from '../types/types'
import './styles.scss'


const Booking: React.FC<IBookingProps> = (props) => {
  const date = new Date(props.bookingInfo.date)

  const booking = useRef(null)

  const deleteBooking: React.MouseEventHandler<HTMLButtonElement> = e => {
    if(booking.current && booking) {
      const el = booking.current as HTMLLIElement
      el.remove()
    } else {
      console.log('no booking element');
    }
  }

  return (
    <li className="booking" ref={booking}>
      <h3 className="booking__title">{props.bookingInfo.trip.title}</h3>
      <span className="booking__guests">{props.bookingInfo.guests}</span>
      <span className="booking__date">{date.toLocaleDateString()}</span>
      <span className="booking__total">{props.bookingInfo.totalPrice} $</span>
      <button className="booking__cancel" title="Cancel booking" onClick={deleteBooking}>
        <span className="visually-hidden">Cancel booking</span>
        ×
      </button>
    </li>
  )
}

export default Booking