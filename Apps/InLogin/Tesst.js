import React, { Component } from 'react'
import { Text , View , TouchableHighlight } from 'react-native'
import {AsyncStorage} from 'react-native';
import BeforeLogin from './BeforeLogin'
import InLogin from './InLogin'

export default class Tesst extends Component {
  
  saveData = async () => {
    try{
        const GetDataa = AsyncStorage.getItem('Email')
        if(GetDataa != null){
          console.log(GetDataa)
          
        }
        else {
          // console.log(GetData)
        }
    }catch(error){

    }
}
      GetData = async () => {
        try {
          const value = await AsyncStorage.getItem('Email');
          
          if (value !== null) {
            // We have data!!
            console.log(value);
            <Text></Text>
          }
        } catch (error) {
          // Error retrieving data
          
        }
      };
      onClick = async () => {
        try {
          const Email = {
            Email : 'Nguyenducviet2799@gmail.com',
            Password :'123456'
          }
          
              await  AsyncStorage.setItem('Email' , Email)
              console.log('save ok');
            } catch (error) {
              console.log('error')
            }
        try{
            const GetData = AsyncStorage.getItem('Email')
            if(GetData != null){
              console.log(GetData)
            }
            else {
              // console.log(GetData)
            }
        }catch(error){
    
        }
    }
    render() {
        return (
            <View>
                <TouchableHighlight onPress = {() => this.saveData()}
                style ={{height:30 , width:100 , backgroundColor:'blue'}}
                >
                    <Text>Set</Text>
                </TouchableHighlight>

                <TouchableHighlight  
                onPress = {() => this.GetData()}
                style ={{height:30 , width:100 , backgroundColor:'blue'}}
                >
                    <Text>Get</Text>
                </TouchableHighlight>

                <Text >{(this.state.GetData)}</Text>
            </View>
        )
    }
}




  