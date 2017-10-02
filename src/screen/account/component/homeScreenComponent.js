import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class homeScreenComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentPress = () => {
this.props.componentPress(this.props.text);
    };
    render() {
        return (
            <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {this.componentPress()}}>
                <View style={{flexDirection:'row',
                    borderWidth:this.props.width,
                    borderColor:'white',marginTop:10,
                    marginBottom:10,backgroundColor:'rgb(0,182,173)',
                    padding:10,opacity:this.props.opacity}}>
                <View style={{flex:1}}>
                    <Text style={{color:'white',fontFamily:'NunitoBoldItalic',fontSize:18}}>{this.props.text}</Text>
                </View>
                <View style={{flex:1,backgroundColor:'red'}}>
                    <View style={{flex:1}}>
                        <Image resizeMode="contain" source={require('../../../../assets/images/magnifier.png')}/>
                    </View>
                </View>
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
