import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import Constant from '../../../../services/apiConstant';


export default class radioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (

        <TouchableHighlight underlayColor={'transparent'} onPress={()=>{
          debugger;
          this.props.onItemClicked(this.props.name)
          }}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{height:30,width:30}}>
          <Image
          style={{ height: 30, width: 30, alignSelf: 'center' }}
          resizeMode="contain"
          source={(this.props.flag)?require('../../../../../assets/images/right.png'):require('../../../../../assets/images/cross_validate.png')}
          />
          </View>
          <Text>{this.props.name}</Text>
          </View>
          </TouchableHighlight>


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
