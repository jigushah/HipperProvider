import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class navigationBar extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
              <View style={{flexDirection:'row',backgroundColor:'white',alignItems:'center'}}>
                <View style={{flex:1,width:20,height:20}}>
                  <Image style={{flex:1,width:20,height:20}} resizeMode={'contain'} source={require('../../../assets/images/back.png')}/>
                </View>
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
