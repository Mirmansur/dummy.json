import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../../components/helpers/saveToLS";

const initialState = {
  likedProducts: localStorage.getItem("liked")
    ? JSON.parse(localStorage.getItem("liked"))
    : [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      const existingProductIndex = state.likedProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        state.likedProducts.push(action.payload);
      } else {
        state.likedProducts = state.likedProducts.filter(
          (product) => product.id !== action.payload.id
        );
      }

      saveToLocalStorage("liked", state.likedProducts);
    },
    removeFromLiked: (state, action) => {
      state.likedProducts = state.likedProducts.filter(
        (product) => product.id !== action.payload
      );
      saveToLocalStorage("liked", state.likedProducts);
    },
  },
});

export const { reducer } = likeSlice;
export const { addToLiked, removeFromLiked } = likeSlice.actions;
