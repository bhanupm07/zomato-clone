import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../utils/constants";
import { useToast } from "@chakra-ui/react";

const signupThunk = createAsyncThunk(
  "signup/registration",
  async ({ name, email, password }) => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      localStorage.setItem("token", data.auth);
      //   console.log(data);
      return data.result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export { signupThunk };
