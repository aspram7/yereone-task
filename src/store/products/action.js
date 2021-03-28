import * as types from "store/products/types";
import { getProducts } from "api/service";

export const getBestSellersAction = () => {
  return async (dispatch) => {
    try {
      const data = await getProducts("best");
      dispatch({
        type: types.GET_BEST_SELLERS,
        payload: {
          products: data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getNewProductsAction = () => {
  return async (dispatch) => {
    try {
      const data = await getProducts("new");
      dispatch({
        type: types.GET_NEW_PRODUCTS,
        payload: {
          products: data,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
