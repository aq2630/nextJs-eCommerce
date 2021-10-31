import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import userReducer from "./users";

export default configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
});
