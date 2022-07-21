import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./rootReducer";



const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {

      }
    }
  }),
})

export { store };