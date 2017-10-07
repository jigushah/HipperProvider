/**
 * Created by Developer49 on 19/07/17.
 */

import axios from 'axios';
import {

} from '../constants/actionTypes';
import {AsyncStorage} from 'react-native';
import APIConstant from '../services/apiConstant';
import { showAlert, getAccessToken } from '../services/helper';

export const getProduct = () => {
  return (dispatch,getState) => {
    AsyncStorage.getItem('auth', (error, auth) => {
      debugger;
      let url = APIConstant.baseUrl + APIConstant.productList + auth.provider_id + '/product';
      axios.get(url, {Authorization:'bearer ' + auth.access_token })
        .then(res => {
          debugger;
          dipatch({ type: 'PRODUCT_SUCCESS', res.data });
        })
        .catch(err => {
          dipatch({ type: 'PRODUCT_ERROR', err });
        });
    })
  }
}
