/* eslint-disable react/require-default-props */
import React, { useState, useEffect, FunctionComponent } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import _ from 'lodash'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
import { navigate, goBack } from '@/Navigators/navigationServices'
import DanhSachCanBo from '@/Screens/DanhSachCanBo'
import ScreenName from '@/Navigators/screenNames'
type ModeDatePicker = 'date' | 'time' | 'datetime'
import DotRequired from '../DotRequired'
interface Props {
  label?: string
  value?: Date | undefined
  minDate?: Date
  maxDate?: Date
  onDateChange?: (value: Date) => void
  disabled?: boolean
  containerStyle?: ViewStyle
  itemData: any
  noDefaultValue?: boolean
  errorContent?: string
  isNotValidate?: boolean
  isRequired?: boolean
}

const CanBoPicker: FunctionComponent<Props> = (props: Props) => {
  const {
    disabled,
    containerStyle,
    label,
    errorContent,
    isNotValidate,
    itemData,
    isRequired,
  } = props

  const [value, setValue] = useState('')
  const onAdd = (item: any) => {
    setValue(item)

    goBack()
  }
  const goTo = () => {
    navigate(ScreenName.DanhSachCanBo, { onAdd: onAdd })
  }
  return (
    <View style={[styles.viewAll]}>
      {label && (
        <Text style={styles.label}>
          {label}
          <DotRequired isNotRequired={!isRequired} />
        </Text>
      )}
      <TouchableOpacity
        onPress={goTo}
        style={[styles.container, containerStyle]}
        disabled={disabled}
        activeOpacity={0.6}
      >
        <Text style={styles.textTime}>{value}</Text>
        <MaterialCommunityIcons
          color={R.colors.black9}
          size={WIDTH(22)}
          name="format-list-checkbox"
        />
      </TouchableOpacity>

      {isNotValidate && (
        <View style={styles.viewError}>
          <WarningOutlineIcon size="xs" color={R.colors.redC81} />
          <Text style={styles.textError}>{errorContent}</Text>
        </View>
      )}
    </View>
  )
}

export default CanBoPicker

const styles = StyleSheet.create({
  viewAll: {
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: R.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH(12),
    alignSelf: 'center',
    borderRadius: WIDTH(8),
    borderWidth: WIDTH(1),
    width: WIDTH(319),
    height: HEIGHT(40),
    borderColor: R.colors.grey400,
  },
  textTime: {
    color: R.colors.black0,
    fontSize: getFontSize(15),
    lineHeight: getLineHeight(24),
  },
  textError: {
    fontSize: getFontSize(12),
    lineHeight: getLineHeight(18),
    color: R.colors.redC81,
  },
  viewError: { flexDirection: 'row', alignItems: 'center' },
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(4),
  },
})
