import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import Header from './Header'
export default class Screen4 extends Component {
    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
            <Header {...this.props} name='About' />
            <View style={{flex:1 , backgroundColor:'#66cdaa'}}></View>
            </View>
           
        )
    }
}
