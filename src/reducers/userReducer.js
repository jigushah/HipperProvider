/**
 * Created by Developer49 on 19/07/17.
 */

import { GET_USER_DETAILS,SET_USER_DATA } from '../constants/actionTypes';
const INITIAL_STATE = {
    userList:[],
    userDetail:{}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_USER_DETAILS: {
            return {
                ...state,
                userList: action.payload,
            };
        }
        case SET_USER_DATA: {
          return {
            ...state,
            userDetail:action.payload,
          };
        }
        default:
            return state;
    }

};
