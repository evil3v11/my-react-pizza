import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (_, action) => ({ value: action.payload }),
    clearSearch: (_) => ({ value: "" }),
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;
