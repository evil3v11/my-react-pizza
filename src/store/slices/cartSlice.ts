import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getCartItemsFromLocalStorage } from "../../utils";

import type { RootState } from "../store";
import type { CartItem, ChangeItemActionPayload } from "../../types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: getCartItemsFromLocalStorage(),
  reducers: {
    addOrIncrementItem: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.items.find(
        (i) =>
          i.id === action.payload.id &&
          i.size === action.payload.size &&
          i.type === action.payload.type,
      );

      if (itemInCart) itemInCart.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    decrementItem: (state, action: PayloadAction<ChangeItemActionPayload>) => {
      const itemIdx = state.items.findIndex(
        (i) =>
          i.id === action.payload.id &&
          i.type === action.payload.type &&
          i.size === action.payload.size,
      );

      if (itemIdx !== -1 && state.items[itemIdx].quantity > 1) {
        state.items[itemIdx].quantity -= 1;
      } else {
        state.items = state.items.toSpliced(itemIdx, 1);
      }
    },
    deleteItem: (state, action: PayloadAction<ChangeItemActionPayload>) => {
      const itemIdx = state.items.findIndex(
        (i) =>
          i.id === action.payload.id &&
          i.type === action.payload.type &&
          i.size === action.payload.size,
      );
      state.items = state.items.toSpliced(itemIdx, 1);
    },
    calculateTotal: (state) => {
      const total = state.items.reduce(
        (acc, curr) => {
          acc.totalPrice += curr.price * curr.quantity;
          acc.totalCount += curr.quantity;
          return acc;
        },
        { totalCount: 0, totalPrice: 0 },
      );

      state.totalCount = total.totalCount;
      state.totalPrice = total.totalPrice;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;

export const {
  addOrIncrementItem,
  decrementItem,
  deleteItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;
