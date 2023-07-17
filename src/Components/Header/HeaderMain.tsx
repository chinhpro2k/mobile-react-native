/* eslint-disable react/require-default-props */
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import R from '@/Assets/R'

import { getStatusBarHeight } from 'react-native-status-bar-height'
import { getFontSize, getWidth, HEIGHT, WIDTH } from '@/Config'
import CustomStatusBar from './CustomStatusBar'
import { goBack } from '@/Navigators/navigationServices'

interface ItemProps {
  title: string
  childrenRight?: any
  onButton?: () => void
  containerStyles?: StyleProp<ViewStyle>
  titleViewStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
  isStatusBarAndroidVisible?: boolean
}
const HeaderMain = ({
  title,
  childrenRight,
  onButton,
  containerStyles,
  titleStyle,
  isStatusBarAndroidVisible,
  titleViewStyle,
}: ItemProps) => {
  const height = HEIGHT(70) + getStatusBarHeight(isStatusBarAndroidVisible)

  return (
    <View>
      <CustomStatusBar
        backgroundColor={R.colors.transparent}
        lightBarStyle={true}
        isStatusBarAndroidVisible={isStatusBarAndroidVisible}
      />
      <Image
        source={R.images.bgLogo}
        resizeMode="stretch"
        style={[styles.img, { height }]}
      />
      <View style={[styles.container, containerStyles && containerStyles]}>
        <View style={styles.viewContent}>
          {/* <TouchableOpacity onPress={onButton || goBack}>
            <Icon size={WIDTH(28)} name="chevron-left" color={R.colors.white} />
          </TouchableOpacity> */}
          <View style={[styles.titleView, titleViewStyle]}>
            <Text numberOfLines={2} style={[styles.title, titleStyle]}>
              {title}
            </Text>
          </View>
          <View style={styles.rightView}>{childrenRight}</View>
        </View>
      </View>
    </View>
  )
}
export default HeaderMain

const styles = StyleSheet.create({
  viewContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    alignItems: 'flex-end',
    // backgroundColor: R.colors.red,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH(16),
    // paddingTop: HEIGHT(12),
    paddingBottom: HEIGHT(12),
    width: getWidth(),
    height: HEIGHT(70),
  },
  img: {
    position: 'absolute',
    top: 0,
    width: getWidth(),
  },
  rightView: {
    minWidth: WIDTH(36),
  },
  title: {
    color: R.colors.white,
    fontWeight: '200',
    fontSize: getFontSize(24),
  },
  titleView: {
    // left: WIDTH(40),
    // position: 'absolute',
    // width: WIDTH(250),
    alignSelf: 'flex-start',
  },
})
