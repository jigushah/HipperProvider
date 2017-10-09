/**
 * Created by Developer49 on 19/07/17.
 */

import { GET_PRODUCT_LIST } from '../constants/actionTypes';

const INITIAL_STATE = {
  productList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        productList: action.payload,
      };
    }

    default:
      return state;
  }
};
