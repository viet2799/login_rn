import React, { Component } from 'react'
import { Text, AsyncStorage } from 'react-native'
export default class BeforeLogin extends Component {
    render() {
        return (
            <Text style={{backgroundColor :' red '}}>
                
            </Text>
        )
    }
}


onclick = async () => {
    try {
        await AsyncStorage.setItem('@PakitV2:key', 'I like to save it.');
        console.log('save ok');
      } catch (error) {
        console.log('error')
      }
      try {
        const value = await AsyncStorage.getItem('@PakitV2:key');
        
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        // Error retrieving data
        
      }
}