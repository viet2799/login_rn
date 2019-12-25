import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import Header from './Header'
export default class Screen3 extends Component {
    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
            <Header {...this.props} name='Options' />
            <View style={{flex:1 , backgroundColor:'#3cb371'}}></View>
            </View>
            
        )
    }
}
