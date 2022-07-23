import React, { useEffect } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
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

  const dispatch = useDispatch() as AppDispatch;

  useEffect(() => {
    const token = storage.getItem('token')
    if (token) {
      dispatch(authActionCreator.reSignIn(token));
    } else {
      dispatch(authActionCreator.signOut());
    }
  }, [])

  const isSigned = useAppSelector(state => state.auth.user)

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