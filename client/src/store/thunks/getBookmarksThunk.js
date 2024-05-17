import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const getBookmarksThunk = createAsyncThunk(
  "get/bookmarks",
  async ({ userId, token }) => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/user/get-bookmarks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("fetched bookmarks successfully");
        console.log(data);
        return data;
      } else {
        console.log("failed to fetch bookmarked restaurants");
        return "failed to fetch bookmarked restaurants";
      }
    } catch (err) {
      throw err;
    }
  }
);

export { getBookmarksThunk };
