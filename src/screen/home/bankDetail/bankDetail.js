import React from 'react';
import { StyleSheet, Text, View ,Image ,ScrollView,TextInput ,TouchableHighlight ,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import TextBox from '../../component/TextBox'
import PopUpHeader from '../../component/popUpHeader'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Constant from '../../../services/apiConstant';
import NavBar from '../../navigationComponent/navigationBar';

const Images = {
  mapImg: require('../../../../assets/images/map_BW.png'),
}
onBackPress = () => {
  this.props.navigator.pop();
}
export default class BankDetail extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
      <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}  source={require("../../../../assets/images/Asset_25xxxhdpi.png")}/>
      </View>
      <NavBar isBackShow={true} onBackPress={this.onBackPress}/>
      <ScrollView style={{marginTop:30,marginLeft:15,marginRight:15,paddingBottom:10,borderRadius:5,marginBottom:20}}>
      <PopUpHeader headerTitle="Bank Details" closePopUp={this.closePopUp}/>
      <View style={{backgroundColor:'rgba(255,255,255,0.5)',padding:30}}>
      <Text style={{color:'gray',paddingBottom:5}}>
      Beneficiary Name
      </Text>
      <TextInput multiline = {true}
      numberOfLines = {4} style={{backgroundColor:'white',
      fontSize:18,padding:10,borderRadius:5,borderWidth:2
      ,borderColor:'gray'}}/>
      <Text style={{color:'gray',paddingBottom:5,paddingTop:25}}>
      Beneficiary Address
      </Text>
      <TextInput multiline = {true}
      numberOfLines = {4} style={{backgroundColor:'white',
      fontSize:18,padding:10,borderRadius:5,borderWidth:2
      ,borderColor:'gray'}}/>
      <Text style={{color:'gray',paddingBottom:5,paddingTop:25}}>
      Bank Name
      </Text>
      <TextInput multiline = {true}
      numberOfLines = {4} style={{backgroundColor:'white',
      fontSize:18,padding:10,borderRadius:5,borderWidth:2
      ,borderColor:'gray'}}/>
      <Text style={{color:'gray',paddingBottom:5,paddingTop:25}}>
      {'Branch Number'}
      </Text>
      <TextInput multiline = {true}
      numberOfLines = {4} style={{backgroundColor:'white',
      fontSize:18,padding:10,borderRadius:5,borderWidth:2
      ,borderColor:'gray'}}/>
      <Text style={{color:'gray',paddingBottom:5,paddingTop:25}}>
      {'Account Number'}
      </Text>
      <TextInput multiline = {true}
      numberOfLines = {4} style={{backgroundColor:'white',
      fontSize:18,padding:10,borderRadius:5,borderWidth:2
      ,borderColor:'gray'}}/>
      <View style={{paddingTop:20}}>
        <TouchableHighlight >
        <View style={{
          paddingTop: 10,
          paddingLeft: 0,
          paddingBottom: 10,
          paddingRight: 0,
          backgroundColor: 'rgb(68,176,166)',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: 'gray',shadowOpacity: 0.5,
          shadowRadius: 7,
        }}
        >
        <Text style={{ color: 'white', fontFamily: 'NunitoBoldItalic', fontSize: 17 }}>Save</Text>
        </View>
        </TouchableHighlight>
      </View>
      </View>
      </ScrollView>
      </View>
    );
  }
}
