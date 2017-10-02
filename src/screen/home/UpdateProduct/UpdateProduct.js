import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import TextBox from '../../component/TextBox'
import PopUpHeader from '../../component/popUpHeader'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Constant from '../../../services/apiConstant';
import NavBar from '../../navigationComponent/navigationBar';
import CheckBox from 'react-native-checkbox';
import CheckboxItem from './CheckboxItem';
import ModalDropdown from 'react-native-modal-dropdown';

export default class UpdateProduct extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>
            <View style={{backgroundColor:'white', position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
            </View>
            <NavBar/>
            <View style={{padding:15, backgroundColor:'rgb(240,240,240)', justifyContent:'center'}}>
              <Text style={{textAlign:'center', fontFamily:'NunitoBoldItalic', fontSize:18, color:'rgb(121,121,121)'}}>
                Update Product
              </Text>
            </View>
            <View style={{marginLeft:20, marginTop:20}}>
              <Text style={{fontFamily:'NunitoBold', fontSize:20, color:'gray'}}>Product Name</Text>
              <TextInput style = {styles.input} />
            </View>
            <View style={{marginLeft:20, marginTop:20}}>
              <Text style={{fontFamily:'NunitoBold', fontSize:20, color:'gray'}}>Product Type</Text>
              <CheckboxItem labelText={"Main"} />
              <CheckboxItem labelText={"Drink"} />
              <CheckboxItem labelText={"Desert"} />
            </View>
            <View style={{marginLeft:20, marginTop:20}}>
              <Text style={{fontFamily:'NunitoBold', fontSize:20, color:'gray'}}>Product Category</Text>
              <CheckboxItem labelText={"Eat"} />
              <CheckboxItem labelText={"Drink"} />
              <CheckboxItem labelText={"Love"} />
            </View>
            <View style={{marginLeft:20, marginTop:20}}>
              <Text style={{fontFamily:'NunitoBold', fontSize:20, color:'gray'}}>Asking Price</Text>
              <TextInput style = {styles.input} />
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({

   input: {
      marginTop:5,
      marginRight:20,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
   }
})
