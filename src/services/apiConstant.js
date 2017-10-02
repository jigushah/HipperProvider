import { Dimensions } from 'react-native'

module.exports = {
    //Screen's Constant
    screen: Dimensions.get('window'),
    screenHeight:  Dimensions.get('window').height,
    screenWidth:  Dimensions.get('window').width,

    //API Constant
    baseUrl: 'ec2-52-59-69-22.eu-central-1.compute.amazonaws.com:8090/',
    //ec2-52-59-69-22.eu-central-1.compute.amazonaws.com:8090
    signIn:'login',
    signUp:'public/customer/signup',

};
