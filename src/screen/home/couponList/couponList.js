import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView,TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import { getProduct } from '../../../actions/productAction';



class couponList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      radioData : [
        {name : "Food",flag : true},
        {name : "Drink",flag : false},
        {name : "Desert",flag : false}
      ],
      categoryData : [
        {name : "Eat",flag : true},
        {name : "Drink",flag : true},
        {name : "Love",flag : true},
      ]
    }
  }

  componentWillMount() {

  }
  // this.props.navigation.push("bookExperience");

  render() {
    return (
      <View style={{ flex: 1 }}>
      <NavBar />
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
      <View style={{flexDirection:'row',backgroundColor:'gray'}}>
      <View style={{flex:2}}><Text>{"Date & Time"}</Text></View>
      <View style={{flex:1}}><Text>Coupon</Text></View>
      <View style={{flex:1}}><Text>Value</Text></View>

      </View>

      </ScrollView>
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
