import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchState: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      state.searchState = Object.assign(state.searchState, action.payload);
    },
    removecacheResults: (state, action) => {
      state.searchState = action.payload;
    },
  },
});

export const { cacheResults, removecacheResults } = searchSlice.actions;
export default searchSlice.reducer;
