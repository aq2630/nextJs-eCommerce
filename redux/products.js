import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// creating async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await (await fetch("/api/products")).json();
    return response;
  }
);
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await (await fetch(`/api/product/${id}`)).json();
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: true,
  },
  reducers: {
    // getAllProducts: async (state) => {
    //   const data = await (await fetch("/api/products")).json();
    //   return [...state, data];
    // },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "success";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchProductById.pending]: (state) => {
      state.loading = "loading";
      state.product = null;
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.status = "success";
    },
    [fetchProductById.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
