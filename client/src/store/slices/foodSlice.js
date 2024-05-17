import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFoods } from "../thunks/fetchAllFoods";

const foodSlice = createSlice({
  initialState: [],
  name: "food",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFoods.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
  },
});

export const foodReducer = foodSlice.reducer;
