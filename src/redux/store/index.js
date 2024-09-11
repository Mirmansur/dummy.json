import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../../redux/slice/likeSlice";
import cartSlice from "../slice/cartSlice";
const store = configureStore({
  reducer: {
    liked: wishlistSlice,
    cards: cartSlice,
  },
});

export default store;
