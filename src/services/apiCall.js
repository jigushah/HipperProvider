import ApiConstant from './apiConstant'
import axios from 'axios'
import {Alert} from 'react-native'



export function CallApi(url,type='get',data={},header=[]) {
debugger

    let reqHeader = Object.assign(header, {"Accept":"application/json"});

    if(type == 'get'){
        return axios.get(url,{headers: reqHeader})
            .then((response) => {
              debugger;
                return Promise.resolve(response)
            })
            .catch((err) => {
              debugger;
                switch (err.response.data.status_code){
                    case 401:
                        return Promise.reject(err.response.data.data);

                    default:
                        return Promise.reject(err);
                }
            });
    }else{
        return axios.post(url,data,{headers: reqHeader})
            .then((response) => {
                return Promise.resolve(response)
            })
            .catch((err) => {
                debugger;
                switch (err.response.data.status_code){
                    case 401:
                        return Promise.reject(err.response.data.data);
                    case 409:
                        return Promise.reject(err.response.data.data);
                    default:
                        return Promise.reject(err);
                }
            });
    }
}


export function showAlert(alertText) {
    Alert.alert("Brain Buddy",
        alertText,
        [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
    )
}
