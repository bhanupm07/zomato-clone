import { createSlice } from "@reduxjs/toolkit";
import { fetchAllDelivery } from "../thunks/fetchAllDelivery";

const deliverySlice = createSlice({
  initialState: [],
  name: "delivery",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllDelivery.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
  },
});

export const deliveryReducer = deliverySlice.reducer;
