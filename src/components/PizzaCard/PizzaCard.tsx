import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePizzaOptions } from "../../hooks/usePizzaOptions";
import {
  addOrIncrementItem,
  calculateTotal,
  cartSelector,
} from "../../store/slices/cartSlice";

import { PIZZA_TYPES } from "../../lib/constants";
import type { Pizza as PizzaCardProps } from "../../types";

import { Link } from "react-router";
import PlusIcon from "../svg/PlusIcon";
import PizzaCardSelectors from "../PizzaOptionsSelector";

const PizzaCard = ({
  id,
  title,
  price,
  types,
  sizes,
  imageUrl,
}: PizzaCardProps) => {
  const { activeSizeIdx, activeType, handleSizeIdxChange, handleTypeChange } =
    usePizzaOptions();

  const { items } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(
      addOrIncrementItem({
        id,
        title,
        price,
        imageUrl,
        size: sizes[activeSizeIdx],
        type: PIZZA_TYPES[activeType],
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
      <Link to={`/pizza/${id}`}>
        <img className="pizza-card__image" src={imageUrl} alt={title} />
        <h4 className="pizza-card__title">{title}</h4>
      </Link>
      <div />
      <PizzaCardSelectors
        types={types}
        sizes={sizes}
        activeType={activeType}
        activeSizeIdx={activeSizeIdx}
        onTypeChange={handleTypeChange}
        onSizeIdxChange={handleSizeIdxChange}
      />
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
