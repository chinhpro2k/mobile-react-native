import '@/i18n'
import 'react-native-gesture-handler'
import React, { Component, useEffect } from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider, extendTheme } from 'native-base'
import codePush from 'react-native-code-push'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import RootView from '@/Navigators/RootView'
import { RootSiblingParent } from 'react-native-root-siblings'
import * as Sentry from '@sentry/react-native'
import OhNo from './Screens/OhNo'
import { Platform } from 'react-native'

Sentry.init({
  dsn: '', // link project in https://sentry.io
})
const CodePushKey = {
  ANDROID: 'N-9kohlc-0xL_QZw_QIg1cVdPyB_QVBnpL5WM',
  IOS: 'xlT6-VCVhmebOS0Kf9pg42S42-7fgbVN-Lo9x',
}
// Thành công, may mắn, hạnh phúc, phát tài, phát lộc
const App = () => {
  const config = {
    useSystemColorMode: true,
    initialColorMode: 'light',
  }
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey:
        Platform.OS === 'android' ? CodePushKey.ANDROID : CodePushKey.IOS,
    })
  }, [])
  const customTheme = extendTheme({ config })
  return (
    <RootSiblingParent>
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <NativeBaseProvider theme={customTheme}>
          <SafeAreaProvider>
            <PersistGate loading={null} persistor={persistor}>
              <ErrorBoundary>
                <RootView />
              </ErrorBoundary>
            </PersistGate>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </Provider>
    </RootSiblingParent>
  )
}

export default codePush(App)
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return (
        <OhNo
          resetError={() => {
            this.setState({ hasError: false })
          }}
        />
      )
    }

    return <>{this.props.children}</>
  }
}
