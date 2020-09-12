/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/utils/i18n'; //import needed for translation in whole application

AppRegistry.registerComponent(appName, () => App);
