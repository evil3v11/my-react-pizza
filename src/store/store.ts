import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { pizzaApi } from "./api";
import { cartSlice } from "./slices";

export const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;

type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>()