import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  useAppDispatch,
  useGetPizzaByIdQuery,
  addOrIncrementItem,
  calculateTotal,
  cartSelector,
} from "../store";
import { usePizzaOptions } from "../hooks";

import { PIZZA_TYPES } from "../lib";
import type { CartItem } from "../types";

import PizzaCardSkeleton from "../components/PizzaCard/PizzaCardSkeleton";
import PizzaOptionsSelector from "../components/PizzaOptionsSelector";
import AddToCartButton from "../components/PizzaCard/AddToCartButton";

const PizzaPage = () => {
  // id is always present inside this page, if not - user gets 404 page
  const { pizzaId } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { totalCount } = useSelector(cartSelector);

  const { data: pizza, isLoading, isError } = useGetPizzaByIdQuery(pizzaId!);
  const { activeSizeIdx, activeType, handleSizeIdxChange, handleTypeChange } =
    usePizzaOptions();

  const handleAddItemToCart = useCallback(() => {
    const cartItem = {
      id: pizza?.id,
      title: pizza?.title,
      imageUrl: pizza?.imageUrl,
      price: pizza?.price,
      size: pizza?.sizes[activeSizeIdx],
      type: PIZZA_TYPES[activeType],
    } as CartItem;

    dispatch(addOrIncrementItem(cartItem));
    dispatch(calculateTotal());
  }, [activeSizeIdx, activeType, dispatch, pizza]);

  if (isLoading || !pizza) return <PizzaCardSkeleton />;
  if (isError || !pizza) navigate("/");

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img src={pizza.imageUrl} alt={pizza.title} />
      <div
        style={{
          minWidth: "25%",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2>{pizza.title}</h2>
        <h4 style={{ fontWeight: 800 }}>{pizza.price} P</h4>
        <PizzaOptionsSelector
          types={pizza.types}
          sizes={pizza.sizes}
          activeType={activeType}
          activeSizeIdx={activeSizeIdx}
          handleTypeChange={handleTypeChange}
          handleSizeIdxChange={handleSizeIdxChange}
        />
        <AddToCartButton
          quantity={totalCount}
          onAddItemToCart={handleAddItemToCart}
        />
      </div>
    </div>
  );
};

export default PizzaPage;
