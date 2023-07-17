/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import React, { useState, FunctionComponent, useEffect } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import {
  Select,
  CheckIcon,
  ISelectProps,
  WarningOutlineIcon,
  FormControl,
} from 'native-base'

// themes
import { Colors } from '@/Theme'
import R from '@/Assets/R'
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
interface Props extends ISelectProps {
  hidden: boolean
  isRequired?: boolean
  label?: string
  errorContent?: string
  defaultValue?: string
  onChangeValue: (value: string) => void
  data: Array<{ label: string; value: string }>
  containerStyle?: any
}

const Picker: FunctionComponent<Props> = (props: Props) => {
  const {
    hidden,
    defaultValue,
    data = [],
    width = '100%',
    errorContent,
    label,
    isRequired = false,
    placeholder = 'Chọn giá trị',
    onChangeValue,
    containerStyle,
    enabled,
    height,
    ...otherProps
  } = props
  const [valueSelected, setValueSelected] = useState(
    defaultValue ?? data?.[0]?.label,
  )
  // console.log('data', data)
  // console.log('defaultValue', defaultValue)
  const handleChange = (itemValue: string) => {
    setValueSelected(itemValue)
    onChangeValue?.(itemValue)
  }
  useEffect(() => {
    onChangeValue?.(defaultValue ?? data?.[0]?.label)
  }, [])
  if (hidden) {
    return <View />
  }
  return (
    // <FormControl
    //   style={containerStyle}
    //   isRequired={isRequired}
    //   isInvalid={!!errorContent}
    // >
    //   <FormControl.Label _text={styles.label}>{label}</FormControl.Label>
    <View style={[styles.container, containerStyle]}>
      <Select
        style={[
          {
            width: WIDTH(328),
            height: HEIGHT(36),
          },
        ]}
        borderWidth={0}
        selectedValue={valueSelected}
        placeholder={placeholder}
        _selectedItem={{
          backgroundColor: Colors.transparent,
          endIcon: (
            <CheckIcon
              size="5"
              color={Colors.green500}
              _light={{ color: Colors.green500 }}
              _dark={{ color: Colors.white }}
            />
          ),
        }}
        onValueChange={handleChange}
        _light={{ bg: Colors.white, _text: { color: Colors.black0 } }}
        _dark={{ bg: Colors.black0, _text: { color: Colors.white } }}
        {...otherProps}
      >
        {data.map(item => (
          <Select.Item label={item?.label} value={item?.value} />
        ))}
      </Select>
    </View>
    //   <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
    //     {errorContent}
    //   </FormControl.ErrorMessage>
    // </FormControl>
  )
}

export default Picker
const styles = StyleSheet.create({
  container: {
    // width: WIDTH(343),
  },
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
  },
})
