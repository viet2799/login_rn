import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import Header from './Header'
export default class Screen2 extends Component {
    render() {
        return (
            <View style={{flex:1 , flexDirection:'column'}}>
            <Header {...this.props} name='Setting'></Header>
            <View style={{flex:1 , backgroundColor:'#90ee90'}}></View>
            </View>
        )
    }
}
