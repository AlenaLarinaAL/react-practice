import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("myValue/increment");
console.log(increment);

const myReducer = createReducer(10, {});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
