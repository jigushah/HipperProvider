import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView,TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import { getProduct } from '../../../actions/productAction';



class couponList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      couponData : [
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
        {dateTime : "12/07/2017 4:00",no : 3,price:"5$"},
      ],

    }
  }

  componentWillMount() {

  }
  // this.props.navigation.push("bookExperience");
onBackPress = () => {
  this.props.navigator.pop();
}
  render() {
    return (
      <View style={{ flex: 1 }}>
      <NavBar isBackShow={true} onBackPress={this.onBackPress}/>
      <View style={{
        padding: 15,
        backgroundColor: 'rgb(240,240,240)',
        justifyContent: 'center',
      }}>
      <Text style={{
        textAlign: 'center',
        fontFamily: 'NunitoBoldItalic',
        fontSize: 18,
        color: 'rgb(121,121,121)',
      }}
      >
      Collected Coupons
      </Text>
      </View>
      <ScrollView style={{ flex: 1, padding:20 }}>
      <View style={{flexDirection:'row',backgroundColor:'rgba(0,0,0,0.1)',padding:10}}>
      <View style={{flex:2}}><Text style={{fontFamily: 'NunitoBold',color:'gray',fontSize:17}}>{"Date & Time"}</Text></View>
      <View style={{flex:1}}><Text style={{fontFamily: 'NunitoBold',color:'gray',fontSize:17}}>Coupon</Text></View>
      <View style={{flex:1}}><Text style={{fontFamily: 'NunitoBold',color:'gray',fontSize:17}}>Value</Text></View>
      </View>
        {
          this.state.couponData.map((obj)=> {
            return <View style={{flexDirection:'row',backgroundColor:'white',padding:10}}>
            <View style={{flex:2}}><Text style={{fontFamily: 'NunitoBold',color:'gray',fontSize:17}}>
            {obj.dateTime}</Text></View>
            <View style={{flex:1}}><Text style={{fontFamily: 'NunitoBold',color:'gray',fontSize:17}}>{obj.no}</Text></View>
            <View style={{flex:1}}><Text style={{fontFamily: 'NunitoBold',color:'gray',fontSize:17}}>{obj.price}</Text></View>
            </View>
          })
        }
      </ScrollView>
      <View style={{position:'absolute',bottom:0,left:0,right:0}}>
      <View style={{flexDirection:'row',backgroundColor: 'rgb(68,176,166)',padding:10,alignSelf:'center'}}>
      <View style={{flex:2}}><Text style={{fontFamily: 'NunitoBold',color:'white',fontSize:17}}>Summary</Text></View>
      <View style={{flex:1}}><Text style={{fontFamily: 'NunitoBold',color:'white',fontSize:17}}>154</Text></View>
      <View style={{flex:1}}><Text style={{fontFamily: 'NunitoBold',color:'white',fontSize:17}}>{"125$"}</Text></View>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240,240,240)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateToProps = state => ({

});


const mapActionToProps = ({

});

export default connect(mapStateToProps, mapActionToProps)(couponList);
