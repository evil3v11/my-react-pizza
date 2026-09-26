import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { OrderDirection, SortOption } from "../../types";

type FilterState = {
  categoryId: number;
  sortBy: SortOption;
  order: OrderDirection;
};

const initialState: FilterState = {
  categoryId: 0,
  sortBy: "rating",
  order: "desc",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => ({
      ...state,
      categoryId: action.payload,
    }),
    setSortBy: (state, action: PayloadAction<SortOption>) => ({
      ...state,
      sortBy: action.payload,
    }),
    setOrder: (state, action: PayloadAction<OrderDirection>) => ({
      ...state,
      order: action.payload,
    }),
  },
});

export const { setCategoryId, setOrder, setSortBy } = filterSlice.actions;
