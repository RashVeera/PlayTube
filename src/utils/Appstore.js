import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";

const Appstore = configureStore({
  reducer: {
    app: AppSlice,
    video: movieSlice,
    search: searchSlice,
  },
});

export default Appstore;
