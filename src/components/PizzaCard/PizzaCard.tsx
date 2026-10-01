import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { usePizzaOptions } from "../../hooks";
import {
  useAppDispatch,
  addOrIncrementItem,
  calculateTotal,
  cartSelector,
} from "../../store";

import { PIZZA_TYPES } from "../../lib";
import type { CartItem, Pizza as PizzaCardProps } from "../../types";

import { Link } from "react-router";
import PizzaCardSelectors from "../PizzaOptionsSelector";
import AddToCartButton from "./AddToCartButton";

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
  const dispatch = useAppDispatch();

  const handleAddItemToCart = useCallback(() => {
    dispatch(
      addOrIncrementItem({
        id,
        title,
        price,
        imageUrl,
        size: sizes[activeSizeIdx],
        type: PIZZA_TYPES[activeType],
      } as CartItem),
    );
    dispatch(calculateTotal());
  }, [activeSizeIdx, activeType, dispatch, id, imageUrl, price, sizes, title]);

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
      <PizzaCardSelectors
        types={types}
        sizes={sizes}
        activeType={activeType}
        activeSizeIdx={activeSizeIdx}
        handleTypeChange={handleTypeChange}
        handleSizeIdxChange={handleSizeIdxChange}
      />
      <div className="pizza-card__bottom">
        <div className="pizza-card__price">от {price} ₽</div>
        <AddToCartButton
          quantity={quantity}
          onAddItemToCart={handleAddItemToCart}
        />
      </div>
    </div>
  );
};

export default PizzaCard;
