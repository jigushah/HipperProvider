import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight } from 'react-native';

const minusImg = require('../../../assets/images/cross_BW.png');


export default class PopUpHeader extends React.Component {
  render() {
    return (
      <View style={styles.listBackground}>
        <View style={{ paddingLeft: 5, paddingRight: 10 }}>
          <Text style={styles.listItemText}>{this.props.headerTitle}</Text>
        </View>
        <TouchableHighlight onPress={() => { this.props.closePopUp(); }}>
          <View style={styles.listItem}>
            <Image
              style={{ height: 25, width: 25, margin: 2 }}
              resizeMode="contain"
              source={minusImg}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    zIndex: 1,
    // overflow: 'hidden',

  },
  listItemText: {
    color: 'rgb(68,176,165)', fontSize: 20, fontFamily: 'NunitoBoldItalic',
  },
  listBackground: {
    shadowColor: 'gray',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: { height: 0, width: 0 },
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    opacity: 1,
    padding: 10,
  },
});
