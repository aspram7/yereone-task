import * as types from "store/products/types";

const initialState = {
  bestSellers: [],
  newProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BEST_SELLERS:
      return {
        ...state,
        bestSellers: action.payload.products,
      };
    case types.GET_NEW_PRODUCTS:
      return {
        ...state,
        newProducts: action.payload.products,
      };
    default:
      return state;
  }
};

export default productReducer;
