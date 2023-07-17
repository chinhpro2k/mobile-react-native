/* eslint-disable react/require-default-props */
import React from 'react'
import { Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import R from '@/Assets/R'
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
import IconSVG from '../Icons/IconSVG'
type Props = {
  content: string
  customViewStyle?: any
}

const ItemTrong = (props: Props) => {
  const { content, customViewStyle } = props
  return (
    <View style={[styles.emptyView, customViewStyle]}>
      <IconSVG
        iconName={'Trống'}
        width={WIDTH(90)}
        height={WIDTH(90)}
        color={R.colors.grey400}
      />
      <Text style={styles.txtEmpty}>{content ?? ''}</Text>
    </View>
  )
}

export default ItemTrong
const styles = StyleSheet.create({
  emptyView: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: R.colors.transparent,
    marginBottom: HEIGHT(12),
    marginTop: HEIGHT(56),
    paddingHorizontal: WIDTH(50),
  },
  container: {
    alignSelf: 'center',
  },
  imgEmpty: {
    height: WIDTH(124),
    width: WIDTH(124),
  },
  text: {
    color: R.colors.grey400,
    textAlign: 'center',
  },
  txtEmpty: {
    marginTop: HEIGHT(12),
    fontSize: getFontSize(16),
    color: R.colors.grey400,
    textAlign: 'center',
  },
})
