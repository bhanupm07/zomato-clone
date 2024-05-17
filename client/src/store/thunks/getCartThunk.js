import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const getCartThunk = createAsyncThunk("get/cart", async ({ userId, token }) => {
  try {
    const response = await fetch(
      `${serverUrl}/api/v1/user/get-cart/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log("fetched cart details");
      console.log(data);
      return data;
    } else {
      console.error("failed to get cart details");
    }
  } catch (err) {
    throw err;
  }
});

export { getCartThunk };
