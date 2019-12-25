import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Test extends Component {
  
  render() {
    function sacc  ()  {
      const a = 'hello'
      return a
    }
    const b = sacc() 
    return (
      // <Icon.Button style={{fontSize:30 , margin:20}}
      //   name='md-home'
      //   backgroundColor="#3b5998"
      //   onPress={this.loginWithFacebook}>
      //   Login with Facebook
      // </Icon.Button>

      <Text>{b}</Text>

    );
  }
}
