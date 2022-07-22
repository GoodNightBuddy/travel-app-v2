/* eslint-disable jsx-a11y/img-redundant-alt */
import Trips from '../../common/Trips/Trips';
import tripData from '../../../data/trips.json';
import './styles.scss'
import { useEffect, useState } from 'react';
import { FilteredTrips, ITrip } from '../../common/Trips/types/types';
import { AppDispatch, useAppSelector } from '../../../store/types/types';
import { Loader } from '../../common/Loader/Loader';
import { useDispatch } from 'react-redux';
import { tripsActionCreator } from '../../../store/action';



const MainPage: React.FC = () => {

  const dispatch = useDispatch() as AppDispatch;
  useEffect(() => {
    dispatch(tripsActionCreator.getTrips())
  }, [])
  
  const isLoading = useAppSelector(state => state.trips.loading)
  const tripsData = useAppSelector(state => state.trips.trips)
  // const [trips, setTrips] = useState(tripsData)
  let filteredTrips: FilteredTrips = null
  
  // useEffect(() => {
  //   setTrips(tripsData)
  // }, [tripsData])

  const [searcTitle, setSearchTitle] = useState('')
  const [searchDuration, setSearchDuration] = useState('')
  const [searchLevel, setSearchLevel] = useState('')

  const filter = ({ title = searcTitle, duration = searchDuration, level = searchLevel }): void => {
    filteredTrips = tripsData.filter(trip => {
      if (title) {
        if (!trip.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())) return false
      }
      if (level) {
        if (trip.level !== level) return false
      }
      if (duration) {
        if (duration === '0_x_5') {
          if (trip.duration >= 5) return false
        }
        if (duration === '5_x_10') {
          if (trip.duration >= 10) return false
        }
        if (duration === '10_x') {
          if (trip.duration < 10) return false
        }
      }
      return true
    })
    // setTrips(filteredTrips)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    filter({})
  }

  const onChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTitle(e.target.value)
  }

  const onChangeDuration: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSearchDuration(e.target.value)
    filter({ duration: e.target.value })

  }

  const onChangeLevel: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSearchLevel(e.target.value)
    filter({ level: e.target.value })
  }

  return (
    <>
      {isLoading
        ? <Loader />
        : <main>
          <h1 className="visually-hidden">Travel App</h1>
          <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off" onSubmit={handleSubmit}>
              <label className="trips-filter__search input">
                <span className="visually-hidden">Search by name</span>
                <input name="search" type="search" placeholder="search by title" onChange={onChangeTitle} />
              </label>
              <label className="select">
                <span className="visually-hidden">Search by duration</span>
                <select name="duration" onChange={onChangeDuration}>
                  <option value="">duration</option>
                  <option value="0_x_5">&lt; 5 days</option>
                  <option value="5_x_10">&lt; 10 days</option>
                  <option value="10_x">&ge; 10 days</option>
                </select>
              </label>
              <label className="select">
                <span className="visually-hidden">Search by level</span>
                <select name="level" onChange={onChangeLevel}>
                  <option value="">level</option>
                  <option value="easy">easy</option>
                  <option value="moderate">moderate</option>
                  <option value="difficult">difficult</option>
                </select>
              </label>
            </form>
          </section>
          <Trips trips={filteredTrips ? filteredTrips : tripsData} />
        </main>
      }
    </>
  )
};

export default MainPage