import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../../components/helpers/saveToLS";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex === -1) {
        state.products.push(action.payload);
      }
      saveToLocalStorage("cart", state.products);
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      saveToLocalStorage("cart", state.products);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      saveToLocalStorage("cart", state.products);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteProduct } = cartSlice.actions;
