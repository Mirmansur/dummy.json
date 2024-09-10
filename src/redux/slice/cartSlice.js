import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { saveToLocalStorage } from "../../helpers/saveToLS";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.products.findIndex(
          ({ product }) => product.id === action.payload.product.id,
        ) === -1
      ) {
        state.products.push(action.payload);
      } else {
        state.products.map((product) => {
          if (product.product.id === action.payload.product.id) {
            product.amount += 1;
          }
          return product;
        });
      }

      saveToLocalStorage("cart", state.products);
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const productIndex = state.products.findIndex(
        ({ product }) => product.id === productId,
      );

      if (productIndex !== -1) {
        const productToRemove = state.products[productIndex];
        if (productToRemove.amount > 1) {
          productToRemove.amount -= 1;
        } else {
          state.products.splice(productIndex, 1);
          notification.success({
            message: "Success!",
            description: `The ${productToRemove.product.title} has been removed from your cart.`,
            placement: "top",
          });
        }
      }

      saveToLocalStorage("cart", state.products);
    },
  },
});

export const { reducer } = cartSlice;
export const { addToCart, removeFromCart } = cartSlice.actions;
