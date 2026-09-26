import { createSlice } from "@reduxjs/toolkit";
import { PIZZAS_PER_PAGE } from "../../lib/constants";

const initialState = {
  page: 1,
  limit: PIZZAS_PER_PAGE,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => ({ ...state, page: action.payload }),
    setLimit: (state, action) => ({ ...state, limit: action.payload }),
  },
});

export const { setCurrentPage, setLimit } = paginationSlice.actions;
