import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./thunks";
const initialState = {
  isLoading: false,
  error: "",
  token: "",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled.handle);
  },
});
