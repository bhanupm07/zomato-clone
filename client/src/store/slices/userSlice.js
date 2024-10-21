import { createSlice } from "@reduxjs/toolkit";
import { signupThunk } from "../thunks/signupThunk";
import { fetchUserDetails } from "../thunks/fetchUserDetails";
import { loginThunk } from "../thunks/loginThunk";
import { addToCartThunk } from "../thunks/addToCartThunk";
import { getCartThunk } from "../thunks/getCartThunk";
import { removeFromCart } from "../thunks/removeFromCart";
import { addToBookmarksThunk } from "../thunks/addToBookmarksThunk";
import { getBookmarksThunk } from "../thunks/getBookmarksThunk";
import { removeFromBookmarksThunk } from "../thunks/removeFromBookmarksThunk";
import { updateUserDetailsThunk } from "../thunks/updateUserDetailsThunk";
import { clearCartThunk } from "../thunks/clearCartThunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: "",
    name: "",
    email: "",
    password: "",
    imageUrl: "",
    description: "",
    phone: 0,
    cart: [],
    bookmarks: [],
    message: "",
  },
  reducers: {
    clearUserDetails(state, action) {
      return {
        userId: "",
        name: "",
        email: "",
        password: "",
        imageUrl: "",
        description: "",
        phone: 0,
        cart: [],
        bookmarks: [],
        message: "",
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
      const {
        _id,
        name,
        email,
        password,
        imageUrl,
        description,
        phone,
        cart,
        bookmarks,
      } = action.payload;
      return {
        ...state,
        userId: _id,
        name,
        email,
        password,
        imageUrl,
        description,
        phone,
        cart,
        bookmarks,
      };
    });
    builder.addCase(updateUserDetailsThunk.fulfilled, (state, action) => {
      return { ...state, ...action.payload.user };
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      const {
        _id,
        name,
        email,
        password,
        imageUrl,
        description,
        phone,
        cart,
        bookmarks,
        message,
      } = action.payload;
      return {
        ...state,
        userId: _id,
        name,
        email,
        password,
        imageUrl,
        description,
        phone,
        cart,
        bookmarks,
        message,
      };
    });
    builder.addCase(addToCartThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.cart = action.payload;
    });
    builder.addCase(getCartThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      // state.cart = action.payload;
      return { ...state, cart: action.payload };
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.cart = [...action.payload];
    });
    builder.addCase(addToBookmarksThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.bookmarks = action.payload;
    });
    builder.addCase(getBookmarksThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.bookmarks = action.payload;
    });
    builder.addCase(removeFromBookmarksThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.bookmarks = action.payload;
    });
    builder.addCase(clearCartThunk.fulfilled, (state, action) => {
      // console.log(action.payload);
      if (action.payload.message == "Cart cleared successfully")
        state.cart = [];
    });
  },
});

export const { clearUserDetails } = userSlice.actions;
export const userReducer = userSlice.reducer;
