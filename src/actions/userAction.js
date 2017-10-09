/**
 * Created by Developer49 on 19/07/17.
 */

import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { SET_USER_DATA,
} from '../constants/actionTypes';
import APIConstant from '../services/apiConstant';

export const loginUser = user => (dispatch) => {
  const url = APIConstant.baseUrl + APIConstant.login;
  return axios.post(url, user, {})
    .then((res) => {
      dispatch({
        type: SET_USER_DATA,
        payload: res.data,
      });
      const auth = {
        provider_id: res.data.provider_id,
        access_token: res.data.access_token,
      };
      AsyncStorage.setItem('auth', JSON.stringify(auth));

      return Promise.resolve(res.data);
    })
    .catch(err => Promise.reject(err));
};

export const signUpUser = newUser => () => {
  const url = APIConstant.baseUrl + APIConstant.signUp;
  return axios.post(url, newUser, {})
    .then(res => Promise.resolve(res.data))
    .catch(err => Promise.reject(err));
};
