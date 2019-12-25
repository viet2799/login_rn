import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';

export default class InLogin extends Component {
      state = {
        'Name': '' ,
        'Password' : '',

    }
    componentDidMount (){
       AsyncStorage.getItem('Name').then((value1) => this.setState({ 'Name': value1 })),
       AsyncStorage.getItem('Password').then((value2) => this.setState({ 'Password': value2 }))
      
      // const setName = (value1) => this.setState({ 'Name': value1 })
      // const setPassword = (value2) => this.setState({ 'Password': value2 })
    }
    // componentDidMount = () => AsyncStorage.getItem('Password').then((value2) => this.setState({ 'Password': value2 }))
    
    setName = (value1) => {
        AsyncStorage.setItem('Name', value1);
        this.setState({ 'Name': value1 });
    }
    setPassword = (value2) => {
      AsyncStorage.setItem('Password', value2);
      this.setState({ 'Password': value2 });
  }
    
    onClick = async () => {
    try {
      
          await  AsyncStorage.setItem('Email' , 'AA')
          console.log('save ok');
        } catch (error) {
          console.log('error')
        }
    try{
        const gGetData = AsyncStorage.getItem('Email')
        if(gGetData != null){
          await this.props.navigation.navigate('Home');
        }
        else {
          Alert.alert('nope')
        }
    }catch(error){

    }
      
    //  const taikhoan = AsyncStorage.getItem('Email')
    //  const Pass = AsyncStorage.getItem('Ps')
    // //  const taikhoan2 = AsyncStorage.getItem('Name').then((value1) => this.setState({ 'Name': value1 }))
    // //  const Pass2 = AsyncStorage.getItem('Password').then((value2) => this.setState({ 'Password': value2 }))
    //  if(taikhoan != null  ){
    //   await this.props.navigation.navigate('Home');
    //  }
    //  else {
    //   Alert.alert('hello')
    //  }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#add8e6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            height: 50,
            width: Dimensions.get('window').width - 30,
            backgroundColor: '#708090',
            margin: 20,
          }} 
          onChangeText = {this.setName}
          >
               <Text>
               {(this.state.Name)}  
               </Text>          
          </TextInput>
        <TextInput
          style={{
            height: 50,
            width: Dimensions.get('window').width - 30,
            backgroundColor: '#708090',
            margin: 20,
          }
        }
        onChangeText = {this.setPassword}
        >
        <Text>
        {this.state.Password}
        </Text>   
        </TextInput>
        
        

        <TouchableHighlight
          style={{
            height: 50,
            width: 120,
            backgroundColor: '#7cfc00',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Home')}
          // onPress={()=>this.GetData()}
          >
          <Text style={{fontSize: 25, fontFamily: 'Calligraffitti-R'}}>
            Logn in
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
// SaveData = async () => {
//   try {
//     await AsyncStorage.setItem('@PakitV2', 'I like to save it.');
//   } catch (error) {
//     console.log('error')
//   }
// };
// GetData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@PakitV2');
//     if (value !== null) {
//       // We have data!!
//       alert('hello')
//     }
//   } catch (error) {
//     // Error retrieving data
//   }
// };



// export const SetUp = async (emaill  , user){

// }
