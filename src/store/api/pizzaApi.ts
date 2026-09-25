import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../lib/constants";

import type { Pizza } from "../../types";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getPizzas: builder.query<Pizza[], void>({
      query: () => "/pizzas",
    }),
  }),
});

export const { useGetPizzasQuery } = pizzaApi;
