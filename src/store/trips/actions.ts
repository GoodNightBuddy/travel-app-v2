import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITrip } from "../../components/common/Trips/types/types";
import { storage } from "../../services/services";
import { ActionType } from "./common";


const getTrips = createAsyncThunk<ITrip[], void>(
  ActionType.GET_TRIPS,
  async () => {
    const token = storage.getItem('token')
    const response = await fetch('https://travel-app-api.glitch.me/api/v1/trips', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    if (response.status !== 200) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      const trips = await response.json() as ITrip[]
      return trips
    }
  }
)

const getTrip = createAsyncThunk<ITrip, string>(
  ActionType.GET_TRIP,
  async (tripId) => {
    const token = storage.getItem('token')
    const response = await fetch(`https://travel-app-api.glitch.me/api/v1/trips/${tripId}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    
    if (response.status !== 200) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      const currentTrip = await response.json() as ITrip
      return currentTrip 
    }
  }
)



export { getTrips, getTrip }