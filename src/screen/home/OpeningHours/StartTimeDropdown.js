import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const Images = {
  mapImg: require('../../../../assets/images/map_BW.png'),
};

export default class StartTimeDropdown extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ModalDropdown
          style={styles.dropDownNormalStyle}
          defaultIndex={0}
          defaultValue="1:00"
          dropdownStyle={styles.modalDropdownSpecial}
          textStyle={styles.modalDropdownText}
          options={['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dropDownNormalStyle: {
    height: 40,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  modalDropdownSpecial: {
    width: 50,
    marginTop: 15,
    marginLeft: 5,
    borderRadius: 3,
  },
  modalDropdownText: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 12,
  },
});
