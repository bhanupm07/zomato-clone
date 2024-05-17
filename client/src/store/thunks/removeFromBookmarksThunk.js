import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const removeFromBookmarksThunk = createAsyncThunk(
  "remove/bookmark",
  async ({ userId, restaurantId, token }) => {
    try {
      const response = await fetch(
        `${serverUrl}/api/v1/user/remove-from-bookmarks`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ userId, restaurantId }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("removed the bookmark successfully");
        console.log(data);
        return data;
      } else {
        console.log("Failed to remove the bookmark");
        // return data;
      }
    } catch (error) {
      console.log(error);
      //   throw error;
    }
  }
);

export { removeFromBookmarksThunk };
