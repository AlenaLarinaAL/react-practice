import { configureStore } from "@reduxjs/toolkit";

import { myValueSlice } from "./myValue/slice";
import { itemsSlice } from "./itemsSlice/slice";
import { userSlice } from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import { createAction, createReducer } from "@reduxjs/toolkit";

// export const increment = createAction("myValue/increment");
// export const decrement = createAction("myValue/decrement");

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });
