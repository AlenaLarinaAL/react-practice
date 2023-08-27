import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/booksReducer";
import { pokemonApi } from "./pokemon/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    // [pokemonApi.reducer]: pokemonApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
  ],
});

setupListeners(store.dispatch);
