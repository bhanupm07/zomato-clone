import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const fetchAllFoods = createAsyncThunk("fetchAll/foods", async () => {
  try {
    const response = await fetch(`${serverUrl}/api/v1/food`);
    const data = await response.json();
    if (response.ok) {
      //   console.log(data);
      return data.foods;
    } else {
      throw data;
    }
  } catch (error) {
    throw error;
  }
});

export { fetchAllFoods };
