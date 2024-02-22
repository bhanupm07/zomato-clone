import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./slices/locationSlice";
import { handleChange } from "./slices/locationSlice";
import { deliveryReducer } from "./slices/deliverySlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    delivery: deliveryReducer,
  },
});

export default store;
export { handleChange };
export * from "./thunks/fetchLocation";
export * from "./thunks/fetchAllDelivery";
