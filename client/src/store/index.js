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

const store = configureStore({
  reducer: {
    location: locationReducer,
    delivery: deliveryReducer,
    filters: filterReducer,
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
};
export * from "./thunks/fetchLocation";
export * from "./thunks/fetchAllDelivery";
