/* eslint-disable react/require-default-props */
import React, { useState, useEffect, FunctionComponent } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import _ from 'lodash'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import moment from 'moment'
// import { WIDTH, getFont, HEIGHT, getLineHeight } from '../../../config'
// import i18n from '../../../assets/languages/i18n'
import { WIDTH, HEIGHT, getLineHeight, getFontSize } from '@/Config'
import R from '@/Assets/R'
import { Text, WarningOutlineIcon } from 'native-base'
import DotRequired from '../DotRequired'
import AntDesign from 'react-native-vector-icons/AntDesign'

type ModeDatePicker = 'date' | 'time' | 'datetime'

interface Props {
  label?: string
  value: Date | undefined
  minDate?: Date
  maxDate?: Date
  onDateChange: (value: Date) => void
  disabled?: boolean
  containerStyle?: ViewStyle
  mode: ModeDatePicker
  noDefaultValue?: boolean
  errorContent?: string
  errorColor?: string
  isRequired?: boolean
}

const DatePickerBase: FunctionComponent<Props> = (props: Props) => {
  const {
    value,
    minDate,
    maxDate,
    onDateChange,
    disabled,
    errorColor,
    containerStyle,
    mode,
    isRequired,
    errorContent,
    label,
    noDefaultValue,
  } = props
  const [date, setDate] = useState<Date | undefined>(
    new Date(value || new Date()),
  )
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false)

  useEffect(() => {
    setDate(
      noDefaultValue && _.isNil(value)
        ? new Date()
        : new Date(value || new Date()),
    )
  }, [value, noDefaultValue])

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (dateValue: Date) => {
    hideDatePicker()
    onDateChange && onDateChange(dateValue)
  }

  const opacity = disabled ? 0.6 : 1
  const dateValue =
    mode === 'datetime'
      ? moment(date).format('DD/MM/YYYY HH:mm')
      : mode === 'date'
      ? moment(date).format('DD/MM/YYYY')
      : moment(date).format('HH:mm')
  const displayValue = noDefaultValue
    ? !_.isNil(value)
      ? dateValue
      : mode === 'datetime'
      ? 'Chọn thời gian'
      : mode === 'date'
      ? 'Chọn ngày'
      : 'Chọn giờ'
    : dateValue
  return (
    <View
      style={{
        opacity,
        alignSelf: 'center',
      }}
    >
      {label ? (
        <Text style={styles.label}>
          {label}
          <DotRequired isNotRequired={!isRequired} />
        </Text>
      ) : null}

      <TouchableOpacity
        onPress={showDatePicker}
        style={[styles.container, containerStyle]}
        disabled={disabled}
        activeOpacity={0.6}
      >
        <Text style={styles.textTime}>{displayValue}</Text>
        <FontAwesome color={R.colors.black9} size={WIDTH(22)} name="calendar" />
      </TouchableOpacity>
      <DateTimePickerModal
        is24Hour
        date={date}
        isVisible={isDatePickerVisible}
        mode={mode}
        locale="vi"
        minimumDate={minDate}
        maximumDate={maxDate}
        confirmTextIOS={'Đồng ý'}
        cancelTextIOS={'Huỷ'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {!!errorContent && (
        <View style={styles.viewError}>
          <AntDesign
            name="warning"
            size={WIDTH(13)}
            style={{ marginRight: WIDTH(4) }}
            color={errorColor ?? R.colors.red}
          />
          <Text color={errorColor ?? R.colors.red}>{errorContent}</Text>
        </View>
      )}
    </View>
  )
}

export default DatePickerBase

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
  label: {
    marginBottom: HEIGHT(6),
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
  },
  container: {
    alignItems: 'center',
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    height: HEIGHT(45),
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH(12),
    width: WIDTH(343),
    alignSelf: 'center',
    borderRadius: WIDTH(8),
    borderWidth: 1,
  },
  textTime: {
    color: R.colors.black0,
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(24),
  },
})
