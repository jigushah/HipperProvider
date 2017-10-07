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
    return AsyncStorage.getItem('provider_id', (error, provider_id) => {
            debugger;
            return getAccessToken().then(access_token => {
              console.log(access_token)
          let url = APIConstant.baseUrl + APIConstant.productList + provider_id + '/product';
          return axios.get(url, {Authorization:'bearer ' + access_token })
          .then(res => {
            debugger;
            return Promise.resolve(res.data);
          })
          .catch(err => {
            debugger;
            return Promise.reject(err);
          });
      })
    })
  }
}
