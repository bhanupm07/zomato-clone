import { createSlice } from "@reduxjs/toolkit";
import { signupThunk } from "../thunks/signupThunk";
import { fetchUserDetails } from "../thunks/fetchUserDetails";
import { loginThunk } from "../thunks/loginThunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  },
  reducers: {
    clearUserDetails(state, action) {
      return {
        name: "",
        email: "",
        password: "",
        imageUrl: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      const { name, email, password } = action.payload;
      return { ...state, name, email, password };
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      // console.log(action.payload);
      const { name, email, password, imageUrl } = action.payload;
      return { name, email, password, imageUrl };
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      const { name, email, password, imageUrl } = action.payload;
      return { ...state, name, email, password, imageUrl };
    });
  },
});

export const { clearUserDetails } = userSlice.actions;
export const userReducer = userSlice.reducer;
