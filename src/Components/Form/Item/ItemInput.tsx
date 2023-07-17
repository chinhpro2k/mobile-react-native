/* eslint-disable react/require-default-props */
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FunctionComponent, useState } from 'react'

// components
import Input from '@/Components/Input'
import DatePickerNew from '@/Components/Picker/DatePickerNew'

// config
import { DVMC_TYPE, getFontSize, getLineHeight, HEIGHT, WIDTH } from '@/Config'

// interface
import { ELementInput } from '@/Interfaces'
import Picker from '@/Components/Picker/Picker'
import HTMLEdit from '@/Components/HTMLEdit'
import RadioButton from '@/Components/RadioButton'
import CheckBox from '@/Components/CheckBox'
import MultipleSelectPicker from '@/Components/Picker/MultipleSelectPicker'
import DonViHanhChinh from '@/Components/DonViHanhChinh'
import R from '@/Assets/R'
import MultiSelectNew from '@/Components/Picker/MultiSelectNew'
import UploadFile from '@/Components/UploadFile'
import TableBaseComponent from '@/Components/TableComponent/TableBaseComponent'
import { Text } from 'native-base'
import CanBoPicker from '@/Components/Picker/CanBoPicker'
import ImagesPicker from '@/Components/Picker/ImagePicker'

interface Props {
  placeholder?: string
  onChangeValue: (valueInput: any, titleInput: string) => void
  pickerData: string[]
  dataSourceElement: Array<Array<ELementInput>>
  disabled?: boolean
  defaultValue: any
  itemData: ELementInput
}

const ItemInput: FunctionComponent<Props> = (props: Props) => {
  const {
    placeholder,
    onChangeValue,
    pickerData,
    dataSourceElement,
    disabled,
    defaultValue,
    itemData,
  } = props

  const [textInputValue, setTextInputValue] = useState<string>(defaultValue)
  const [dataFile, setDataFile] = useState<any>(defaultValue || [])
  const [datePickerValue, setDatePickerValue] = useState<any>(
    defaultValue || '',
  )
  const onChangeValueInput = (value: any, inputType: string) => {
    switch (inputType) {
      case DVMC_TYPE.TEXT_INPUT:
      case DVMC_TYPE.INPUT_NUMBER:
      case DVMC_TYPE.TEXT_AREA:
        setTextInputValue(value)
        onChangeValue && onChangeValue(value, itemData?._id)
        break
      case DVMC_TYPE.DATE_PICKER:
        value !== '' &&
          onChangeValue?.(new Date(value).toISOString(), itemData?._id)
        setDatePickerValue(value)
        break
      case DVMC_TYPE.UPLOAD_SINGLE:
      case DVMC_TYPE.UPLOAD_MULTI:
        setDataFile(value)
        onChangeValue && onChangeValue(value, itemData?._id)
        break
      case DVMC_TYPE.CHECKLIST:
      case DVMC_TYPE.RADIO_BUTTON:
      case DVMC_TYPE.DROP_LIST_SINGLE:
      case DVMC_TYPE.DROP_LIST_MULTI:
      case DVMC_TYPE.HTML:
        onChangeValue && onChangeValue(value, itemData?._id)
        break
      default:
        break
    }
  }

  switch (itemData?.type) {
    case DVMC_TYPE.TEXT_INPUT:
    case DVMC_TYPE.TEXT_AREA:
    case DVMC_TYPE.INPUT_NUMBER:
      const isTextArea = itemData?.type === DVMC_TYPE.TEXT_AREA
      return (
        <View style={styles.viewComponent}>
          <Input
            {...props}
            label={itemData.label}
            defaultValue={textInputValue}
            isRequired={itemData?.isRequired}
            placeholder={placeholder}
            maxLength={itemData?.max}
            // minHeight={multiline ? HEIGHT(200) : HEIGHT(40)}
            isNumber={itemData?.type === DVMC_TYPE.INPUT_NUMBER}
            isTextArea={isTextArea}
            onChangeText={value =>
              onChangeValueInput(value, DVMC_TYPE.TEXT_INPUT)
            }
            editable={!disabled}
            containerStyle={{
              width: itemData?.width && WIDTH(itemData?.width),
            }}

            // inputStyle={{ borderRadius: WIDTH(100) }}
          />
        </View>
      )
    case DVMC_TYPE.DATE_TIME_PICKER:
    case DVMC_TYPE.DATE_PICKER:
      return (
        <View style={styles.viewComponent}>
          <DatePickerNew
            containerStyle={{
              width: WIDTH(319),
              height: HEIGHT(40),
              borderColor: R.colors.grey400,
            }}
            isRequired={itemData?.isRequired}
            label={itemData?.label}
            mode={
              itemData?.type === DVMC_TYPE.DATE_TIME_PICKER
                ? 'datetime'
                : 'date'
            }
            value={datePickerValue}
            onDateChange={time =>
              onChangeValueInput(time, DVMC_TYPE.DATE_PICKER)
            }
          />
        </View>
      )
    case DVMC_TYPE.DON_VI_HANH_CHINH:
      return (
        <View style={styles.viewComponent}>
          <DonViHanhChinh
            borderColor={R.colors.grey400}
            {...props}
            title={itemData?.label}
            // borderColor={borderColor}
            // opacity={opacity}
            capDonViHanhChinh={3}
            onChangeValue={value => console.log('value', value)}
            // belongTo={belongTo}
            customWidth={WIDTH(330)}
          />
          {/* <Note addtionalNote={addtionalNote} /> */}
        </View>
      )
    case DVMC_TYPE.HTML:
      return (
        <View style={styles.viewComponent}>
          <HTMLEdit
            onChangeValueHTML={value =>
              onChangeValueInput(value, DVMC_TYPE.HTML)
            }
            label={itemData?.label}
            errorContent={itemData?.errorContent}
            {...props}
          />
        </View>
      )
    case DVMC_TYPE.RADIO_BUTTON:
      return (
        <View style={styles.viewComponent}>
          <RadioButton
            data={pickerData.map(dataPicker => ({
              value: dataPicker,
              label: dataPicker,
            }))}
            onChangeValue={value =>
              onChangeValueInput(value, DVMC_TYPE.RADIO_BUTTON)
            }
            disabled={disabled ?? itemData?.disabled}
            dataSourceElement={dataSourceElement}
            label={itemData?.label}
            onChangeValueElement={onChangeValue}
            errorContent={itemData?.errorContent}
          />
        </View>
      )

    case DVMC_TYPE.CHECKLIST:
      return (
        <View style={styles.viewComponent}>
          <CheckBox
            label={itemData?.label}
            disabled={disabled ?? itemData?.disabled}
            onChangeValue={value =>
              onChangeValueInput(value, DVMC_TYPE.CHECKLIST)
            }
            data={pickerData.map(dataPicker => ({
              value: dataPicker,
              label: dataPicker,
            }))}
            errorContent={itemData?.errorContent}
          />
        </View>
      )
    case DVMC_TYPE.DROP_LIST_SINGLE:
    case DVMC_TYPE.DROP_LIST_MULTI:
      return (
        <View style={styles.viewComponent}>
          <MultiSelectNew
            title={itemData?.label}
            required={itemData?.isRequired}
            single={
              itemData?.type === DVMC_TYPE.DROP_LIST_SINGLE ? true : false
            }
            onChangeValue={(value: any) =>
              onChangeValueInput(value, itemData?.type)
            }
            data={itemData?.dataSource}
            dropdownPosition={itemData?.position}
            disabled={disabled ?? itemData?.disabled}
            dataSourceElement={dataSourceElement}
            labelField={itemData?.labelField}
            valueField={itemData?.valueField}
            onChangeValueElement={onChangeValue}
            errorContent={itemData?.errorContent}
          />
        </View>
      )
    case DVMC_TYPE.UPLOAD_SINGLE:
      return (
        <View style={styles.viewComponent}>
          <UploadFile
            fileTypeAllow={itemData?.fileType}
            title={itemData?.label}
            arrayFile={dataFile}
            isRequired={itemData?.isRequired}
            changeListFile={(listfile: any) => {
              onChangeValueInput(listfile, DVMC_TYPE.UPLOAD_SINGLE)
            }}
            customStyle={{ width: WIDTH(319) }}
          />
        </View>
      )
    case DVMC_TYPE.UPLOAD_MULTI:
      return (
        <View style={styles.viewComponent}>
          <UploadFile
            fileTypeAllow={itemData?.fileType}
            title={itemData?.label}
            arrayFile={dataFile}
            isRequired={itemData?.isRequired}
            changeListFile={(listfile: any) => {
              onChangeValueInput(listfile, DVMC_TYPE.UPLOAD_MULTI)
            }}
            customStyle={{ width: WIDTH(319) }}
          />
        </View>
      )
    case DVMC_TYPE.TABLE:
      return (
        <View style={styles.viewComponent}>
          <TableBaseComponent
            label={itemData?.label}
            isRequired={itemData?.isRequired}
            errorContent={itemData?.errorContent}
            tableHead={itemData?.tableHead}
            customRowStyle={styles.rowTable}
            widthArr={itemData?.widthArr ?? [WIDTH(35), WIDTH(170), WIDTH(110)]}
            tableData={itemData?.tableData}
            children={
              <XemChiTiet
                label={itemData?.chuThich}
                onPress={itemData?.onGoTo}
              />
            }
          />
        </View>
      )
    case DVMC_TYPE.CAN_BO_PICKER:
      return (
        <View style={styles.viewComponent}>
          <CanBoPicker
            isRequired={itemData?.isRequired}
            label={itemData?.label}
            {...props}
          />
        </View>
      )
    case DVMC_TYPE.IMAGE_PROFILE:
      return (
        <View style={styles.viewComponent}>
          <ImagesPicker />
        </View>
      )
    default:
      return null
  }
}

export default ItemInput

const XemChiTiet = ({
  label,
  onPress,
}: {
  label?: string
  onPress?: () => void
}) => {
  return (
    <View style={styles.viewXemChiTiet}>
      <TouchableOpacity onPress={onPress && onPress}>
        <Text style={styles.textChiTiet}>{label ?? 'Xem chi tiết'}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  textChiTiet: {
    color: R.colors.MAIN_APP_COLOR,
    textDecorationLine: 'underline',
  },
  viewXemChiTiet: {
    alignItems: 'flex-end',
    marginTop: HEIGHT(4),
  },
  textDiem: {
    textAlign: 'center',
    fontSize: getFontSize(15),
    lineHeight: getLineHeight(18),
    color: R.colors.black0,
  },
  viewComponent: { marginBottom: HEIGHT(6) },
  rowTable: {
    minHeight: HEIGHT(50),
    backgroundColor: R.colors.backgroundColorNew,
  },
})
