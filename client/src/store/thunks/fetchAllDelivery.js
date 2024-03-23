import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const fetchAllDelivery = createAsyncThunk("delivery/fetchAll", async () => {
  try {
    const response = await fetch(`${serverUrl}/api/v1/delivery`);
    const data = await response.json();
    if (response.ok) {
      console.log(data.deliveryRestaurants);
      return data.deliveryRestaurants;
    } else {
      throw data;
    }
  } catch (err) {
    throw err;
  }
});

export { fetchAllDelivery };
