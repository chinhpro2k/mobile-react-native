/* eslint-disable react/require-default-props */
import React, { useState, FunctionComponent, useEffect } from 'react'
import { StyleSheet } from 'react-native'
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
import { getFontSize, HEIGHT } from '@/Config'
import { ELementInput } from '@/Interfaces'
import DynamicForm from '../Form/DynamicForm'
interface Props extends ISelectProps {
  isRequired?: boolean
  label?: string
  errorContent?: string
  defaultValue?: string
  onChangeValue: (value: string) => void
  disabled?: boolean
  data: Array<{ label: string; value: string }>
  dataSourceElement?: Array<Array<ELementInput>>
  onChangeValueElement: (valueInput: any, titleInput: string) => void
}

const Picker: FunctionComponent<Props> = (props: Props) => {
  const {
    defaultValue,
    data = [],
    width = '100%',
    errorContent,
    label,
    isRequired = false,
    placeholder = 'Chọn giá trị',
    onChangeValue,
    disabled,
    dataSourceElement,
    onChangeValueElement,
    ...otherProps
  } = props
  const [valueSelected, setValueSelected] = useState<any>(defaultValue ?? '')
  const handleChange = (itemValue: string) => {
    setValueSelected(itemValue)
    onChangeValue?.(itemValue)
  }
  useEffect(() => {
    setValueSelected(defaultValue)
  }, [defaultValue])

  return (
    <FormControl
      style={styles.container}
      isRequired={isRequired}
      isInvalid={!!errorContent}
    >
      <FormControl.Label _text={styles.label}>{label}</FormControl.Label>
      <Select
        width={width}
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
        isDisabled={disabled}
        {...otherProps}
      >
        {data.map(item => (
          <Select.Item label={item?.label} value={item?.value} />
        ))}
      </Select>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorContent}
      </FormControl.ErrorMessage>
      {dataSourceElement && (
        <DynamicForm
          formInput={
            dataSourceElement?.[
              data?.findIndex(item => item?.value === valueSelected)
            ]
          }
          title=""
          onChangeValue={onChangeValueElement}
          disabled={disabled}
        />
      )}
    </FormControl>
  )
}

export default Picker
const styles = StyleSheet.create({
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
  },
  container: {
    marginBottom: HEIGHT(8),
    flex: 1,
  },
})
