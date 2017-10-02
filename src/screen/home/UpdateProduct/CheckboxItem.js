import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-checkbox';


export default class CheckboxItem extends React.Component {
    render() {
        return (
          <CheckBox label={this.props.labelText}
            checkboxStyle={{height:50,width:50}}
            checkedImage={require('../../../../assets/images/right.png')}
            uncheckedImage={require('../../../../assets/images/cross_validate.png')}
            onChange={(checked) => alert('I am', this.checked)} />
        );
    }
}
