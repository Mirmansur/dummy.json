import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { reducer } = counterSlice;
export const { increment, decrement, reset } = counterSlice.actions;
