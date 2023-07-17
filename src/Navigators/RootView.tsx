/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import OneSignal from 'react-native-onesignal'
import codePush from 'react-native-code-push'
import MainNavigator from './MainNavigator'
import CheckVersion from '@/Components/CheckVersion'
import CheckInternet from '@/Components/CheckInternet'
import CustomDialog from '@/Components/Popup/CustomDialog'
import CustomConfirmDialog from '@/Components/Popup/CustomConfirmDialog'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import { navigate, reset } from './navigationServices'
import ScreenName from './screenNames'
import axios from 'axios'
import { rootServerInstance } from '@/Services/helpers'
import { ErrorBoundary } from '@/Components/ErrorBoundary'

import { KEY_TYPE, MAIN_SETTING } from '@/Config'

// @refresh reset
const RootView = () => {
  // const onReceived = notification => {
  //   // handle receiving notification
  // }
  const timeOut = React.useRef<any>(null)
  const notiOpen = useRef(false)
  const onOpened = (notification: any) => {
    const notiData = notification?.notification?.additionalData
    // handle opening notification

    timeOut.current = setTimeout(() => {
      navigate(ScreenName.ChiTietThongBao, { notiData })
    }, 3000)
  }

  const initOneSignal = () => {
    OneSignal.setAppId(MAIN_SETTING?.[KEY_TYPE]?.OneSignalKey)
    OneSignal.setLogLevel(6, 0)
    if (Platform.OS === 'ios') {
      OneSignal.promptForPushNotificationsWithUserResponse(response => {
        // console.log("Prompt response:", response)
      })
    }
    OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
      console.log(
        'OneSignal: notification will show in foreground:',
        notifReceivedEvent,
      )
      const notif = notifReceivedEvent.getNotification()
      // onReceived(notif)
    })
    OneSignal.setNotificationOpenedHandler(notification => {
      onOpened(notification)
    })
  }
  const getInitData = async () => {
    const account: any = await AsyncStorageUtils.getObject(
      AsyncStorageUtils.KEY.CURRENTTOKEN,
    )
    if (account) {
      rootServerInstance.setHeader(
        'Authorization',
        `Bearer ${account?.accessToken}`,
      )
      axios.defaults.headers.common.Authorization = `Bearer ${account?.accessToken}`

      // reset(ScreenName.TabMain)
    }
  }
  useEffect(() => {
    initOneSignal()
    getInitData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <ErrorBoundary>
        <MainNavigator />
      </ErrorBoundary>
      <CustomConfirmDialog />
      <CustomDialog />
      <CheckVersion />
      <CheckInternet />
    </View>
  )
}

export default RootView

const styles = StyleSheet.create({
  container: { flex: 1 },
})
