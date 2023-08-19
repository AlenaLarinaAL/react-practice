import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.filter((item) => item.id !== action);
    },
  },
});
export const { add, remove } = itemsSlice.actions;
