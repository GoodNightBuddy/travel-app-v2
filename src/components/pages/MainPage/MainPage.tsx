/* eslint-disable jsx-a11y/img-redundant-alt */
import Trips from '../../common/Trips/Trips';
import trips from '../../../data/trips.json';
import './styles.scss'
import { useRef, useState } from 'react';
import { ITrip } from '../../common/Trips/types/types';



const MainPage: React.FC = () => {
  useState(trips as ITrip[])

  const [title, setTitle] = useState('')
  const duration = useRef(null)
  const level = useRef(null)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(title);
    console.log(duration);
    console.log(level);
    

  }
  
  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off" onSubmit={handleSubmit}>
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input name="search" type="search" placeholder="search by title" onChange={e => setTitle(e.target.value)} />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration" onChange={e => console.log(e.target.value)}>
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select name="level" ref={level}>
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
      <Trips trips={trips}/>
    </main>
  )
};

export default MainPage