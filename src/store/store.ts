import { configureStore } from "@reduxjs/toolkit";
import { authReducer, tripsReducer } from "./rootReducer";



const store = configureStore({
  reducer: {
    auth: authReducer,
    trips: tripsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        // хотів зробити як в міні проекті, щоб було гарніше, але не встиг
      }
    }
  }),
})

export { store };