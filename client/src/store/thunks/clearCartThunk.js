import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const clearCartThunk = createAsyncThunk(
  "clear/cart",
  async ({ userId, token }) => {
    try {
      const response = await fetch(
        `${serverUrl}/api/v1/user/clear-cart/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        console.error("failed to clear cart details");
      }
    } catch (err) {
      throw err;
    }
  }
);

export { clearCartThunk };
