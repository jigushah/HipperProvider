/**
 * Created by Developer49 on 19/07/17.
 */

import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {

} from '../constants/actionTypes';
import APIConstant from '../services/apiConstant';

export default function getProduct() {
  return (dispatch) => {
    AsyncStorage.getItem('auth', (error, auth) => {
      const url = `${APIConstant.baseUrl + APIConstant.productList + auth.provider_id}/product`;
      axios.get(url, { Authorization: `bearer ${auth.access_token}` })
        .then((res) => {
          dispatch({ type: 'PRODUCT_SUCCESS', data: res.data });
        })
        .catch((err) => {
          dispatch({ type: 'PRODUCT_ERROR', err });
        });
    });
  };
}
