// index.js or App.js
import './ReactotronConfig'; // Ensure this is at the top
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
