import React from 'react';
import { StyleSheet, Text, View,Image ,TouchableHighlight} from 'react-native';
import NavigationBar from '../navigationComponent/navigationBar'
import HomeCom from './component/homeScreenComponent'

export default class homeScreen extends React.Component {
    constructor(props){
        super(props);
    }
    navigateToPage = (page) => {
        this.props.navigator.push('login');
    };
    componentPress = (text) => {
        alert(text);
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
                    <Image source={require("../../../assets/images/homeScreenBack.jpg")}/>
                </View>
                <View style={{backgroundColor:'transparent',flex:1}}>
                    <NavigationBar/>
                    <View style={{padding:20,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,color:'white',fontFamily:'NunitoBoldItalic',textAlign:'center'}}>Let us take you {'\n'}somewhere new</Text>
                    </View>
                    <View style={{flex:1,marginLeft:40,marginRight:40,}}>
                        <HomeCom text={"Find an "+'\n' +"Experience"}
                                 backColor="" width={0}
                                 imageLogo={"require('../../../assets/images/magnifier.png')"}
                                 componentPress={this.componentPress}
                                 opacity={1}/>
                        <HomeCom text={"Join a "+'\n'+"friend"}
                                 backColor="" width={5}
                                 imageLogo=""
                                 componentPress={this.componentPress}
                                 opacity={0.8}/>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableHighlight onPress={() => {
                                //alert("Sign In press");
                                this.navigateToPage('login')
                            }} underlayColor="transparent" style={{}}>
                                <View>
                                    <Text style={{fontSize:18,color:'white'}}>Sign In</Text>
                                    <View style={{height:1,backgroundColor:'white'}}/>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                alert("Need Help! press");
                            }} underlayColor="transparent">
                                <View>
                                    <Text style={{fontSize:18,color:'white'}}>Need Help?</Text>
                                    <View style={{height:1,backgroundColor:'white'}}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>

                </View>
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
