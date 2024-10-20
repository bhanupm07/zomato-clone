import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const addToBookmarksThunk = createAsyncThunk(
  "add/bookmarks",
  async ({ userId, restaurantId, token }) => {
    try {
      const response = await fetch(
        `${serverUrl}/api/v1/user/add-to-bookmarks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ userId, restaurantId }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        // console.log("Added to bookmarks successfully");
        // console.log(data);
        return data;
      } else {
        console.log("Failed to add to bookmarks");
        return "Failed to add to bookmarks";
      }
    } catch (err) {
      throw err;
    }
  }
);

export { addToBookmarksThunk };
