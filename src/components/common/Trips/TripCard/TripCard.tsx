/* eslint-disable jsx-a11y/img-redundant-alt */
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { tripsActionCreator } from '../../../../store/action'
import { AppDispatch } from '../../../../store/types/types'
import { TripCardProps } from '../types/types'
import './styles.scss'

const TripCard: React.FC<TripCardProps> = (props) => {

  const dispatch = useDispatch() as AppDispatch;

  const clickHandler = () => {
    dispatch(tripsActionCreator.getTrip(props.tripInfo.id))
  }

  return (
    <li className="trip-card">
      <img src={props.tripInfo.image} alt="trip image" />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{props.tripInfo.title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration"><strong>{props.tripInfo.duration}</strong> days</span>
            <span className="trip-info__level">{props.tripInfo.level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">{props.tripInfo.price} $</strong>
        </div>
      </div>
      <Link to={`trip/${props.tripInfo.id}`} className="button" onClick={clickHandler}>Discover a trip</Link>
    </li>
  )
}

export default TripCard