import React ,{Component} from 'react';
import { Text, View} from 'react-native';
import { Font } from 'expo';
import AppScreen from './src/main';

export default class AppRoute extends Component {
    constructor(props){
      super(props);
      this.state = {
       fontLoaded: false,
     }

    }

    async componentDidMount() {
   await Font.loadAsync({
       'NunitoBold': require('./assets/fonts/Nunito-Bold.ttf'),
       'NunitoBoldItalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
       'NunitoRegular': require('./assets/fonts/Nunito-Regular.ttf'),

   });

   this.setState({ fontLoaded: true });
 }


    render(){
      return (

            this.state.fontLoaded ?
            <AppScreen />
            :<View/>

         );
    }
}
