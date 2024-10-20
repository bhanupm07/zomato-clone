import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchLocation = createAsyncThunk(
  "location/fetch",
  async ({ latitude, longitude }) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=6e2c98663a7049dd92896187ca4a1fdc`
      );
      const data = await response.json();
      if (data.status.code === 200) {
        // console.log("results:", data.results);
        return data.results[0].formatted;
      } else {
        console.log("Reverse geolocation request failed.");
      }
    } catch (err) {
      console.error(err);
    }
  }
);

export { fetchLocation };
