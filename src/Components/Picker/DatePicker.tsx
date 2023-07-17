/* eslint-disable react/require-default-props */
import React, { useState, useEffect, FunctionComponent } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import _ from 'lodash'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import moment from 'moment'
import { WIDTH, HEIGHT, getLineHeight, getFontSize } from '@/Config'
import R from '@/Assets/R'
import { WarningOutlineIcon } from 'native-base'
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
  isNotValidate?: boolean
}

const DatePickerBase: FunctionComponent<Props> = (props: Props) => {
  const {
    value,
    minDate,
    maxDate,
    onDateChange,
    disabled,
    containerStyle,
    mode,
    label,
    noDefaultValue,
    errorContent,
    isNotValidate,
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
    <View style={[styles.viewAll, { opacity }]}>
      <Text
        style={{
          fontSize: getFontSize(14),
          color: R.colors.grey800,
          marginBottom: HEIGHT(4),
        }}
      >
        {label ?? 'Đây là label'}
      </Text>
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
      {isNotValidate && (
        <View style={styles.viewError}>
          <WarningOutlineIcon size="xs" color={R.colors.redC81} />
          <Text style={styles.textError}>{errorContent}</Text>
        </View>
      )}
    </View>
  )
}

export default DatePickerBase

const styles = StyleSheet.create({
  viewAll: {
    alignSelf: 'center',
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
  },
  textTime: {
    color: R.colors.black0,
    fontSize: getFontSize(17),
    lineHeight: getLineHeight(24),
  },
  textError: {
    fontSize: getFontSize(12),
    lineHeight: getLineHeight(18),
    color: R.colors.redC81,
  },
  viewError: { flexDirection: 'row', alignItems: 'center' },
})
