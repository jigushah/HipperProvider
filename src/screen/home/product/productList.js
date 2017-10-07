import React from 'react';
import { StyleSheet, Text, View, TextInput ,Image ,ScrollView} from 'react-native';
import ProductComponent from './component/productComponent';
import NavBar from '../../navigationComponent/navigationBar';
import { connect } from 'react-redux';
import {getProduct} from '../../../actions/productAction';

class ProductList extends React.Component {
  componentWillMount(){
    this.props.getProduct();
  }
  //this.props.navigation.push("bookExperience");

  render() {
      return (
            <View style={{flex:1}}>
                <NavBar/>
                <View style={{
                    padding:15,
                    backgroundColor:'rgb(240,240,240)',
                    justifyContent:'center'}}>
                    <Text style={{textAlign:'center',
                        fontFamily:'NunitoBoldItalic',
                        fontSize:18,
                        color:'rgb(121,121,121)'}}>
                        Products
                    </Text>
                </View>
                <ScrollView style={{flex:1,paddingLeft:10,paddingRight:10}}>
                <View style={{paddingTop:12,
                    paddingLeft:40,
                    paddingBottom:12,
                    paddingRight:40,
                    margin:15,
                    backgroundColor:'rgb(68,176,166)',
                    justifyContent:'center',
                    alignItems:'center',
                    }}
                >
                    <Text style={{color:'white',fontFamily:'NunitoBoldItalic',fontSize:17}}>Add New Product</Text>
                </View>
                <ProductComponent/>
                <ProductComponent/>
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
const mapStateToProps = (state) => ({
  product: state.product,
});


const mapActionToProps = ({
  getProduct
});

export default connect(mapStateToProps, mapActionToProps)(ProductList);
