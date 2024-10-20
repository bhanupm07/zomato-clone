import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const addToCartThunk = createAsyncThunk(
  "addTo/cart",
  async ({ userId, foodId, quantity, token }) => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/user/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ userId, foodId, quantity }),
      });
      const data = response.json();
      if (response.ok) {
        // console.log("Food added to cart successfully");
        // console.log(data);
        return data;
      } else {
        console.error("Failed to add Food to cart");
      }
    } catch (err) {
      throw err;
    }
  }
);

export { addToCartThunk };
