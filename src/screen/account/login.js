import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView } from 'react-native';
import NavigationBar from '../navigationComponent/navigationBar';
import Textbox from './component/textBox'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';

export default class login extends React.Component {
    navigateToPage = (page) => {
        this.props.navigator.push(page);
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
                    <Image source={require("../../../assets/images/homeScreenBack.jpg")}/>
                </View>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{backgroundColor:'transparent',flex:1}}>
                    <NavigationBar/>
                    <View style={{margin:20}}>
                        <Text style={{
                            fontSize:18,color:'white',
                            textAlign:'center',
                            fontFamily:'NunitoBold'}}>
                            Already a HIPPER?
                        </Text>
                    </View>
                    <View style={{
                        padding:10,flexDirection:'row',
                        backgroundColor:'rgb(45,67,133)',
                        alignItems:'center',borderRadius:5,
                        marginLeft:20,marginRight:20,marginTop:5,marginBottom:5}}>
                        <Image resizeMode={'contain'} style={{height:30,width:30}} source={require('../../../assets/images/fb.png')}/>
                        <Text style={{marginLeft:10,color:'white',fontSize:20}}>Sign In with FACEBOOK</Text>
                    </View>
                    <View style={{
                        padding:10,flexDirection:'row',
                        backgroundColor:'rgb(61,120,249)',
                        alignItems:'center', borderRadius:5,
                        marginLeft:20,marginRight:20,marginTop:5,marginBottom:5}}>
                        <Image resizeMode={'contain'} style={{height:30,width:30}} source={require('../../../assets/images/gmail.png')}/>
                        <Text style={{marginLeft:10,color:'white',fontSize:20}}>Sign In with GOOGLE</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:10}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <View style={{
                                justifyContent:'center',
                                height:2,borderRadius:10,
                                backgroundColor:'rgb(178,134,134)'}}/>
                        </View>
                        <View style={{justifyContent:'center',margin:10}}>
                            <Text style={{
                                fontSize:18,color:'rgb(178,134,134)',
                                textAlign:'center',
                                fontFamily:'NunitoBold'}}>OR</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <View style={{
                                justifyContent:'center',
                                height:2,borderRadius:10,
                                backgroundColor:'rgb(178,134,134)'}}/>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Textbox image={require('../../../assets/images/email.png')} placeHolder={"Email"} textChanged={"dyr"}/>
                            <Textbox image={require('../../../assets/images/pass.png')} placeHolder={"Type a Password"}/>
                        </View>
                    </View>
                    <View style={{
                        padding:10,flexDirection:'row',
                        backgroundColor:'rgb(119,206,28)',
                        alignItems:'center',
                        justifyContent:'center',borderRadius:0,
                        marginLeft:20,marginRight:20,marginTop:5,marginBottom:5}}>
                        <Text style={{marginLeft:10,color:'white',fontSize:20}}>HIPPER ME!</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
                        <TouchableHighlight onPress={() => {
                            //alert("Sign In press");
                            this.navigateToPage('signUp')
                        }} underlayColor="transparent" style={{}}>
                            <View>
                                <Text style={{fontSize:18,color:'white'}}>Create an Account</Text>
                                <View style={{height:1,backgroundColor:'white'}}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            alert("Need Help! press");
                        }} underlayColor="transparent">
                            <View>
                                <Text style={{fontSize:18,color:'white'}}>Any Question?</Text>
                                <View style={{height:1,backgroundColor:'white'}}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
