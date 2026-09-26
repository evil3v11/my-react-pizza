import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl, PIZZAS_PER_PAGE } from "../../lib/constants";

import type { Pizza } from "../../types";
import type { GetPizzasQueryOptions } from "../../types";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ["Pizzas"],
  endpoints: (builder) => ({
    getPizzas: builder.query<Pizza[], GetPizzasQueryOptions>({
      query: ({
        categoryId = 0,
        sortBy = "rating",
        order = "desc",
        search,
        page = 1,
        limit = PIZZAS_PER_PAGE,
      }) => {
        const query = new URLSearchParams();

        if (search) query.append("search", search);
        if (categoryId) query.append("category", String(categoryId));
        query.append("sortBy", sortBy);
        query.append("order", order);
        query.append("page", String(page));
        query.append("limit", String(limit));

        return `/pizzas?${query}`;
      },
    }),
  }),
});

export const { useGetPizzasQuery } = pizzaApi;
