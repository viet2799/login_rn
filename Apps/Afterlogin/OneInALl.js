import React, { Component } from 'react';
import { View, Text ,TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import All from '../Afterlogin/All';
import {  createAppContainer } from 'react-navigation';
import Login from '../InLogin/InLogin'
const Stack = createStackNavigator({
    login :{
        screen: Login,
    },
    Home:{
        screen: All
    }

},
{
    headerMode:'none'
}
)
const Abc = createAppContainer(Stack);

export default class OneInALl extends Component{
    render() { 
        return(
            <Abc/>
        )
    }
}