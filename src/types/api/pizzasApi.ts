import type { OrderDirection } from "../filters";

export type GetPizzasQueryOptions = {
  sortBy: string;
  category: number;
  order: OrderDirection;
  search: string;
  page: number;
  limit: number;
};
