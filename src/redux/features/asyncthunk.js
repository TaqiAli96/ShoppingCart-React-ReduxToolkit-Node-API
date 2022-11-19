import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userData = {
  data: [],
  loading: false,
  error: false,
  isSuccess: false,
};
export const getUserData = createAsyncThunk(
  "users/getData/",
  async (rejectWithValue) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
let asyncApiSlice = createSlice({
  name: "userData",
  initialState: userData,
  reducers: {},

  extraReducers: {
    [getUserData.pending]: (state) => {
      state.loading = true;
    },

    [getUserData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
      state.error = false;
    },

    [getUserData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.error = true;
    },
  },
});

export default asyncApiSlice.reducer;
