import type { CartItem } from "../entities";

export type CartItemAction = "increment" | "decrement" | "delete";

export type ChangeItemActionPayload = Pick<CartItem, "id" | "size" | "type">;
