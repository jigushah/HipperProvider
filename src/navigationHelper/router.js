import {
    createRouter,
} from '@expo/ex-navigation';

import login from '../screen/account/login'
import homeScreen from '../screen/account/homeScreen'
import signUp from '../screen/account/signUp'
import SplashScreen from '../screen/home/SplashScreen/SplashScreen'
import EditProfile from '../screen/home/EditProfile/EditProfile'

export default createRouter(() => ({
    login: () => login,
    homeScreen: () => homeScreen,
    signUp: () => signUp,
    SplashScreen: () => SplashScreen,
    EditProfile: () => EditProfile


}),{ignoreSerializableWarnings: true});
