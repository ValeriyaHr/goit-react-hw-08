import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReduser = filtersSlice.reducer;
export const selectFilter = (state) => state.filters.name;