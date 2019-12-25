/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './App';
import Login1 from './Login/Login';
import { createAppContainer } from 'react-navigation';
import Stack from './Login/Login'
import InLogin from './Apps/InLogin/InLogin'
import Header from './Apps/Afterlogin/Header';
import Screen1 from './Apps/Afterlogin/Screen1';
import Screen2 from './Apps/Afterlogin/Screen2';
import All from './Apps/Afterlogin/All';
import Test from './Apps/InLogin/Test';
import OneInALl from './Apps/Afterlogin/OneInALl';
import AsyncStorageExample from './Apps/InLogin/New';
import Tesst from './Apps/InLogin/Tesst';
import Tess from './Apps/InLogin/Tess'

AppRegistry.registerComponent(appName, () => Screen1);
