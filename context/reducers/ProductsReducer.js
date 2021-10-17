export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_SINGLE_PRODUCT":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
