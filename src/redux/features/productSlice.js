import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: false,
};

export const getProductData = createAsyncThunk(
  "product/productData/",
  async (rejectWithValue) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/products`);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getProductData.pending]: (state) => {
      state.status = "pending";
    },

    [getProductData.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.items = payload;
      state.error = false;
    },

    [getProductData.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = true;
    },
  },
});

export default productSlice.reducer;
