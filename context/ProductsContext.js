import { accordionActionsClasses } from "@mui/material";
import React, { createContext, useReducer } from "react";
import {
  ProductsReducer,
  ProductlistReducer,
} from "./reducers/ProductsReducer";

// initial state
const initialProductState = { products: [], product: null };

// creating context for products
export const ProductContext = createContext(initialProductState);

// creating provider
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialProductState);

  // action
  const getAllProducts = async (url) => {
    const allProducts = await (await fetch(url)).json();
    dispatch({
      type: "GET_PRODUCTS",
      payload: allProducts,
    });
  };

  const getSingleProduct = async (id) => {
    const data = await (await fetch(`/api/product/${id}`)).json();
    dispatch({
      type: "GET_SINGLE_PRODUCT",
      payload: data,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        getAllProducts,
        getSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
