import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    videos: null,
  },
  reducers: {
    addvideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addvideos } = movieSlice.actions;
export default movieSlice.reducer;
