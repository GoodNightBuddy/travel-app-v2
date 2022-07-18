import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage/BookingPage';
import MainPage from './pages/MainPage/MainPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import TripPage from './pages/TripPage/TripPage';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="trip/:tripId" element={<TripPage />} />
          <Route path="bookings" element={<BookingPage />} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
