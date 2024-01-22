import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-Slice";
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
