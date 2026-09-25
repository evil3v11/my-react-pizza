import { configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "./api/pizzaApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),
});

setupListeners(store.dispatch);
