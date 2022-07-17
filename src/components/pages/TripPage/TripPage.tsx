/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import './styles.scss'
import trips from '../../../data/trips.json';
import { useRef, useState } from "react";



const TripPage: React.FC = () => {
  const {tripId} = useParams()
  const trip = trips.find(trip => trip.id === tripId)
  if(!trip) console.log('trip not found!');

  
  const [show, setShow] = useState(true)
  const [guestsNumber, setGuestsNumber] = useState(1)
  const [date, setDate] = useState(new Date())
  const [price, setPrice] = useState(trip?.price)
  const dateInput = useRef(null)
    
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if(new Date() >= date) {
      alert('Enter correct date!')
    }
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
    setGuestsNumber(+e.target.value)
    setPrice(prevPrice => {
      if(prevPrice && trip?.price) {
        return (+trip?.price) * (+e.target.value)
      } else {
        console.log('prevPrice or trip.price is not defined');
      }
    })
  }

const dateHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setDate(new Date(e.target.value))
}

  return (
    <>
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
              <input name="guests" type="number" min="1" max="10" value={guestsNumber} onChange={guestsHandler} required />
            </label>
            <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value" >{price} $</output>
            </span>
            <button className="button" type="submit">Book a trip</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
};

export default TripPage