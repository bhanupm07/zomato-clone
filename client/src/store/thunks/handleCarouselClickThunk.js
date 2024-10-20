import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleCheckboxChange, handleFilterCount } from "../slices/filterSlice";
import { handleFilter } from "../slices/deliverySlice";

export const handleCarouselClickThunk = createAsyncThunk(
  "filters/updateFiltersAndCount",
  async (foodName, { dispatch, getState }) => {
    dispatch(handleCheckboxChange(foodName));
    const { filters } = getState();
    // console.log(filters);
    dispatch(handleFilter(filters));
    dispatch(handleFilterCount());
  }
);
