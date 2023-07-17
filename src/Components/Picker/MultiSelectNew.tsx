/* eslint-disable react/require-default-props */
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import R from '@/Assets/R'
import { Dropdown, MultiSelect } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
import { translate } from 'i18n-js'
import DynamicForm from '../Form/DynamicForm'

const MultiSelectNew = (props: {
  title?: any
  textTitle?: any
  required?: any
  placeholder?: any
  valueField?: any
  labelField?: any
  errorColor?: any
  errorContent?: any
  dataSourceElement?: any
  onChangeValue?: any
  dropdownPosition?: any
  onChangeValueElement?: any
  single?: any
  disabled?: any
  data?: any
  search?: boolean
}) => {
  const {
    title,
    textTitle,
    required,
    placeholder,
    valueField = 'value',
    labelField = 'label',
    errorColor,
    search = true,
    errorContent,
    dataSourceElement,
    onChangeValue,
    dropdownPosition,
    onChangeValueElement,
    single,
    disabled,
    data,
  } = props
  const [selected, setSelected] = useState([])
  const [selectedSingle, setSelectedSingle] = useState()
  const [isFocus, setIsFocus] = useState(false)
  return (
    <View style={styles.container}>
      {title && (
        <Text style={[styles.textTitle, textTitle]}>
          {title ?? translate('NO_DATA')}
          {required && (
            <Text style={[styles.textTitle, { color: R.colors.red }]}>*</Text>
          )}
        </Text>
      )}
      {single ? (
        <>
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: R.colors.MAIN_APP_COLOR },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            confirmSelectItem={true}
            iconStyle={styles.iconStyle}
            search={search}
            dropdownPosition={dropdownPosition ?? 'auto'}
            data={data ?? []}
            labelField={labelField}
            valueField={valueField}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            placeholder={placeholder || 'Chọn'}
            searchPlaceholder="Tìm kiếm ..."
            value={selectedSingle}
            disable={disabled}
            onChange={(item: any) => {
              setSelectedSingle(item?.value)
              setIsFocus(false)
              onChangeValue?.(item?.value)
            }}
          />
          {dataSourceElement && (
            <DynamicForm
              formInput={
                dataSourceElement?.[
                  data?.findIndex(
                    (item: { value: undefined }) =>
                      item?.value === selectedSingle,
                  )
                ]
              }
              title=""
              onChangeValue={onChangeValueElement}
              disabled={disabled}
            />
          )}
        </>
      ) : (
        <>
          <MultiSelect
            style={[
              styles.dropdown,
              isFocus && { borderColor: R.colors.MAIN_APP_COLOR },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            confirmSelectItem={true}
            iconStyle={styles.iconStyle}
            search
            disable={disabled}
            data={data ?? []}
            labelField={labelField}
            valueField={valueField}
            placeholder={placeholder || 'Chọn'}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            searchPlaceholder="Tìm kiếm ..."
            value={selected}
            onChange={(item: any) => {
              setSelected(item)
              onChangeValue?.(item)
            }}
            selectedStyle={styles.selectedStyle}
          />
        </>
      )}
      {!!errorContent && (
        <View style={styles.viewError}>
          <AntDesign
            name="warning"
            size={WIDTH(13)}
            style={{ marginRight: WIDTH(4) }}
            color={errorColor ?? R.colors.red}
          />
          <Text style={styles.errorContent}> {errorContent}</Text>
        </View>
      )}
    </View>
  )
}

export default MultiSelectNew

const styles = StyleSheet.create({
  viewError: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HEIGHT(4),
  },
  errorContent: {
    fontSize: getFontSize(12),
    color: '#F72504',
  },
  container: { padding: 0 },
  dropdown: {
    height: HEIGHT(40),
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: WIDTH(8),
    marginBottom: HEIGHT(4),
    borderRadius: WIDTH(8),
    // width: WIDTH(319),
  },
  placeholderStyle: {
    fontSize: getFontSize(16),
  },
  selectedTextStyle: {
    fontSize: getFontSize(14),
  },
  iconStyle: {
    width: WIDTH(20),
    height: WIDTH(20),
  },
  inputSearchStyle: {
    height: HEIGHT(40),
    fontSize: getFontSize(16),
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: WIDTH(8),
  },
  textTitle: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(6),
  },
})
