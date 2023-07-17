/* eslint-disable react/require-default-props */
import { StyleSheet, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import {
  Checkbox,
  FormControl,
  Radio,
  Text,
  WarningOutlineIcon,
} from 'native-base'
import R from '@/Assets/R'
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
import DynamicForm from '../Form/DynamicForm'
import { ELementInput } from '@/Interfaces'
import DotRequired from '../DotRequired'
import AntDesign from 'react-native-vector-icons/AntDesign'

type Props = {
  data: Array<{ label: string; value: string }>
  label?: string
  errorContent?: string
  defaultValue?: string
  isRequired?: boolean
  onChangeValue: (value: string) => void
  dataSourceElement?: Array<Array<ELementInput>>
  disabled?: boolean
  errorColor?: string
  onChangeValueElement?: (valueInput: any, titleInput: string) => void
}
const RadioButton: FunctionComponent<Props> = (props: Props) => {
  const {
    dataSourceElement,
    disabled,
    data,
    label,
    isRequired,
    errorContent,
    defaultValue,
    errorColor,
    onChangeValue,
    onChangeValueElement,
    ...otherProps
  } = props
  const [groupValue, setGroupValue] = React.useState(defaultValue)
  const handleChange = (itemValue: string) => {
    setGroupValue(itemValue || '')
    onChangeValue?.(itemValue)
  }
  return (
    <FormControl isInvalid={!!errorContent} isRequired={isRequired}>
      {label && (
        <Text style={styles.label}>
          {label}
          <DotRequired isNotRequired={!isRequired} />
        </Text>
      )}
      <Radio.Group
        name="exampleGroup"
        accessibilityLabel="select prize"
        {...otherProps}
        defaultValue={groupValue}
        onChange={handleChange}
      >
        {data?.map(item => {
          return (
            <Radio
              my={HEIGHT(4)}
              borderWidth="1"
              colorScheme="blue"
              value={item?.value}
              background="white"
              _text={{ color: R.colors.black0 }}
            >
              {item?.label}
            </Radio>
          )
        })}
      </Radio.Group>
      {dataSourceElement && (
        <DynamicForm
          formInput={
            dataSourceElement?.[
              data?.findIndex(item => item?.value === groupValue)
            ]
          }
          title=""
          onChangeValue={onChangeValueElement}
          disabled={disabled}
        />
      )}
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

export default RadioButton

const styles = StyleSheet.create({
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(4),
  },
})
