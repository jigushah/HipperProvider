import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView,TouchableHighlight } from 'react-native';
import ProductComponent from './component/productComponent';
import NavBar from '../../navigationComponent/navigationBar';
import { getProduct } from '../../../actions/productAction';

class ProductList extends React.Component {
  componentWillMount() {
    this.props.getProduct().then(res => {
      debugger;
    }).catch(err => {
      debugger;
    })
  }
  // this.props.navigation.push("bookExperience");
onBackPress = () => {
  this.props.navigator.pop();
}
onPressEditProduct = (obj) => {
  this.props.navigator.push('editProduct',{product:obj})
}
  render() {
    return (
      <View style={{ flex: 1 }}>
      <NavBar isBackShow={true} onBackPress={this.onBackPress}/>
      <View style={{
        padding: 15,
        backgroundColor: 'rgb(240,240,240)',
        justifyContent: 'center',
      }}
      >
      <Text style={{
        textAlign: 'center',
        fontFamily: 'NunitoBoldItalic',
        fontSize: 18,
        color: 'rgb(121,121,121)',
      }}
      >
      Products
      </Text>
      </View>
      <ScrollView style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
      <TouchableHighlight style={{
        paddingTop: 12,
        paddingLeft: 40,
        paddingBottom: 12,
        paddingRight: 40,
        margin: 15,
        backgroundColor: 'rgb(68,176,166)',
        justifyContent: 'center',
        alignItems: 'center',
      }} underlayColor="transparent" onPress={()=>{this.props.navigator.push("addProduct")}}
      >
      <Text style={{ color: 'white', fontFamily: 'NunitoBoldItalic', fontSize: 17 }}>Add New Product</Text>
      </TouchableHighlight>
      {
        this.props.productList.map((obj,index)=> {
          return <ProductComponent key={index}
          productName={obj.productName}
          productType={obj.productType}
          description={obj.description}
          price={obj.price}
          productCategory={obj.productCategory}
          productObj={obj}
          onPressEditProduct={this.onPressEditProduct}/>
        })
      }
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
  productList: state.product.productList,
});


const mapActionToProps = ({
  getProduct,
});

export default connect(mapStateToProps, mapActionToProps)(ProductList);
