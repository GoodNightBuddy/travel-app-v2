import Booking from './Booking/Booking';
import './styles.scss'
import { useEffect} from 'react';
import { AppDispatch, useAppSelector } from '../../../store/types/types';
import { useDispatch } from 'react-redux';
import { bookingsActionCreator } from '../../../store/action';
import { Loader } from '../../common/Loader/Loader';

const BookingPage: React.FC = () => {

  const dispatch = useDispatch() as AppDispatch;
  useEffect(() => {
    dispatch(bookingsActionCreator.getBookings())
  }, [])

  const bookings = useAppSelector(state => state.bookings.bookings)
  const isLoading = useAppSelector(state => state.bookings.loading)


  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {isLoading
          ? <Loader />
          : bookings.length === 0
          ? <div>Net broni(</div>
          : bookings.map((booking, index) => <Booking bookingInfo={booking} index={index} key={booking.id} />)}
      </ul>
    </main>
  )
};

export default BookingPage