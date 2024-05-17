import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const updateUserDetailsThunk = createAsyncThunk(
  "update/user-details",
  async ({ token, updatedDetails }) => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/user/update-details`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(updatedDetails),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Updated user details successfully");
        console.log(data);
        return data;
      } else {
        console.log("failed to update user details");
        return "failed to update user details";
      }
    } catch (error) {
      throw error;
    }
  }
);

export { updateUserDetailsThunk };
