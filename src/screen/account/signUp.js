import React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput ,TouchableHighlight ,ScrollView,KeyboardAvoidingView} from 'react-native';
import NavigationBar from '../navigationComponent/navigationBar';
import Textbox from './component/textBox'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { signUpUser } from '../../actions/userAction'

class signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'jigush1594@gmail.com',
      password:'123456',
      providerName:'Provider',
      city:'Tel Aviv',
      country:'Israel',
      address:'asdasd 12',
      contactName:'My Name'
    }
  }
  navigateToPage = (page) => {
      this.props.navigator.push(page);
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
      <Image source={require("../../../assets/images/homeScreenBack.jpg")}/>
      </View>
      <View style={{backgroundColor:'transparent',flex:1}}>
      <NavigationBar/>
      <ScrollView>
      <View style={{margin:20}}>
      <Text style={{
        fontSize:18,color:'white',
        textAlign:'center',
        fontFamily:'NunitoBold'}}>
        Create an Account
        </Text>
        </View>
        <View>
        <View>
        <Textbox placeHolder={"Email"} textChanged={(text)=>{ this.setState({email:text}) }}/>
        <Textbox placeHolder={"Type a Password"} textChanged={(text) => { this.setState({password:text}) }}/>
        <Textbox placeHolder={"Type password again"} />
        <View style={{
          height:1,backgroundColor:'white',
          marginTop:5,marginBottom:5,
          marginLeft:20,marginRight:20}}/>
          <Textbox placeHolder={"Provider Name"} textChanged={(text) => { this.setState({providerName:text}) }}/>
          <Textbox placeHolder={"Country"} textChanged={(text) => { this.setState({country:text}) }}/>
          <Textbox placeHolder={"City"} textChanged={(text) => { this.setState({city:text}) }}/>
          <View style={{flexDirection:'row'}}>
          <View style={{flex:6}}>
          <Textbox placeHolder={"Address(GOOGLE Location)"} textChanged={(text) => { this.setState({address:text}) }}/>
          </View>
          <View style={{
            flex:2,paddingRight:20,
            paddingTop:5,paddingBottom:5,
            opacity:0.8}}>
            <View style={{flex:1,backgroundColor:'white',borderRadius:5,}}/>
            </View>
            </View>
            <Textbox placeHolder={"Provider Telephone"} />
            <View style={{
              height:1,backgroundColor:'white',
              marginTop:5,marginBottom:5,
              marginLeft:20,marginRight:20}}/>
              <Textbox placeHolder={"Contact Name"} textChanged={(text) => { this.setState({contactName:text}) }}/>
              <Textbox placeHolder={"Contact Phone(Optional)"}  />
              <Textbox placeHolder={"Secondary Email(Optional)"} />
              </View>
              </View>
              <TouchableHighlight style={{
                padding:10,flexDirection:'row',
                backgroundColor:'rgb(119,206,28)',
                alignItems:'center',
                justifyContent:'center',borderRadius:0,
                marginLeft:20,marginRight:20,marginTop:5,marginBottom:5}}
                onPress={() => {
                  let newUser = {
                    email:this.state.email,
                    password:this.state.password,
                    providerName:this.state.providerName,
                    city:this.state.city,
                    address:this.state.address,
                    contactName:this.state.contactName,
                    country:this.state.country
                  }
                  this.props.signUpUser(newUser)
                  .then(res => {
                    debugger;
                    this.navigateToPage('signUp');
                  })
                  .catch(err => {
                    debugger;
                  });
                }} underlayColor="transparent">
                <Text style={{marginLeft:10,color:'white',fontSize:20}}>Sign UP</Text>
                </TouchableHighlight>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>

                <View>
                <Text style={{fontSize:18,color:'white'}}>Sign In</Text>
                <View style={{height:1,backgroundColor:'white'}}/>
                </View>

                <TouchableHighlight onPress={() => {
                  alert("Need Help! press");
                }} underlayColor="transparent">
                <View>
                <Text style={{fontSize:18,color:'white'}}>Need Help?</Text>
                <View style={{height:1,backgroundColor:'white'}}/>
                </View>
                </TouchableHighlight>
                </View>
                </ScrollView>
                </View>
                </KeyboardAvoidingView>
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
              //userDetail:state.user.userDetail
            }
          };

          const mapActionToProps = ({
            signUpUser,
          });

          export default connect(mapStateToProps, mapActionToProps)(signUp);
