import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,KeyboardAvoidingView } from 'react-native';
import NavigationBar from '../navigationComponent/navigationBar';
import Textbox from './component/textBox'
import { connect } from 'react-redux';
import {validateEmail} from '../../services/helper'
import { loginUser } from '../../actions/userAction'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';

class login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'jigushah159@gmail.com',
      pass:'123456'
    }
  }
    navigateToPage = (page) => {
        this.props.navigator.push(page);
    };
    onBackPress = () => {
      this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
                    <Image source={require("../../../assets/images/homeScreenBack.jpg")}/>
                </View>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{backgroundColor:'transparent',flex:1}}>
                    <NavigationBar isBackShow={false} onBackPress={this.onBackPress}/>
                    <View style={{margin:20}}>
                        <Text style={{
                            fontSize:24,color:'white',
                            textAlign:'center',
                            fontFamily:'NunitoRegular'}}>
                            Lets Sign In
                        </Text>
                    </View>

                    <View>
                        <View>
                            <Textbox image={require('../../../assets/images/email.png')} value = {this.state.email} placeHolder={"Email"}
                            textChanged={(text)=> {
                              this.setState({email:text})
                            }}/>
                            <Textbox image={require('../../../assets/images/pass.png')} value = {this.state.pass} placeHolder={"Type a Password"}
                            textChanged={(text)=> {
                              this.setState({pass:text})
                            }}
                            />
                        </View>
                    </View>
                    <TouchableHighlight underlayColor={'transparent'} onPress={()=>{
                      let user = {
                        email:this.state.email,
                        password:this.state.pass
                      }
                      if(this.state.email && this.state.pass){
                      if(validateEmail(this.state.email)){
                      this.props.loginUser(user).then(res => {

                        this.navigateToPage('EditProfile')
                      }).catch(err=> {
                        alert("sfs");
                      });
                    }
                    else {
                      alert("Enter valid email.");
                    }
                  }else{
                    alert("Email and password is required.");
                  }

                    }} style={{
                        padding:10,flexDirection:'row',
                        backgroundColor:'rgb(119,206,28)',
                        alignItems:'center',
                        justifyContent:'center',borderRadius:0,
                        marginLeft:20,marginRight:20,marginTop:5,marginBottom:5}}>
                        <Text style={{marginLeft:10,color:'white',fontSize:20}}>HIPPER ME!</Text>
                    </TouchableHighlight>
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
                                <Text style={{fontSize:18,color:'white'}}>Need Help!</Text>
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
const mapStateToProps = (state) => {
    return{
      userDetail:state.user.userDetail
    }
};

const mapActionToProps = ({
    loginUser,
});

export default connect(mapStateToProps, mapActionToProps)(login);
