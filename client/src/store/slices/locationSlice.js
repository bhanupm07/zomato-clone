import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../thunks/fetchLocation";

const locationSlice = createSlice({
  initialState: "",
  name: "location",
  reducers: {
    handleChange(state, action) {
      //   console.log(action.payload.target.value);
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      //   console.log(action.payload);
      return action.payload;
    });
  },
});

export const { handleChange } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
