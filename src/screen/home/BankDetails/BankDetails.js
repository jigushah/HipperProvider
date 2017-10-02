import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import Constant from '../../../services/apiConstant';
import PopUpHeader from '../../component/popUpHeader'

export default class BankDetails extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
          <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
            <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}  source={require("../../../../assets/images/Asset_25xxxhdpi.png")}/>
          </View>
          <NavBar/>
          <View style={{marginTop:30,marginLeft:15,marginRight:15,borderRadius:5}}>
            <PopUpHeader headerTitle="Bank Details" closePopUp={this.closePopUp}/>
            <View style={{backgroundColor:'rgb(255,234,236)'}}>
              <Text style={{marginLeft:25, paddingTop:20, color:'gray', fontSize:15}}>
                Beneficiary Name
              </Text>
                <TextInput multiline style = {styles.input}/>
              <Text style={{marginLeft:25, color:'gray', fontSize:15}}>
                Beneficiary Address
              </Text>
                <TextInput multiline style = {styles.input}/>
              <Text style={{marginLeft:25, color:'gray', fontSize:15}}>
                Bank Name
              </Text>
                <TextInput multiline style = {styles.input}/>
              <Text style={{marginLeft:25, color:'gray', fontSize:15}}>
                Branch Number
              </Text>
                <TextInput multiline style = {styles.input}/>
              <Text style={{marginLeft:25, color:'gray', fontSize:15}}>
                Account Number
              </Text>
                <TextInput multiline style = {styles.input}/>
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

   input: {
      marginLeft: 25,
      marginTop:10,
      marginBottom:10,
      marginRight:25,
      fontSize:20,
      height: 40,
      backgroundColor:'white',
   }
})
