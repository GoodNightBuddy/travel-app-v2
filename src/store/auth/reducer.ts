import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { IState } from "../types/types";
import { checkToken, signIn, reSignIn } from "./action";


const initialState: IState = {
  authenticated: false,
  user: null,
  loading: false
}
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkToken, (state, action) => {
      state.authenticated = !!localStorage.getItem('token')
    })
    // .addCase(signIn.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.user = action.payload.user
    // })
    // .addCase(signIn.rejected, (state, action) => {
    //   state.loading = false
    //   alert(action.error.message)
    // })

    .addMatcher(
      isAnyOf(
        signIn.pending,
        reSignIn.pending
      ),
      state => {
        state.loading = true
      }
    )

    .addMatcher(
      isAnyOf(
        signIn.fulfilled,
        reSignIn.fulfilled
      ),
      (state, action) => {
        state.loading = false
        state.user = action.payload.user
      }
    )

    .addMatcher(
      isAnyOf(
        signIn.rejected,
        reSignIn.rejected
      ),
      (state, action) => {
        state.loading = false
        alert(action.error.message)
      }
    )
})

// .addMatcher(
//   isAnyOf(
//     login.fulfilled,
//     logout.fulfilled,
//     register.fulfilled,
//     loadCurrentUser.fulfilled
//   ),
//   (state, action) => {
//     state.user = action.payload;
//   }
// )

export { reducer };

