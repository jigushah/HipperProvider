import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import TextBox from '../../component/TextBox'
import PopUpHeader from '../../component/popUpHeader'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Constant from '../../../services/apiConstant';
import NavBar from '../../navigationComponent/navigationBar';
import ModalDropdown from 'react-native-modal-dropdown';
import CheckBox from 'react-native-checkbox';
import StartTimeDropdown from './StartTimeDropdown';
import EndTimeDropdown from './EndTimeDropdown';
import ListItem from './ListItem';

const Images = {
  mapImg: require('../../../../assets/images/map_BW.png'),
}

export default class OpeningHours extends React.Component {
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
                <PopUpHeader headerTitle="Opening Hours" closePopUp={this.closePopUp}/>
                <View style={{backgroundColor:'rgb(255,234,236)'}}>
                  <ListItem labelText={"Sunday"}/>
                  <ListItem labelText={"Monday"}/>
                  <ListItem labelText={"Tuesday"}/>
                  <ListItem labelText={"Wednesday"}/>
                  <ListItem labelText={"Thursday"}/>
                  <ListItem labelText={"Friday"}/>
                  <ListItem labelText={"Saturday"}/>
                  <View style={{
                          padding:10,flexDirection:'row',
                          backgroundColor:'rgb(76,167,165)',
                          alignItems:'center',
                          justifyContent:'center',borderRadius:0,
                          marginLeft:20,marginRight:20,marginTop:5,marginBottom:25}}>
                          <Text style={{marginLeft:10,color:'white',fontSize:20}}>Save</Text>
                  </View>
                </View>

              </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({

    paymentOptionImage: {
      marginBottom: 10,
      width:40,
      height:30
    },
    closeButton:{
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    headersOnCardContainer:{
      flexDirection:'column',
      justifyContent:'space-between',
      marginLeft:20,
      marginTop:10,
      marginBottom:10,
    },
    textStyle:{
      fontFamily: 'NunitoRegular',
      fontSize: 16,
      color:'rgb(128,128,128)',
      marginBottom:5,
    }
});
