import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

let counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: function (state) {
      state.count = state.count + 1;
    },
    decrement: function (state) {
      state.count = state.count - 1;
    },
    incrementByFive: function (state, action) {
      state.count = state.count + action.payload;
    },
    reset: function (state) {
      state.count = 0;
    },
  },
});
export const { increment, decrement, incrementByFive, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
