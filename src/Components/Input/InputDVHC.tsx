/* eslint-disable react/require-default-props */
import { StyleSheet, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import {
  Input,
  IInputProps,
  FormControl,
  WarningOutlineIcon,
} from 'native-base'
import { Formik } from 'formik'
import R from '@/Assets/R'
// config
import { getFontSize, getWidth, HEIGHT, WIDTH } from '@/Config'

interface Props extends IInputProps {
  label?: string
  errorContent?: string
  isRequired?: boolean
}

const InputBase: FunctionComponent<Props> = (props: Props) => {
  const { label, errorContent, isRequired, containerStyle, ...otherProps } =
    props
  return (
    <View style={[styles.container, containerStyle]}>
      <Input borderWidth={0} style={styles.input} {...otherProps} />
    </View>
  )
}

export default InputBase

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.white,
  },

  input: {
    // borderRadius: WIDTH(8),
    width: WIDTH(328),
    height: HEIGHT(36),
  },
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
  },
})
