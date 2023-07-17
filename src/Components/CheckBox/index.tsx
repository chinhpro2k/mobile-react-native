/* eslint-disable react/require-default-props */
import { StyleSheet, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import { Checkbox, FormControl, Text, WarningOutlineIcon } from 'native-base'
import R from '@/Assets/R'
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
import DotRequired from '../DotRequired'
import AntDesign from 'react-native-vector-icons/AntDesign'

type Props = {
  data: Array<{ label: string; value: string }>
  label?: string
  errorContent?: string
  defaultValue?: Array<string>
  disabled?: boolean
  onChangeValue: (values: Array<string>) => void
  isRequired?: boolean
  errorColor?: string
}
const CheckBox: FunctionComponent<Props> = (props: Props) => {
  const {
    data,
    label,
    isRequired,
    onChangeValue,
    disabled,
    errorContent,
    defaultValue,
    errorColor,
    ...otherProps
  } = props
  const [groupValue, setGroupValue] = React.useState(defaultValue)

  return (
    <FormControl isDisabled={disabled} isInvalid={!!errorContent}>
      {label && (
        <Text style={styles.label}>
          {label}
          <DotRequired isNotRequired={!isRequired} />
        </Text>
      )}
      <Checkbox.Group
        {...otherProps}
        colorScheme="green"
        defaultValue={groupValue}
        onChange={values => {
          setGroupValue(values || [])
          onChangeValue?.(values)
        }}
        alignItems="flex-start"
      >
        {data?.map(item => {
          return (
            <Checkbox my={HEIGHT(4)} colorScheme="blue" value={item?.value}>
              {item?.label}
            </Checkbox>
          )
        })}
      </Checkbox.Group>
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

export default CheckBox

const styles = StyleSheet.create({
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(4),
  },
})
