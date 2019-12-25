import React, { Component } from 'react'
import { View , Text , Image} from 'react-native'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
export default class All extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appcontainer/>
            </View>
        )
    }
}
const AllofScreen = createBottomTabNavigator({
    Home :{
        screen:Screen1,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:({tintColor})=>(
                <Icon name="md-home" size={24} />
            )
        }
    
    }  ,
    Setting :{screen:Screen2,
        navigationOptions:{
            tabBarLabel:'Setting',
            tabBarIcon:({tintColor})=>(
                <Icon name="md-cog" size={24} />
            )
        }
    },
    Options :{screen:Screen3,
        navigationOptions:{
            tabBarLabel:'Options',
            tabBarIcon:({tintColor})=>(
                <Icon name="md-options" size={24} />
            )
        }
    },
    About :{screen:Screen4,
        navigationOptions:{
            tabBarLabel:'About',
            tabBarIcon:({tintColor})=>(
                <Icon name="md-information-circle" size={24} />
            )
        }
    },
},
 {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#a52a2a',
        labelStyle: {
          fontSize: 20,
        },
        style: {
            height:60,
            backgroundColor: '#663399',
            paddingTop:10
        },
    },
    
})
const Appcontainer = createAppContainer(AllofScreen);