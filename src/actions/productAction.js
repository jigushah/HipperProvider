/**
 * Created by Developer49 on 19/07/17.
 */

import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
  GET_PRODUCT_LIST
} from '../constants/actionTypes';
import APIConstant from '../services/apiConstant';
import ApiCall from '../services/apiCall'

export const getProduct = () => {
  return (dispatch) => {
    debugger;
    return AsyncStorage.getItem('auth').then(auth =>{
       const url = `${APIConstant.baseUrl + APIConstant.productList + JSON.parse(auth).provider_id}/product`;
       return axios.get(url,{headers:{ Authorization: `bearer ${JSON.parse(auth).access_token}` }})
         .then((res) => {
           debugger;
           dispatch({ type: 'GET_PRODUCT_LIST', payload: res.data.content });
           return Promise.resolve(res);
         })
         .catch((err) => {
           return Promise.reject(err);
         });
     }).catch(err => {
return Promise.reject(err);

     })


  };
}
