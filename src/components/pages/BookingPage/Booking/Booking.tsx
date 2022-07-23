import { useDispatch } from 'react-redux'
import { bookingsActionCreator } from '../../../../store/action'
import { AppDispatch } from '../../../../store/types/types'
import { IBookingProps } from '../types/types'
import './styles.scss'


const Booking: React.FC<IBookingProps> = (props) => {
  const date = new Date(props.bookingInfo.date)

  const dispatch = useDispatch() as AppDispatch;

  const deleteBooking: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(bookingsActionCreator.deleteBooking({ bookingId: props.bookingInfo.id, index: props.index }))
  }

  return (
    <li className="booking">
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