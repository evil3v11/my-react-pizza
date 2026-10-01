import type { Cart } from "../types";

export const getCartItemsFromLocalStorage = (): Cart => {
  const cart = localStorage.getItem("cart");

  return cart ? JSON.parse(cart) : { items: [], totalPrice: 0, totalCount: 0 };
};
