import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class textBox extends React.Component {
  render() {
    return (
      <View style={{
marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5, backgroundColor: 'white', flexDirection: 'row', opacity: 0.8, borderRadius: 5,
}}
      >
        <Image
          resizeMode="contain"
          style={{
height: 30, width: 30, alignSelf: 'center', marginLeft: 10, marginRight: 10,
}}
          source={this.props.image}
        />
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder={this.props.placeHolder}
            underlineColorAndroid="transparent"
            value = {(this.props.value)?this.props.value:''}
            onChangeText={(text) => {
                                 this.props.textChanged(text);
                               }}
            style={{ height: 50, color: 'gray', fontFamily: 'NunitoBold' }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
