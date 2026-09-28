import { useSearchParams } from "react-router";
import { useGetPizzasQuery } from "../store/api/pizzaApi";

import { PIZZAS_PER_PAGE } from "../lib/constants";
import type { OrderDirection } from "../types";

import PizzaCard from "./PizzaCard/PizzaCard";
import PizzaCardSkeleton from "./PizzaCard/PizzaCardSkeleton";
import PizzaListError from "./PizzaListError";
import PizzaListEmpty from "./PizzaListEmpty";
import Pagination from "../components/Pagination/Pagination";

const PizzaList = () => {
  const [searchParams] = useSearchParams();

  const category = Number(searchParams.get("category")) || 0;
  const page = Number(searchParams.get("page")) || 1;
  const sortBy = searchParams.get("sortBy") || "rating";
  const order = searchParams.get("order") as OrderDirection || "desc" ;
  const search = searchParams.get("search") || "";
  const limit = Number(searchParams.get("limit")) || PIZZAS_PER_PAGE;

  const {
    data: pizzas,
    isFetching,
    error,
    refetch,
  } = useGetPizzasQuery({ category, limit, order, page, search, sortBy });

  if (!isFetching && (!pizzas || !pizzas.length)) return <PizzaListEmpty />;
  if (error) return <PizzaListError onRefetch={refetch} />;

  return (
    <>
      <div className="content__items">
        {isFetching
          ? [...new Array(8)].map((_, i) => <PizzaCardSkeleton key={i} />)
          : pizzas?.map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)}
      </div>
      <Pagination />
    </>
  );
};

export default PizzaList;
