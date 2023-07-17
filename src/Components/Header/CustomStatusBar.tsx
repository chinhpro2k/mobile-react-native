/* eslint-disable react/require-default-props */
import React from 'react'
import { StatusBar, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import R from '@/Assets/R'

type Props = {
  backgroundColor?: string
  lightBarStyle?: any
  isStatusBarAndroidVisible?: boolean
}

const CustomStatusBar: React.FC<Props> = (props: Props) => {
  const { isStatusBarAndroidVisible, backgroundColor, lightBarStyle } = props
  const color = backgroundColor || R.colors.transparent
  const bar = lightBarStyle ? 'light-content' : 'dark-content'
  const height = getStatusBarHeight(isStatusBarAndroidVisible)

  return (
    <View style={{ height, backgroundColor: color }}>
      <StatusBar
        networkActivityIndicatorVisible={true}
        translucent
        backgroundColor={color}
        barStyle={bar}
      />
    </View>
  )
}

export default CustomStatusBar
