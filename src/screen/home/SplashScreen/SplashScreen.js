import React from 'react';
import { StyleSheet, Text, View, ScrollView,
  TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import Constant from '../../../services/apiConstant';
import NavBar from '../../navigationComponent/navigationBar';


export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{
 position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, opacity: 0.5,
}}
        >
          <Image resizeMode="contain" style={{ height: Constant.screenHeight, width: Constant.screenWidth }} source={require('../../../../assets/images/Asset_25xxxhdpi.png')} />
        </View>
        <View style={{
                padding: 100,
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0)',
}}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 100 }}>
            <Image style={{ flex: 1, height: 180, width: 240 }} resizeMode="contain" source={require('../../../../assets/images/applogo.png')} />
          </View>
          <Text style={{
 alignItems: 'center', marginLeft: 30, color: 'white', fontSize: 30, fontFamily: 'NunitoBoldItalic',
}}
          >Providers
          </Text>
        </View>
      </View>
    );
  }
}
