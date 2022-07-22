import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { IStateBookings } from "../types/types";
import { deleteBooking, getBookings, makeBooking } from "./actions";

const initialState: IStateBookings = {
  loading: false,
  bookings: []
}

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(makeBooking.fulfilled, (state, action) => {
      state.loading = false
      state.bookings = [...state.bookings, action.payload]
      console.log('bookings: ', state.bookings)
    })
    .addCase(deleteBooking.fulfilled, (state, action) => {
      state.loading = false
      state.bookings.splice(+action.payload, 1)
      console.log(state.bookings)
    })

    // .addCase(makeBooking.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.bookings.push(action.payload)
    // })
    .addMatcher(
      isAnyOf(
        getBookings.fulfilled,
        // makeBooking.fulfilled,
        // deleteBooking.fulfilled
      ),
      (state, action) => {
        state.loading = false
        state.bookings = action.payload
      }
    )

    .addMatcher(
      isAnyOf(
        getBookings.rejected,
        makeBooking.rejected,
        deleteBooking.rejected
      ),
      (state, action) => {
        state.loading = false
        alert(action.error.message)
      }
    )

    .addMatcher(
      isAnyOf(
        getBookings.pending,
        makeBooking.pending,
        deleteBooking.pending
      ),
      (state, action) => {
        state.loading = true
        // state.bookings
      }
    )
})

export { reducer }