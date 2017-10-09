import {
  createRouter,
} from '@expo/ex-navigation';

import login from '../screen/account/login';
import homeScreen from '../screen/account/homeScreen';
import signUp from '../screen/account/signUp';
import SplashScreen from '../screen/home/SplashScreen/SplashScreen';
import EditProfile from '../screen/home/EditProfile/EditProfile';
import CouponCollected from '../screen/home/CouponCollection/CouponCollected';
import CouponCollection from '../screen/home/CouponCollection/CouponCollection';
import OpeningHours from '../screen/home/OpeningHours/OpeningHours';
import productList from '../screen/home/product/productList';
import addProduct from '../screen/home/product/addProduct';
import editProduct from '../screen/home/product/editProduct';
import businessInfo from '../screen/home/businessInfo/businessInfo';
import couponList from '../screen/home/couponList/couponList';

export default createRouter(() => ({
  login: () => login,
  homeScreen: () => homeScreen,
  signUp: () => signUp,
  SplashScreen: () => SplashScreen,
  EditProfile: () => EditProfile,
  CouponCollected: () => CouponCollected,
  CouponCollection: () => CouponCollection,
  OpeningHours: () => OpeningHours,
  productList: () => productList,
  addProduct: () => addProduct,
  editProduct: () => editProduct,
  businessInfo: () => businessInfo,
  couponList: () => couponList

}), { ignoreSerializableWarnings: true });
