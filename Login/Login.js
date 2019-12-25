import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AfterLogin from './AfterLogin';

export default class Login1 extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'rgba(50,37,45,0.9)'}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 2}}>
          <Image
            source={require('./login.png')}
            style={{height: 130, width: 130}}
          />
        </View>
        <KeyboardAvoidingView style={{flex: 3}}>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              style={{
                height: 50,
                backgroundColor: 'rgba(50,37,45,0.2)',
                margin: 10,
                fontSize: 20,
              }}
              placeholder="Enter username/email"
              placeholderTextColor="white"
              keyboardType="email-address"
              returnKeyType="next"></TextInput>
          </View>
          <View>
            <TextInput
              style={{
                height: 50,
                backgroundColor: 'rgba(50,37,45,0.2)',
                margin: 10,
                fontSize: 20,
              }}
              placeholder="Enter Password"
              placeholderTextColor="white"
              keyboardType="email-address"
              returnKeyType="next"></TextInput>
          </View>
          <TouchableHighlight
            style={{
              height: 50,
              backgroundColor: 'yellow',
              margin: 10,
              fontSize: 20,
              marginTop:30,
              alignItems:'center',
              justifyContent:'center'
            }} 
            // onPress = {this.props.navigation.navigate("trang sau")}
            >
            <Text>LOGIN</Text>
          </TouchableHighlight>
          <View style={{marginLeft:10}}>
          <LoginButton 
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}
          
          />
          </View>
        </KeyboardAvoidingView>
        
      </View>
      
    );
  }
}
// const StackNavigator = createStackNavigator({
//     'trang chu' :{
//       screen: Login1
//     },
//     'trang sau' : {
//       screen: AfterLogin
//     }
    
// },
// {
//   initialRouteName: 'trang chu'
// }
// )
// const AppContainer = createAppContainer(StackNavigator);
// export default class Stack extends Component{
//   render(){
//     return(
//       <AppContainer/>
//     )
//   }
// }

