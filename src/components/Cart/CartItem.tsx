import { useAppDispatch } from "../../store";
import {
  addOrIncrementItem,
  decrementItem,
  deleteItem,
  calculateTotal,
} from "../../store";

import type { CartItemAction, CartItem as CartItemProps } from "../../types";

import PlusIcon from "../svg/PlusIcon";
import { MinusIcon } from "lucide-react";

const CartItem = ({
  id,
  imageUrl,
  title,
  price,
  quantity,
  size,
  type,
}: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleCartItemAction = (action: CartItemAction) => {
    const cartItem = { id, size, type };

    switch (action) {
      case "increment":
        dispatch(addOrIncrementItem(cartItem as CartItemProps));
        break;
      case "decrement":
        dispatch(decrementItem(cartItem));
        break;
      case "delete":
        dispatch(deleteItem(cartItem));
        break;
    }

    dispatch(calculateTotal());
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt={title} />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <button
          className="button button--outline button--circle cart__item-count-minus"
          onClick={() => handleCartItemAction("decrement")}
        >
          <MinusIcon />
        </button>
        <b>{quantity}</b>
        <button
          className="button button--outline button--circle cart__item-count-plus"
          onClick={() => handleCartItemAction("increment")}
        >
          <PlusIcon />
        </button>
      </div>
      <div className="cart__item-price">
        <b>{quantity * price} ₽</b>
      </div>
      <div className="cart__item-remove">
        <button
          className="button button--outline button--circle"
          onClick={() => handleCartItemAction("delete")}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
