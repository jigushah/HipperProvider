import {
    createRouter,
} from '@expo/ex-navigation';

import login from '../screen/account/login'
import homeScreen from '../screen/account/homeScreen'
import signUp from '../screen/account/signUp'
import SplashScreen from '../screen/home/SplashScreen/SplashScreen'

export default createRouter(() => ({
    login: () => login,
    homeScreen: () => homeScreen,
    signUp: () => signUp,
    SplashScreen: () => SplashScreen


}),{ignoreSerializableWarnings: true});
