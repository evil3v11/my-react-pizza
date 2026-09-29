import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrIncrementItem,
  calculateTotal,
} from "../../store/slices/cartSlice";

import { PIZZA_TYPES } from "../../lib/constants";
import type { RootState } from "../../store/store";
import type { Pizza as PizzaCardProps } from "../../types";
import PlusIcon from "../svg/PlusIcon";

const PizzaCard = ({
  id,
  title,
  price,
  types,
  sizes,
  imageUrl,
}: PizzaCardProps) => {
  const [activeTypeIdx, setActiveTypeIdx] = useState(0);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(
      addOrIncrementItem({
        id,
        title,
        price,
        imageUrl,
        size: activeSize,
        type: PIZZA_TYPES[activeTypeIdx],
      }),
    );
    dispatch(calculateTotal());
  };

  const quantity = useMemo(() => {
    return items
      .filter((i) => i.id === id)
      .reduce((acc, curr) => {
        acc += curr.quantity;
        return acc;
      }, 0);
  }, [id, items]);

  return (
    <div className="pizza-card">
      <img className="pizza-card__image" src={imageUrl} alt={title} />
      <h4 className="pizza-card__title">{title}</h4>
      <div className="pizza-card__selector">
        <ul>
          {types.map((typeIdx) => (
            <li
              key={typeIdx}
              onClick={() => setActiveTypeIdx(typeIdx)}
              className={activeTypeIdx === typeIdx ? "active" : ""}
            >
              {PIZZA_TYPES[typeIdx]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => setActiveSize(size)}
              className={activeSize === size ? "active" : ""}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-card__bottom">
        <div className="pizza-card__price">от {price} ₽</div>
        <button
          className="button button--outline button--add"
          onClick={handleAddItemToCart}
        >
          <PlusIcon />
          <span>
            Добавить
            {quantity > 0 && <i>{quantity}</i>}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
