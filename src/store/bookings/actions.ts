import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBooking } from "../../components/pages/BookingPage/types/types";
import { storage } from "../../services/services";
import { BookingDto } from "../types/types";
import { ActionType } from "./common";


const getBookings = createAsyncThunk(
  ActionType.GET_BOOKINGS,
  async () => {
    const token = storage.getItem('token')
    const response = await fetch('https://travel-app-api.glitch.me/api/v1/bookings', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    if (response.status !== 200) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      const bookings = await response.json() as IBooking[]
      return bookings
    }
  }
)


const makeBooking = createAsyncThunk<IBooking, BookingDto>(
  ActionType.MAKE_BOOKING,
  async (bookingData) => {
    const token = storage.getItem('token')
    const response = await fetch('https://travel-app-api.glitch.me/api/v1/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
    if (response.status !== 201) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      const booking = await response.json() as IBooking
      return booking
    }
  }
)

const deleteBooking = createAsyncThunk(
  ActionType.DELETE_BOOKINGS,
  async (bookingId, index) => {
    const token = storage.getItem('token')
    const response = await fetch(`https://travel-app-api.glitch.me/api/v1/bookings/${bookingId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    if (response.status !== 204) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      return index
    }
  }
)

export { getBookings, deleteBooking, makeBooking }