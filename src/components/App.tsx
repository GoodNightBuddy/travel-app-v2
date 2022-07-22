import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage/BookingPage';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import TripPage from './pages/TripPage/TripPage';
import Layout from './hoc/Layout/Layout';
import AppPath from '../enums/routes/AppPath';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/types/types';
import { storage } from '../services/services';
import { authActionCreator } from '../store/action';

function App() {

  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    const token = storage.getItem('token')
    if (token) {
      dispatch(authActionCreator.reSignIn(token));
    }
  }, [])

  const isSigned = useAppSelector(state => !!state.auth.user)

  const signed = () => {
    return (
      <>
        <Route index element={<MainPage />} />
        <Route path={AppPath.TRIP} element={<TripPage />} >
          <Route path={AppPath.TRIP_ID} element={<TripPage />} />
        </Route>
        <Route path={AppPath.BOOKINGS} element={<BookingPage />} />
        <Route path={AppPath.ANY} element={<Navigate to={AppPath.ROOT} replace />} />
      </>
    )
  }

  const notSigned = () => {
    return (
      <>
        <Route path={AppPath.SIGN_UP} element={<SignUpPage />} />
        <Route path={AppPath.SIGN_IN} element={<SignInPage />} />
        <Route path={AppPath.ROOT} element={<Navigate to={AppPath.SIGN_IN} replace />} />
        <Route path={AppPath.ANY} element={<Navigate to={AppPath.SIGN_IN} replace />} />
      </>
    )
  }

  return (
    <Routes>
      <Route path={AppPath.ROOT} element={<Layout />}>
        {isSigned ? signed() : notSigned()}
      </Route>
    </Routes>
  );
}

export default App;