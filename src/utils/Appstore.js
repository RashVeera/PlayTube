import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice"

const Appstore = configureStore({
  reducer: {
    app: AppSlice,
    video: movieSlice,
    search: searchSlice,
    chat:chatSlice
  },
});

export default Appstore;
