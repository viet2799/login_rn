import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';
import InLogin from '../InLogin/InLogin';
import AsyncStorage from '@react-native-community/async-storage';

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        myKey: null ,
        myValue  : null
    }
  }
    
    getData =  async() => {
      const Email = {
        Emaill: 'Nguyenducviet2799@gmail.com',
        Password: '123456',
      };
        try {
         
      
         await  AsyncStorage.setItem('Email', JSON.stringify(Email));
          console.log('save ok');
        } catch (error) {
          console.log('error');
        }
      };
      SaveData = async () => {
         try {
            const value = await AsyncStorage.getItem('Email')
            const a =  Object.entries(value)
            // for(var [myKey1 , myValue1] of Object.entries(value)   ){
            //   // this.setState({myKey: `${myKey1}`});
            //   // this.setState({myKey: `${myValue1}`});
            // }
            this.setState({myKey:value})
            
         } catch (error) {
             console.log(':D')
         }
      }
//   componentDidUpdate(value){
//     try {
//         const Email = {
//           Emaill: 'Nguyenducviet2799@gmail.com',
//           Password: '123456',
//         };
    
//          AsyncStorage.setItem('Email', Email);
//         console.log('save ok');
//       } catch (error) {
//         console.log('error');
//       }
//         value = AsyncStorage.getItem('Email');
//         if (value != null) {
//             this.setState({ b : JSON.stringify(value)})
//             return b
//         } else {
//           console.log('hm');
//         }  
        
//   }
  //  function name(params) {

  //  }
  // onclick=() => this.setState({ MyState :this.SaveData()})
  render() {
    
    
    

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Header {...this.props} name="Home"></Header>
        <View style={{flex: 1, backgroundColor: '#fffafa'}}>
          <TouchableHighlight
            style={{height: 20, width: 100, backgroundColor: 'red'}}
            onPress={() => this.getData()}>
            <Text>hello</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{height: 20, width: 100, backgroundColor: 'pink'}}
            onPress={() => this.SaveData()}>
            <Text>hello</Text>
          </TouchableHighlight>
          <Text style={{fontSize:20 }}> hello : {this.state.myKey} ,   {this.state.myValue}</Text>
        
          
        </View>
      </View>
    );
  }
}


