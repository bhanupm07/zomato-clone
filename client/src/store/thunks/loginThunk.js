import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";

const loginThunk = createAsyncThunk(
  "login/user",
  async ({ email, password }) => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data.user;
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export { loginThunk };
