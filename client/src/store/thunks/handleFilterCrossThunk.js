import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  handleFilterCount,
  handleFilterCrossClick,
} from "../slices/filterSlice";
import { handleCrossClick, handleFilter } from "../slices/deliverySlice";

export const handleFilterCrossThunk = createAsyncThunk(
  "handle/filters",
  async (filter, { dispatch, getState }) => {
    dispatch(handleFilterCrossClick(filter));
    const { filters } = getState();
    // console.log(filters);
    dispatch(handleFilter(filters));
    dispatch(handleCrossClick(filter));
    dispatch(handleFilterCount());
  }
);
