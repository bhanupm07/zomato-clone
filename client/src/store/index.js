import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./slices/locationSlice";
import { handleChange } from "./slices/locationSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
export { handleChange };
export * from "./thunks/fetchLocation";
