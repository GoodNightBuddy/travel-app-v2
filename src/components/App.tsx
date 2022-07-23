import React, { useCallback, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate, useNavigationType } from 'react-router-dom';
import BookingPage from './pages/BookingPage/BookingPage';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import TripPage from './pages/TripPage/TripPage';
import Layout from './hoc/Layout/Layout';
import RoutePath from '../enums/routes/RoutePath';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/types/types';
import { storage } from '../services/services';
import { authActionCreator } from '../store/action';

function App() {
  const isSigned = useAppSelector(state => !!state.auth.user)

  const location = window.location.href
  const dispatch = useDispatch() as AppDispatch;
  const navigate = useNavigate()

  useEffect(() => {
    const token = storage.getItem('token')
    if (token) {
      dispatch(authActionCreator.reSignIn(token));
        console.log('await', isSigned);

    }
  }, [])

  let prevLocation = useCallback(() => {
    return location;
  }, [])


  // useEffect(() => {
  //   async function fetchData() {
  //       const token = storage.getItem('token')
  //     if (token) {
  //       await dispatch(authActionCreator.reSignIn(token));
  //       console.log('await', isSigned);
        
  //     }
  //   }
  //   fetchData();
  // }, []);

  console.log(isSigned);


  const signed = () => {
    return (
      <>
        <Route index element={<MainPage />} />
        <Route path={RoutePath.TRIP} element={<TripPage />} >
          <Route path={RoutePath.TRIP_ID} element={<TripPage />} />
        </Route>
        <Route path={RoutePath.BOOKINGS} element={<BookingPage />} />
        <Route path={RoutePath.ANY} element={<Navigate to={RoutePath.ROOT} replace />} />
      </>
    )
  }

  const notSigned = () => {
    return (
      <>
        <Route path={RoutePath.SIGN_UP} element={<SignUpPage />} />
        <Route path={RoutePath.SIGN_IN} element={<SignInPage />} />
        <Route path={RoutePath.ROOT} element={<Navigate to={RoutePath.SIGN_IN} replace />} />
        <Route path={RoutePath.ANY} element={<Navigate to={RoutePath.SIGN_IN} replace />} />
      </>
    )
  }

  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<Layout />}>
        {isSigned ? signed() : notSigned()}
      </Route>
    </Routes>
  );
}

export default App;