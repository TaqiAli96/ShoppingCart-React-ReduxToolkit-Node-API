import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/productsApi";
// import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    // products: productReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productApi.middleware),
});
export default store;
