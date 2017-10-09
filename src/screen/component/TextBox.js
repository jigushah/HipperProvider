import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class TextBox extends React.Component {
  render() {
    return (
      <View style={{
marginLeft: 30,
marginRight: 30,
marginTop: 20,
marginBottom: 5,
paddingLeft: 5,
              backgroundColor: 'white',
flexDirection: 'row',
opacity: 1,
borderRadius: 5,
}}
      >
        {(this.props.hasIcon) ?
          <Image
            resizeMode="contain"
            style={{
 height: 50, width: 50, alignSelf: 'center', marginLeft: 10, marginRight: 10,
}}
            source={this.props.image}
          /> : <View />
                     }
        <View>
          <TextInput
            placeholder={this.props.placeHolder}
            underlineColorAndroid="transparent"
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
