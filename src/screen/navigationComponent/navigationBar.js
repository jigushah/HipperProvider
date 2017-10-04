import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class navigationBar extends React.Component {
  onBackPress = () => {
    debugger;
    this.props.onBackPress();
  }
    render() {
        return (
            <View style={styles.viewStyle}>
              <View style={{flexDirection:'row',backgroundColor:'white',alignItems:'center'}}>
              {(this.props.isBackShow)?<TouchableHighlight underlayColor={'transparent'} onPress={()=>{this.onBackPress()}} style={{flex:1,width:20,height:20}}>
                <Image style={{flex:1,width:20,height:20}} resizeMode={'contain'} source={require('../../../assets/images/back.png')}/>
              </TouchableHighlight>
              :<View style={{flex:1,width:20,height:20}}></View>
            }

                <Image style={{flex:1,height:60,width:120}} resizeMode={'contain'} source={require('../../../assets/images/applogo.png')}/>
                <Text style={{flex:1}}></Text>
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
    viewStyle:{shadowColor:'gray',
        shadowOpacity:5,
        shadowRadius:5,
        zIndex:1}
});
