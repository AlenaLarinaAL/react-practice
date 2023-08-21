import { createSlice } from "@reduxjs/toolkit";

export const clicksSlice = createSlice({
  name: "clicks",
  initialState: { value: 0 },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

export const { update } = clicksSlice.actions;
