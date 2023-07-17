/* eslint-disable react/require-default-props */
import { StyleSheet, ViewStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import {
  Input,
  IInputProps,
  FormControl,
  WarningOutlineIcon,
  Text,
} from 'native-base'
import { Formik } from 'formik'
import R from '@/Assets/R'
// config
import { getFontSize, getWidth, HEIGHT, WIDTH } from '@/Config'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DotRequired from '../DotRequired'

interface Props extends IInputProps {
  label?: string
  errorContent?: any
  isRequired?: boolean
  isNumber?: boolean
  errorColor?: string
  containerStyle?: any
  isTextArea?: boolean
}

const InputBase: FunctionComponent<Props> = (props: Props) => {
  const {
    inputStyle,
    containerStyle,
    label,
    errorContent,
    isRequired,
    isNumber,
    errorColor,
    isTextArea,
    ...otherProps
  } = props

  return (
    <FormControl
      style={containerStyle}
      isRequired={isRequired}
      isInvalid={!!errorContent}
    >
      {label && (
        <Text style={styles.label}>
          {label}
          <DotRequired isNotRequired={!isRequired} />
        </Text>
      )}
      <Input
        style={[styles.input, inputStyle]}
        borderRadius={WIDTH(8)}
        borderColor={R.colors.grey400}
        multiline={isTextArea}
        autoCapitalize={'none'}
        height={isTextArea ? HEIGHT(80) : HEIGHT(40)}
        textAlignVertical={isTextArea ? 'top' : 'center'}
        keyboardType={isNumber ? 'numeric' : 'default'}
        {...otherProps}
      />
      <FormControl.ErrorMessage
        leftIcon={
          <AntDesign
            name="warning"
            size={WIDTH(13)}
            style={{ marginRight: WIDTH(4) }}
            color={errorColor ?? R.colors.red}
          />
        }
      >
        <Text color={errorColor ?? R.colors.red}>{errorContent}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default InputBase

const styles = StyleSheet.create({
  input: {
    fontSize: getFontSize(14),
  },
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(4),
  },
})
