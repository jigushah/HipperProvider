/**
 * Created by Developer49 on 19/07/17.
 */

import axios from 'axios';
import {AsyncStorage} from 'react-native';
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
      const auth = {
        provider_id: res.data.provider_id,
        access_token: res.data.access_token,
      };
      AsyncStorage.setItem('auth', auth)

      return Promise.resolve(res.data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
  }
}

export const signUpUser = (newUser) => {
  return (dispatch,getState) => {
    let url = APIConstant.baseUrl + APIConstant.signUp;
    return axios.post(url,newUser,{})
    .then(res => {
      debugger;
      return Promise.resolve(res.data);
    })
    .catch(err => {
      debugger;
      return Promise.reject(err);
    });
  }
}
