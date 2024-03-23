import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./slices/locationSlice";
import { handleChange } from "./slices/locationSlice";
import {
  deliveryReducer,
  handleFilter,
  handleCrossClick,
  handleClearAllAppliedFilters,
} from "./slices/deliverySlice";
import { filterReducer } from "./slices/filterSlice";
import {
  handleSortRadioChange,
  handleCheckboxChange,
  handleRatingRadioChange,
  handleCostRadioChange,
  clearAll,
  handleFilterCount,
  handleFilterCrossClick,
} from "./slices/filterSlice";
import { userReducer, clearUserDetails } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    delivery: deliveryReducer,
    filters: filterReducer,
    user: userReducer,
  },
});

export default store;
export {
  handleChange,
  handleSortRadioChange,
  handleCheckboxChange,
  handleRatingRadioChange,
  handleCostRadioChange,
  clearAll,
  handleFilter,
  handleFilterCount,
  handleCrossClick,
  handleClearAllAppliedFilters,
  handleFilterCrossClick,
  clearUserDetails,
};
export * from "./thunks/fetchLocation";
export * from "./thunks/fetchAllDelivery";
export * from "./thunks/signupThunk";
export * from "./thunks/fetchUserDetails";
export * from "./thunks/loginThunk";
