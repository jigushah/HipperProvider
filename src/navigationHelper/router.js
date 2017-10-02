import {
    createRouter,
} from '@expo/ex-navigation';

import login from '../screen/account/login'
import homeScreen from '../screen/account/homeScreen'
import signUp from '../screen/account/signUp'
import SplashScreen from '../screen/home/SplashScreen/SplashScreen'
import EditProfile from '../screen/home/EditProfile/EditProfile'
import CouponCollection from '../screen/home/CouponCollection/CouponCollection'
import OpeningHours from '../screen/home/OpeningHours/OpeningHours'
import UpdateProduct from '../screen/home/UpdateProduct/UpdateProduct'
import AddNewProduct from '../screen/home/AddNewProduct/AddNewProduct'


export default createRouter(() => ({
    login: () => login,
    homeScreen: () => homeScreen,
    signUp: () => signUp,
    SplashScreen: () => SplashScreen,
    EditProfile: () => EditProfile,
    CouponCollection: () => CouponCollection,
    OpeningHours: () => OpeningHours,
    UpdateProduct: () => UpdateProduct,
    AddNewProduct: () => AddNewProduct

}),{ignoreSerializableWarnings: true});
