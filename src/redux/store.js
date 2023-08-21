import { configureStore } from "@reduxjs/toolkit";
import { clicksSlice } from "./clicksSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedClicksReducer = persistReducer(
  persistConfig,
  clicksSlice.reducer
);

export const store = configureStore({
  reducer: {
    clicks: persistedClicksReducer,
  },
});

export const persistor = persistStore(store);
