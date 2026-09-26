import type { GetPizzasQueryOptions } from "../api";
import type { OrderDirection } from "../filters";

export type PizzaCategoriesProps = {
  category: number;
  onChangeCategory: (categoryId: number) => void;
};

export type SortProps = {
  sortOption: number;
  order: OrderDirection;
  onSortOptionChange: (sortByIdx: number) => void;
  onOrderDirectionToggle: (order: OrderDirection) => void;
};

export type PizzaListProps = {
  options: GetPizzasQueryOptions;
};
