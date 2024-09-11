import { configureStore } from "@reduxjs/toolkit";
// import likeReducer from "../slice/likeSlice";
import wishlistSlice from "../../redux/slice/likeSlice";
const store = configureStore({
  reducer: {
    liked: wishlistSlice,
  },
});

export default store;
