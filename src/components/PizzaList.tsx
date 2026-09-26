import { useSelector } from "react-redux";
import { useGetPizzasQuery } from "../store/api/pizzaApi";

import PizzaCard from "./PizzaCard/PizzaCard";
import PizzaCardSkeleton from "./PizzaCard/PizzaCardSkeleton";
import PizzaListError from "./PizzaListError";
import type { RootState } from "../store/store";

const PizzaList = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const search = useSelector((state: RootState) => state.search.value);
  const pagination = useSelector((state: RootState) => state.pagination);

  const {
    data: pizzas,
    isFetching,
    isError,
    refetch,
  } = useGetPizzasQuery({ ...filter, search, ...pagination });

  if (isError) return <PizzaListError onRefetch={refetch} />;

  return (
    <div className="content__items">
      {isFetching || !pizzas
        ? [...new Array(8)].map((_, i) => <PizzaCardSkeleton key={i} />)
        : pizzas.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)}
    </div>
  );
};

export default PizzaList;
