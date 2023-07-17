/**
 * @format
 */

import { AppRegistry } from 'react-native'
import codePush from 'react-native-code-push'
import App from './src/App'
import { name as appName } from './app.json'

const ContainerApp = codePush(App)

AppRegistry.registerComponent(appName, () => App)
