import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllDelivery = createAsyncThunk("delivery/fetchAll", async () => {
  try {
    const response = await fetch("/api/delivery");
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
