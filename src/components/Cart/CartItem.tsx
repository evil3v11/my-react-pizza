import { useDispatch } from "react-redux";
import {
  addOrIncrementItem,
  decrementItem,
  deleteItem,
  calculateTotal,
} from "../../store/slices/cartSlice";

import type { CartItem as CartItemProps } from "../../types";

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
  const dispatch = useDispatch();

  const handleItemIncrement = () => {
    dispatch(addOrIncrementItem({ id, size, type }));
    dispatch(calculateTotal());
  };

  const handleDecrementItem = () => {
    dispatch(decrementItem({ id, type, size }));
    dispatch(calculateTotal());
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem({ id, type, size }));
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
          onClick={handleDecrementItem}
        >
          <MinusIcon />
        </button>
        <b>{quantity}</b>
        <button
          className="button button--outline button--circle cart__item-count-plus"
          onClick={handleItemIncrement}
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
          onClick={handleDeleteItem}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
