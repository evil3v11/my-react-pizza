import type { SortOptions } from "../../types";

export const PIZZA_CATEGORIES = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
] as const;

export const PIZZA_TYPES = ["тонкое", "традиционное"] as const;
export const PIZZA_SORT_BY_OPTIONS: SortOptions[] = [
  { name: "популярности", value: "rating" },
  { name: "цене", value: "price" },
  { name: "алфавиту", value: "title" },
];

/**  
  In best case scenario, 
  backend should give out the amount of pages that exist with current search parameters
  @param totalPages totalItems / limit
**/
export const TOTAL_PAGES = 3;

export const PIZZAS_PER_PAGE = 10;

export const PIZZAS_PER_PAGE_OPTIONS = [2, 5, 10];
