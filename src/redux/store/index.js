import { configureStore } from "@reduxjs/toolkit";
import { reducer as likeReducer } from "../slice/likeSlice";

const store = configureStore({
  reducer: {
    likeReducer,
  },
});

export default store;
