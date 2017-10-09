/**
 * Created by Developer49 on 19/07/17.
 */
import { Alert, AsyncStorage } from 'react-native';

export function showAlert(alertText) {
  Alert.alert(
    'Demo APP',
    alertText,
    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    { cancelable: false },
  );
}
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function getAccessToken() {
  return AsyncStorage.getItem('access_token', (error, access_token) => access_token);
}
