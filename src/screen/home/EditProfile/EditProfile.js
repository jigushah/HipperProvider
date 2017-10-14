import React from 'react';
import { StyleSheet, Text, View, ScrollView,
    TextInput ,Image ,TouchableHighlight, TouchableOpacity} from 'react-native';
import Constant from '../../../services/apiConstant';
import NavigationBar from '../../navigationComponent/navigationBar';
import HomeCom from './homeScreenComponent'


export default class EditProfile extends React.Component {
  constructor(props){
        super(props);
    }
    componentPress = (text) => {
      if(text){
        this.props.navigator.push(text);
      }
    };
    onBackPress = () => {
      this.props.navigator.pop();
    }
      render() {
        return (
          <View style={{flex:1}}>
            <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,opacity:0.5}}>
              <Image resizeMode="contain" style={{height:Constant.screenHeight,width:Constant.screenWidth}}  source={require("../../../../assets/images/Asset_25xxxhdpi.png")}/>
            </View>
            <NavigationBar isBackShow={false} onBackPress={this.onBackPress}/>
            <View style={{
                padding:15,
                backgroundColor:'rgb(240,240,240)',
                justifyContent:'center'}}>
              <Text style={{textAlign:'center',
                fontFamily:'NunitoBoldItalic',
                fontSize:18,
                color:'rgb(121,121,121)'}}>
                Hello Jon Doe
              </Text>
            </View>
            <View style={{flex:1,marginLeft:40,marginRight:40,}}>
                        <HomeCom text={"Collect"+'\n' +"Coupon"}
                                 backColor="" width={0}
                                 imageLogo={"require('../../../assets/images/magnifier.png')"}
                                 componentPress={this.componentPress}
                                 pageName={'CouponCollection'}
                                 opacity={1}/>
                        <HomeCom text={"Add / Edit Product"}
                                 backColor="" width={5}
                                 imageLogo=""
                                 pageName={'productList'}
                                 componentPress={this.componentPress}
                                 opacity={0.6}/>
                        <HomeCom text={"Edit Restaurant Info"}
                                  backColor="" width={5}
                                  imageLogo=""
                                  pageName={'businessInfo'}
                                  componentPress={this.componentPress}
                                  opacity={0.6}/>
                        <HomeCom text={"Edit Opening Hours"}
                                  backColor="" width={5}
                                  imageLogo=""
                                  pageName={"OpeningHours"}
                                  componentPress={this.componentPress}
                                  opacity={0.6}/>
                        <HomeCom text={"Edit Payment Method"}
                                  backColor="" width={5}
                                  imageLogo=""
                                  pageName={'bankDetail'}
                                  componentPress={this.componentPress}
                                  opacity={0.6}/>
                        <HomeCom text={"Collected Coupons"}
                                  backColor="" width={5}
                                  imageLogo=""
                                  pageName={'couponList'}
                                  componentPress={this.componentPress}
                                  opacity={0.6}/>
            </View>
          </View>
        );
    }
}
