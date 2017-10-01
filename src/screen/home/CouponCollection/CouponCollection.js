import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import TextBox from '../../component/TextBox'
import PopUpHeader from '../../component/popUpHeader'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Constant from '../../../services/apiConstant';
import NavBar from '../../navigationComponent/navigationBar';

const Images = {
  mapImg: require('../../../../assets/images/map_BW.png'),
}

export default class login extends React.Component {
  closePopUp = () => {
    alert("close cliked!")
  }
    render() {
        return (
          <View style={{flex:1}}>
              <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
                <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}  source={require("../../../../assets/images/Asset_25xxxhdpi.png")}/>
              </View>
              <NavBar/>
              <View style={{marginTop:30,marginLeft:15,marginRight:15,paddingBottom:10,borderRadius:5}}>
                <PopUpHeader headerTitle="Coupon was collected" closePopUp={this.closePopUp}/>
                <View style={{backgroundColor:'rgb(255,234,236)'}}>
                  <View>
                    <TextBox placeHolder={"Customer Name"} textChanged={"dyr"}/>
                  </View>
                  <View style={{flexDirection:'row', marginBottom:10}}>
                    <TextBox placeHolder={"Customer Name"} textChanged={"dyr"}/>
                    <TouchableOpacity onPress={()=>{}}
                      style={{width:100,height:80}}>
                        <Image style={{width:"60%",height:"60%", marginTop:20}} resizeMode={'contain'} source={Images.mapImg}/>
                    </TouchableOpacity>
                  </View>
                    <Text style={{alignSelf:'center', fontSize:20, color:'red', fontFamily:'NunitoBoldItalic'}}>Make him/her a good time! </Text>
                    <View style={{
                            padding:10,flexDirection:'row',
                            backgroundColor:'rgb(76,167,165)',
                            alignItems:'center',
                            justifyContent:'center',borderRadius:0,
                            marginLeft:20,marginRight:20,marginTop:5,marginBottom:25}}>
                            <Text style={{marginLeft:10,color:'white',fontSize:20}}>OK</Text>
                        </View>


                </View>
              </View>
          </View>
        );
    }
}
