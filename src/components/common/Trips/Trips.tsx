import './styles.scss'
import TripCard from './TripCard/TripCard'
import { TripProps } from './types/types';


const Trips: React.FC<TripProps> = (props) => {
  return (
    <section className="trips">
    <h2 className="visually-hidden">Trips List</h2>
    <ul className="trip-list">
      {props.trips.map(info => {
        return <TripCard tripInfo={info} key={info.id}/>
      })}
    </ul>
  </section>
  )
}

export default Trips