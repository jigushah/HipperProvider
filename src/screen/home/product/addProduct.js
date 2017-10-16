import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView,TextInput ,Image ,TouchableHighlight} from 'react-native';
import NavBar from '../../navigationComponent/navigationBar';
import { getProduct } from '../../../actions/productAction';
import RadioComponent from './component/radioComponent';
import { ImagePicker,Camera, Permissions } from 'expo';


class AddProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image:"",
      productName:"",
      radioData : [
        {name : "Food",flag : true},
        {name : "Drink",flag : false},
        {name : "Desert",flag : false}
      ],
      categoryData : [
        {name : "Eat",flag : true},
        {name : "Drink",flag : true},
        {name : "Love",flag : true},
      ],
      price:'',
      productType:'',
      desc:''
    }
  }
  onItemClicked = (name) => {
    debugger;
    let temp = this.state.radioData;
    temp.map(obj => {
      if(obj.name == name){
        obj.flag = true;
      }
      else {
        obj.flag = false;
      }
    });
    this.setState({
      radioData:temp
    })
  }
  onPressSaveProduct = () => {

  }
  onItemCheckClicked = (name) => {
    let temp = this.state.categoryData;
    temp.map(obj => {
      if(obj.name == name)
      {
        obj.flag = !obj.flag
      }
    })
    this.setState({
      categoryData:temp
    })
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onGalleryOpen = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    alert("result");
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  onCameraOpen = async() => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    alert("result");
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
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
      Add New Product
      </Text>
      </View>
      <ScrollView style={{ flex: 1, padding:20 }}>
      <View style={{paddingBottom:50}}>
      <View style={{paddingBottom:20}}>
      <Text style={{ color: 'gray', fontSize: 17, fontFamily: 'NunitoBold',paddingBottom:10 }}>Product Name</Text>
      <TextInput
      placeholder={"Product Name"}
      underlineColorAndroid="transparent"
      onChangeText={(text) => {
        this.setState({productName:text})
      }}
      style={{ color: 'gray',fontSize: 17, fontFamily: 'NunitoRegular',borderColor:'gray',borderRadius:5,borderWidth:1,padding:5 }}
      />
      </View>
      <View style={{paddingBottom:20}}>
      <Text style={{ color: 'gray', fontSize: 17, fontFamily: 'NunitoBold',paddingBottom:10 }}>Product Type</Text>
      {
        this.state.radioData.map((obj,index) => {
          return <RadioComponent key={index} flag={obj.flag} name={obj.name} onItemClicked={this.onItemClicked}/>
        })
      }
      </View>
      <View style={{paddingBottom:20}}>
      <Text style={{ color: 'gray', fontSize: 17, fontFamily: 'NunitoBold',paddingBottom:10 }}>Product Category</Text>
      {
        this.state.categoryData.map((obj,index) => {
          return <RadioComponent key={index} flag={obj.flag} name={obj.name} onItemClicked={this.onItemCheckClicked}/>
        })
      }
      </View>
      <View style={{paddingBottom:20}}>
      <Text style={{ color: 'gray', fontSize: 17, fontFamily: 'NunitoBold',paddingBottom:10 }}>Asking Price</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <TextInput
      placeholder={"00"}
      underlineColorAndroid="transparent"
      onChangeText={(text) => {
        this.setState({price:text})
      }}
      style={{ color: 'gray',flex:1,fontSize: 17, marginRight:20,fontFamily: 'NunitoRegular',borderColor:'gray',borderRadius:5,borderWidth:1,padding:5 }}
      />
      <TextInput
      placeholder={"Doller  "}
      underlineColorAndroid="transparent"
      onChangeText={(text) => {
        this.props.textChanged(text);
      }}
      style={{ color: 'gray',fontSize: 17, fontFamily: 'NunitoRegular',borderColor:'gray',borderRadius:5,borderWidth:1,padding:5 }}
      />
      </View>
      </View>
      <View style={{paddingBottom:20}}>

      <Text style={{ color: 'gray', fontSize: 17, fontFamily: 'NunitoBold',paddingBottom:10 }}>Discription</Text>
      <TextInput
      placeholder={"Enter Short Discription"}
      multiline = {true}
      numberOfLines = {4}
      underlineColorAndroid="transparent"
      onChangeText={(text)=>{this.setState({price:text})}}
      style={{ color: 'gray',textAlign:'auto',fontSize: 17, fontFamily: 'NunitoRegular',borderColor:'gray',borderRadius:5,borderWidth:1,padding:5 }}
      />
      </View>
      <View style={{paddingBottom:20}}>
      <Text style={{ color: 'gray', fontSize: 17, fontFamily: 'NunitoBold',paddingBottom:10 }}>Product Picture</Text>
      <View style={{flexDirection:'row'}}>
      <View style={{alignItems:'flex-start',width:100}}>
      <TouchableHighlight onPress={()=>{this.onGalleryOpen()}} style={{width:100}}>
      <Image style={{height:60,width:100}} resizeMode='contain' source={require('../../../../assets/images/gallery.png')}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>{this.onCameraOpen()}} style={{width:100}}>
      <Image style={{height:60,width:100}} resizeMode='contain' source={require('../../../../assets/images/camara.png')}/>
      </TouchableHighlight>
      </View>
      <View style={{flex:1}}>
      <View style={{backgroundColor:'gray',flex:1,borderRadius:5}}>
      <Image source={{uri:this.state.image}} style={{flex:1,borderRadius:5}}/>
      </View>
      </View>
      </View>
      </View>
      <View>
      <TouchableHighlight onPress={() => this.props.onPressSaveProduct()} style={{ flex: 1 }}>
      <View style={{
        paddingTop: 10,
        paddingLeft: 0,
        paddingBottom: 10,
        paddingRight: 0,
        margin: 10,
        backgroundColor: 'rgb(68,176,166)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',

        shadowOpacity: 0.5,
        shadowRadius: 7,
      }}
      >
      <Text style={{ color: 'white', fontFamily: 'NunitoBoldItalic', fontSize: 17 }}>Save</Text>
      </View>
      </TouchableHighlight>
      </View>
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

export default connect(mapStateToProps, mapActionToProps)(AddProduct);
