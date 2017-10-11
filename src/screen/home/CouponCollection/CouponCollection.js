import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import TextBox from '../../component/TextBox'
import PopUpHeader from '../../component/popUpHeader'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Constant from '../../../services/apiConstant';
import NavBar from '../../navigationComponent/navigationBar';
import Scanner from './component/barcodeScanner';

const Images = {
  mapImg: require('../../../../assets/images/map_BW.png'),
}

export default class CouponCollection extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showBarcode:true
    }
  }
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
              </View>
              <NavBar isBackShow={true} onBackPress={this.onBackPress}/>
              <View style={{marginTop:30,marginLeft:15,marginRight:15,paddingBottom:10,borderRadius:5}}>
                <PopUpHeader headerTitle="Coupon Collection" closePopUp={this.closePopUp}/>
                <View style={{backgroundColor:'rgb(255,234,236)'}}>
                  <View>
                    <TextBox hasIcon={false} placeHolder={"Coupon Code (5 number digit)"} textChanged={"dyr"}/>


                  </View>
                  <Text style={{alignSelf:'center', fontSize:20, color:'red', fontFamily:'NunitoBoldItalic'}}> {"- Or -"} </Text>
                  <TouchableHighlight underlayColor={"transparent"} onPress={()=>{this.props.navigator.push('Scanner')}} style={{
                          padding:8,flexDirection:'row',
                          backgroundColor:'white',borderWidth:2,borderColor:'red',
                          alignItems:'center',
                          justifyContent:'center',borderRadius:5,
                          marginLeft:30,marginRight:30,marginTop:5,marginBottom:5}}>
                          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

                          <Image style={{height:30,width:30}} resizeMode='contain' source={Images.mapImg}/>
                          <Text style={{marginLeft:10,color:'gray',fontSize:20}}>Scan QR Code</Text>
                          </View>
                      </TouchableHighlight>

                    <TouchableHighlight underlayColor={"transparent"} onPress={()=>{this.props.navigator.push("CouponCollected")}} style={{
                            padding:10,flexDirection:'row',
                            backgroundColor:'rgb(76,167,165)',
                            alignItems:'center',
                            justifyContent:'center',borderRadius:5,
                            marginLeft:30,marginRight:30,marginTop:5,marginBottom:25}}>
                            <Text style={{marginLeft:10,color:'white',fontSize:20}}>Collect Coupon</Text>
                        </TouchableHighlight>


                </View>
              </View>

          </View>
        );
    }
}
