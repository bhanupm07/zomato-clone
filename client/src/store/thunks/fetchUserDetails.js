import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const fetchUserDetails = createAsyncThunk(
  "fetch/userDetails",
  async (token) => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/user/details`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      // console.log(data);
      return data.user;
    } catch (error) {
      throw error;
    }
  }
);

export { fetchUserDetails };
