import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import Constant from '../../../../services/apiConstant';


export default class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={{ margin: 10 }}>
      <View style={{
        shadowColor: 'silver',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        paddingTop: 20,
        marginBottom: 30,
        backgroundColor: 'white',
        flex: 1,
      }}
      >
      <View style={{
        paddingTop: 15, paddingBottom: 45, paddingLeft: 15, paddingRight: 15,
      }}
      >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: 'red', fontSize: 20, fontFamily: 'NunitoBoldItalic' }}>{this.props.productName}</Text>
      <Text style={{ color: 'red', fontSize: 20, fontFamily: 'NunitoBoldItalic' }}>{this.props.price}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: 'silver', fontSize: 16, fontFamily: 'NunitoRegular' }}>Type: </Text>
      <Text style={{ color: 'gray', fontSize: 16, fontFamily: 'NunitoRegular' }}>{this.props.productType}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: 'silver', fontSize: 16, fontFamily: 'NunitoRegular' }}>Category: </Text>
      {
        this.props.productCategory.map((obj,index)=> {
          return <Text style={{ color: 'gray', fontSize: 16, fontFamily: 'NunitoRegular' }}>{obj}</Text>
        })
      }

      </View>
      <View style={{ flexDirection: 'row', paddingRight: 10 }}>
      <Text style={{ color: 'silver', fontSize: 16, fontFamily: 'NunitoRegular' }}>Discription: </Text>
      <Text style={{
        color: 'gray', fontSize: 16, fontFamily: 'NunitoRegular', paddingRight: 10,
      }}
      >
      {this.props.description}
      </Text>
      </View>
      </View>
      </View>

      <View style={{
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'flex-end',
        bottom: 0,
      }}
      >
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <TouchableHighlight onPress={() => this.props.onPressEditProduct()} style={{ flex: 1 }}>
      <View style={{
        paddingTop: 10,
        paddingLeft: 0,
        paddingBottom: 10,
        paddingRight: 0,
        margin: 10,
        borderRadius: 7,
        backgroundColor: 'rgb(68,176,166)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',

        shadowOpacity: 0.5,
        shadowRadius: 7,
      }}
      >
      <Text style={{ color: 'white', fontFamily: 'NunitoBoldItalic', fontSize: 17 }}>Edit Product Info</Text>
      </View>
      </TouchableHighlight>
      <View style={{
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        margin: 10,
        borderRadius: 7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowRadius: 5,
      }}
      >
      <Image
      style={{ height: 20, width: 20, alignSelf: 'center' }}
      resizeMode="contain"
      source={require('../../../../../assets/images/tag.png')}
      />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
