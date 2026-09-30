import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useGetPizzaByIdQuery } from "../store/api/pizzaApi";
import { usePizzaOptions } from "../hooks/usePizzaOptions";
import { addOrIncrementItem, calculateTotal } from "../store/slices/cartSlice";

import { PIZZA_TYPES } from "../lib/constants";

import PizzaCardSkeleton from "../components/PizzaCard/PizzaCardSkeleton";
import PizzaOptionsSelector from "../components/PizzaOptionsSelector";

const PizzaPage = () => {
  // id is always present inside this page, if not - user gets 404 page
  const { pizzaId } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: pizza, isLoading, isError } = useGetPizzaByIdQuery(pizzaId!);
  const { activeSizeIdx, activeType, handleSizeIdxChange, handleTypeChange } =
    usePizzaOptions();

  if (isLoading || !pizza) return <PizzaCardSkeleton />;
  if (isError || !pizza) navigate("/");

  const { id, title, imageUrl, price, types, sizes } = pizza;

  const handleAddItemToCart = () => {
    dispatch(
      addOrIncrementItem({
        id,
        title,
        imageUrl,
        price,
        size: sizes[activeSizeIdx],
        type: PIZZA_TYPES[activeType],
      }),
    );
    dispatch(calculateTotal());
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img src={imageUrl} alt={title} />
      <div
        style={{
          minWidth: "25%",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2>{title}</h2>
        <h4 style={{ fontWeight: 800 }}>{price} P</h4>
        <PizzaOptionsSelector
          types={types}
          sizes={sizes}
          activeType={activeType}
          activeSizeIdx={activeSizeIdx}
          onTypeChange={handleTypeChange}
          onSizeIdxChange={handleSizeIdxChange}
        />
        <button
          className="button button--outline button--add"
          onClick={handleAddItemToCart}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default PizzaPage;
