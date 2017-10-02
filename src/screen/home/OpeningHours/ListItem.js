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


export default class ListItem extends React.Component {
  closePopUp = () => {
    alert("close cliked!")
  }
    render() {
        return (
          <View style={{  flexDirection: 'row', justifyContent:'space-between', width:330}}>
            <View style={styles.cardContainer}>
              <CheckBox label={this.props.day}
                checkboxStyle={{height:50,width:50}}
                checkedImage={require('../../../../assets/images/right.png')}
                uncheckedImage={require('../../../../assets/images/cross_validate.png')}
                onChange={(checked) => alert('I am', this.checked)} />
            </View>
            <View style={styles.timeDropdown}>
              <View style={{  flexDirection: 'row', justifyContent:'space-between', width:130, marginLeft:5}}>
                <View style={{  flexDirection: 'row', backgroundColor:'white', width:60}}>
                  <StartTimeDropdown/>
                  <Text style={{  marginTop: 12}}> &#8744; </Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor:'white', width:60}}>
                  <EndTimeDropdown/>
                    <Text style={{  marginTop: 12}}> &#8744; </Text>
                </View>
              </View>
            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({

    cardContainer:{
      marginLeft:20,
      marginTop:5,
      marginBottom:5
    },
    timeDropdown:{
      flexDirection:'column',
      justifyContent:'space-between',
      marginRight:20,
      marginTop:15,
      marginBottom:10
    }
});
