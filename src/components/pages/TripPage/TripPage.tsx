/* eslint-disable jsx-a11y/img-redundant-alt */
import './styles.scss'
import { useRef, useState } from "react";
import { AppDispatch, useAppSelector } from "../../../store/types/types";
import { Loader } from "../../common/Loader/Loader";
import { useDispatch } from 'react-redux';
import { bookingsActionCreator } from '../../../store/action';


const TripPage: React.FC = () => {

  const trip = useAppSelector(state => state.trips.currentTrip)
  const user = useAppSelector(state => state.auth.user)
  const isLoadingTrip = useAppSelector(state => state.trips.loading)
  const isLoadingBooking = useAppSelector(state => state.bookings.loading)

  const [show, setShow] = useState(true)
  const [guests, setGuests] = useState(1)
  const [date, setDate] = useState(new Date())
  const [price, setPrice] = useState(trip?.price)

  const dateInput = useRef(null)

  const dispatch = useDispatch() as AppDispatch;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (new Date() >= date) {
      alert('Enter correct date!')
    }

    const bookingData = {
      tripId: trip?.id,
      userId: user?.id,
      guests,
      date
    }

    await dispatch(bookingsActionCreator.makeBooking(bookingData))
    setShow(!show)
  }

  const showModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setShow(!show)
  }

  const closeModal: React.MouseEventHandler<HTMLDivElement> = (e) => { // Just for click on modal
    const modal = e.target as HTMLDivElement
    if (modal.classList.contains('modal')) {
      setShow(!show)
    }
  }

  const guestsHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setGuests(+e.target.value)
    if(!trip) {
      return
    }
    setPrice((+trip?.price) * (+e.target.value))
  }

  const dateHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(new Date(e.target.value))
  }

  return (
    <>
      {isLoadingTrip
        ? <Loader />
        : <>
          <main className="trip-page">
            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
              <img src={trip?.image} className="trip__img" alt="trip image" />
              <div className="trip__content">
                <div className="trip-info">
                  <h3 className="trip-info__title">{trip?.title}</h3>
                  <div className="trip-info__content">
                    <span className="trip-info__duration"><strong>{trip?.duration}</strong> days</span>
                    <span className="trip-info__level">{trip?.level}</span>
                  </div>
                </div>
                <div className="trip__description">
                  {trip?.description}
                </div>
                <div className="trip-price">
                  <span>Price</span>
                  <strong className="trip-price__value">{trip?.price} $</strong>
                </div>
                <button className="trip__button button" onClick={showModal}>Book a trip</button>
              </div>
            </div>
          </main>
          <div hidden={show}>
            <div className="modal" onClick={closeModal}>
              <div className="trip-popup">
                {isLoadingBooking
                  ? <Loader />
                  : <>
                    <button className="trip-popup__close" onClick={showModal}>×</button>
                    <form className="trip-popup__form" autoComplete="off" onSubmit={handleSubmit}>
                      <div className="trip-info">
                        <h3 className="trip-info__title">{trip?.title}</h3>
                        <div className="trip-info__content">
                          <span className="trip-info__duration"><strong>{trip?.duration}</strong> days</span>
                          <span className="trip-info__level">{trip?.level}</span>
                        </div>
                      </div>
                      <label className="trip-popup__input input">
                        <span className="input__heading">Date</span>
                        <input name="date" type="date" ref={dateInput} onChange={dateHandler} required />
                      </label>
                      <label className="trip-popup__input input">
                        <span className="input__heading">Number of guests</span>
                        <input name="guests" type="number" min="1" max="10" value={guests} onChange={guestsHandler} required />
                      </label>
                      <span className="trip-popup__total">
                        Total: <output className="trip-popup__total-value" >{price ? price : trip?.price} $</output>
                      </span>
                      <button className="button" type="submit">Book a trip</button>
                    </form>
                  </>
                }
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
};

export default TripPage