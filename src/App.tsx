import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import bookings from './data/bookings.json'
import BookingPage from './pages/BookingPage';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TripPage from './pages/TripPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/trip/:tripId" element={<TripPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="*" element={<Navigate to='/' replace/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
