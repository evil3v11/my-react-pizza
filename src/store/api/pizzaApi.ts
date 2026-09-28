import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../lib/constants";

import type { Pizza } from "../../types";
import type { GetPizzasQueryOptions } from "../../types";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ["Pizzas"],
  endpoints: (builder) => ({
    getPizzas: builder.query<Pizza[], GetPizzasQueryOptions>({
      query: ({ search, category, ...params }) => ({
        url: "/pizzas",
        params: {
          ...params,
          search: search || undefined,
          category: category || undefined,
        },
      }),
    }),
  }),
});

export const { useGetPizzasQuery } = pizzaApi;
