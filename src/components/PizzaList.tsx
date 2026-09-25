import { useGetPizzasQuery } from "../store/api/pizzaApi";

import PizzaCard from "./PizzaCard/PizzaCard";
import PizzaCardSkeleton from "./PizzaCard/PizzaCardSkeleton";
import PizzaListError from "./PizzaListError";

const PizzaList = () => {
  const { data: pizzas, isLoading, isError, refetch } = useGetPizzasQuery();

  if (isError) return <PizzaListError onRefetch={refetch} />;

  return (
    <div className="content__items">
      {isLoading || !pizzas
        ? [...new Array(6)].map((_, i) => <PizzaCardSkeleton key={i} />)
        : pizzas.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)}
    </div>
  );
};

export default PizzaList;
