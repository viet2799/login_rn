import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
export default class Header extends Component {
  render() {
    return (
      <View style={{ flexDirection:'row',alignItems:'center' , justifyContent:'center', backgroundColor:'#663399'}}>
        <Text style={{fontSize:30, padding:10, fontFamily:'Lato-Bold'}}>{this.props.name}</Text>
      </View>
    );
  }
}
