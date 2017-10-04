/**
 * Created by Developer49 on 19/07/17.
 */

import axios from 'axios';
import {
    GET_USER_DETAILS,SET_USER_DATA
} from '../constants/actionTypes';
import APIConstant from '../services/apiConstant';
import { showAlert } from '../services/helper';



export const loginUser = (user) => {
  return (dispatch,getState) => {
    let url = APIConstant.baseUrl + APIConstant.login;
    return axios.post(url,user,{})
    .then(res => {
      dispatch({
        type:SET_USER_DATA,
        payload:res.data
      });
      return Promise.resolve(res.data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
  }
}
