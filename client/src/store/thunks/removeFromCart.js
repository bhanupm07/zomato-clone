import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const removeFromCart = createAsyncThunk(
  "remove/cart",
  async ({ userId, foodId, quantity, token }) => {
    try {
      const response = await fetch(
        `${serverUrl}/api/v1/user/remove-from-cart`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ userId, foodId, quantity }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Removed from cart successfully");
        console.log(data);
        return data;
      } else {
        console.log("Failed to remove item from the cart.");
        return "Failed to remove item from the cart.";
      }
    } catch (err) {
      throw err;
    }
  }
);

export { removeFromCart };
