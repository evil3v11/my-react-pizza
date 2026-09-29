import type { Pizza } from "./pizza";

export type CartItem = Pick<Pizza, "id" | "title" | "imageUrl" | "price"> & {
  quantity: number;
  type: string;
  size: number;
};

export type Cart = {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
};
