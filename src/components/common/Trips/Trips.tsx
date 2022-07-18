import './styles.scss'
import TripCard from './TripCard/TripCard'
import { TripProps } from './types/types';


const Trips: React.FC<TripProps> = (props) => {
  console.log(props.trips);
  
  return (
    <section className="trips">
    <h2 className="visually-hidden">Trips List</h2>
    <ul className="trip-list">
      {props.trips.length ?
      props.trips.map(info => {
        return <TripCard tripInfo={info} key={info.id}/>
      })
      : <h1 style={{height: '320px'}}>Nichego ne naideno...</h1>
      }
      
    </ul>
  </section>
  )
}

export default Trips

// {props.trips.map(info => {
      //   return <TripCard tripInfo={info} key={info.id}/>
      // })}