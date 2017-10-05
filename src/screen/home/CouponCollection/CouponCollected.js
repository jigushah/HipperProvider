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

export default class CouponCollected extends React.Component {
  closePopUp = () => {
    alert("close cliked!")
  }
  onBackPress = () => {
    this.props.navigator.pop();
  }
    render() {
        return (
          <View style={{flex:1}}>
              <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
                <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}  source={require("../../../../assets/images/Asset_25xxxhdpi.png")}/>
              </View>
              <NavBar isBackShow={true} onBackPress={this.onBackPress}/>
              <View style={{marginTop:30,marginLeft:15,marginRight:15,paddingBottom:10,borderRadius:5}}>
                <PopUpHeader headerTitle="Coupon was collected" closePopUp={this.closePopUp}/>
                <View style={{backgroundColor:'rgb(255,234,236)'}}>
                  <View>
                    <TextBox hasIcon={false} placeHolder={"Customer Name"} textChanged={"dyr"}/>

                  <View style={{flexDirection:'row', marginRight:30,alignSelf:'center'}}>
                  <View style={{flex:1}}>
                    <TextBox placeHolder={"From"} textChanged={"dyr"}/>
                    </View>
                    <TouchableOpacity onPress={()=>{}}
                      style={{width:50,height:50,marginTop:10,borderRadius:5,
                        justifyContent:'center',alignSelf:"center",
                        alignItems:'center',
                        backgroundColor:'white'}}>
                        <Image style={{width:"60%",height:"60%",alignSelf:'center'}}
                        resizeMode={'contain'} source={Images.mapImg}/>
                    </TouchableOpacity>
                    </View>
                  </View>
                    <Text style={{alignSelf:'center', fontSize:20, color:'red', fontFamily:'NunitoBoldItalic'}}>Make him/her a good time! </Text>
                    <TouchableHighlight underlayColor={"transparent"} onPress={()=>{this.props.navigator.pop()}} style={{
                            padding:10,flexDirection:'row',
                            backgroundColor:'rgb(76,167,165)',
                            alignItems:'center',
                            justifyContent:'center',borderRadius:5,
                            marginLeft:20,marginRight:20,marginTop:5,marginBottom:25}}>
                            <Text style={{marginLeft:10,color:'white',fontSize:20}}>OK</Text>
                        </TouchableHighlight>


                </View>
              </View>
          </View>
        );
    }
}
