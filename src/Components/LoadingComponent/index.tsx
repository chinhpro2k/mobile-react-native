/* eslint-disable react/require-default-props */
import React, { FunctionComponent } from 'react'
import { Spinner, ISpinnerProps } from 'native-base'
import CenterLayout from '../Layout/CenterLayout'
import R from '@/Assets/R'
import { getHeight, WIDTH } from '@/Config'
import { Image, StyleSheet, ViewStyle } from 'react-native'

interface Props extends ISpinnerProps {
  isLoading?: boolean
  height?: number
  containerStyles?: ViewStyle
}

const LoadingComponent: FunctionComponent<Props> = (props: Props) => {
  const { containerStyles, isLoading = true, height, ...otherProps } = props
  if (isLoading) {
    return (
      <CenterLayout
        style={[styles.container, StyleSheet.absoluteFill, containerStyles]}
        height={height}
      >
        <Spinner color={R.colors.grey900} {...otherProps} />
        {/* <Image source={R.images.loading} style={styles.loading} /> */}
      </CenterLayout>
    )
  }
  return null
}

export default LoadingComponent
const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  loading: {
    height: WIDTH(100),
    width: WIDTH(100),
  },
})
