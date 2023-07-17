/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getPhuongXa, getQuanHuyen, getTinhTP } from '@/Services/modules/users'
import R from '@/Assets/R'
import InputBase from '../Input/InputDVHC'
import {
  CAP_DON_VI_HANH_CHINH,
  getFontSize,
  getLineHeight,
  getWidth,
  HEIGHT,
  WIDTH,
} from '@/Config'
import Picker from '../Picker/PickerDonViHC'
import { WarningOutlineIcon } from 'native-base'
type PROPS = {
  title?: string
  customWidth: any
  borderColor?: string
  disabled?: boolean
  onChangeValue: (value: any) => void
  defaultValue?: any
  belongTo?: any
  capDonViHanhChinh: number
  isNotRequired?: boolean
  showInput?: boolean
  errorContent?: string
}
const DonViHanhChinh = (props: PROPS) => {
  const {
    title,
    customWidth,
    borderColor,
    disabled,
    onChangeValue,
    defaultValue,
    belongTo,
    errorContent,
    capDonViHanhChinh,
    isNotRequired,
    showInput,
  } = props
  // console.log('defaultValue', defaultValue)
  const [listThanhPho, setListThanhPho] = useState(['Chọn Thành Phố'])
  const [tenTP, setTenTP] = useState('Chọn Thành Phố')
  const [listQuanHuyen, setListQuanHuyen] = useState(['Chọn Quận Huyện'])
  const [tenQH, setTenQH] = useState('Chọn Quận Huyện')
  const [listPhuongXa, setListPhuongXa] = useState(['Chọn Phường Xã'])
  const [tenPX, setTenPX] = useState('Chọn Phường Xã')
  const [diaChi, setDiaChi] = useState(defaultValue?.soNhaTenDuong ?? '')
  const [listPickerData, setListPickerData] = useState<any>([])
  const donViHanhChinh = useRef<object>({
    maTinh: '',
    tenTinh: '',
    maQuanHuyen: '',
    tenQuanHuyen: '',
    maPhuongXa: '',
    tenPhuongXa: '',
  })

  useEffect(() => {
    getTinhThanhPho()
  }, [defaultValue])

  const getTinhThanhPho = async () => {
    try {
      let [
        listTP,
        listQH,
        listPX,
        pickerData,
        tenTinhTP,
        tenQuanHuyen,
        tenPhuongXa,
      ]: [string[], string[], string[], string[], string, string, string] = [
        [],
        [],
        [],
        [],
        '',
        '',
        '',
      ]
      const responseTP = await getTinhTP()
      listTP = responseTP.data.data.map((itemTP: any) => itemTP?.tenDonVi)
      listTP.unshift('Chọn Thành Phố')
      pickerData.push(responseTP.data.data)
      const itemTP = findDonViByID(responseTP.data.data, defaultValue?.maTinh)
      tenTinhTP = itemTP?.tenDonVi ?? 'Chọn Thành Phố'
      setTenTP(tenTinhTP)
      setListThanhPho(listTP)

      const responseQuanHuyen = await getQuanHuyen(defaultValue?.maTinh)
      pickerData.push(responseQuanHuyen.data.data)
      listQH = responseQuanHuyen.data.data.map(
        (itemQH: any) => itemQH?.tenDonVi,
      )
      listQH.unshift('Chọn Quận Huyện')
      const itemQH = findDonViByID(
        responseQuanHuyen.data.data,
        defaultValue?.maQuanHuyen,
      )
      tenQuanHuyen = itemQH?.tenDonVi ?? 'Chọn Quận Huyện'
      setTenQH(tenQuanHuyen)
      setListQuanHuyen(listQH)

      if (defaultValue?.maQuanHuyen && defaultValue?.maQuanHuyen !== '') {
        const responsePhuongXa = await getPhuongXa(defaultValue?.maQuanHuyen)
        pickerData.push(responsePhuongXa.data.data)
        listPX = responsePhuongXa.data.data.map(
          (itemPX: any) => itemPX?.tenDonVi,
        )
        listPX.unshift('Chọn Phường Xã')
        const itemPX = findDonViByID(
          responsePhuongXa.data.data,
          defaultValue?.maPhuongXa,
        )
        tenPhuongXa = itemPX?.tenDonVi ?? 'Chọn Phường Xã'
        setTenPX(tenPhuongXa)
        setListPhuongXa(listPX)
      }

      setListPickerData(pickerData)
      setDiaChi(defaultValue?.soNhaTenDuong ?? '')
    } catch (error) {
      console.log('err')
    }
  }

  const findDonViByID = (listDonVi: any, ma: string) => {
    const itemDV = listDonVi.find((donVi: any) => donVi?.ma === `${ma}`)
    return itemDV
  }

  const findDonViByName = (listDonVi: any, name: string) => {
    const itemDV = listDonVi.find((donVi: any) => donVi?.tenDonVi === `${name}`)
    return itemDV
  }

  const onChangeTP = async (value: string) => {
    let [listQH, pickerData] = [[...listQuanHuyen], [...listPickerData]]
    if (value !== 'Chọn Thành Phố') {
      try {
        const itemTP = findDonViByName(pickerData[0], value)
        const responseQuanHuyen = await getQuanHuyen(itemTP?.ma)
        pickerData.splice(1, 1, responseQuanHuyen.data.data)
        pickerData.splice(2, 1, [])
        listQH = responseQuanHuyen.data.data.map(
          (itemQH: any) => itemQH?.tenDonVi,
        )
        listQH.unshift('Chọn Quận Huyện')
        const newDVHC = {
          maTinh: itemTP?.ma,
          tenTinh: itemTP?.tenDonVi,
          maQuanHuyen: '',
          tenQuanHuyen: '',
          maPhuongXa: '',
          tenPhuongXa: '',
        }
        donViHanhChinh.current = newDVHC
        onChangeValue(donViHanhChinh.current)
      } catch (error) {}
    } else {
      listPickerData.splice(1, 1, ['Chọn Quận Huyện'])
      listPickerData.splice(2, 1, ['Chọn Phường Xã'])
      const newDVHC = {
        maTinh: '',
        tenTinh: '',
        maQuanHuyen: '',
        tenQuanHuyen: '',
        maPhuongXa: '',
        tenPhuongXa: '',
      }
      donViHanhChinh.current = newDVHC
      onChangeValue(donViHanhChinh.current)
    }
    setTenQH('Chọn Quận Huyện')
    setTenTP(value)
    setListPickerData(pickerData)
    setListQuanHuyen(listQH)
    setTenPX('Chọn Phường Xã')
    setListPhuongXa(['Chọn Phường Xã'])
  }

  const onChangeQH = async (value: string) => {
    let [listPX, pickerData] = [[...listPhuongXa], [...listPickerData]]
    if (value !== 'Chọn Quận Huyện') {
      try {
        const itemQH = findDonViByName(listPickerData[1], value)
        const responsePX = await getPhuongXa(itemQH?.ma)
        pickerData.splice(2, 1, responsePX.data.data)
        listPX = responsePX.data.data.map((item: any) => item?.tenDonVi)
        listPX.unshift('Chọn Phường Xã')
        const newDVHC = {
          ...donViHanhChinh.current,
          maQuanHuyen: itemQH?.ma,
          tenQuanHuyen: itemQH?.tenDonVi,
          maPhuongXa: '',
          tenPhuongXa: '',
        }
        donViHanhChinh.current = newDVHC
        onChangeValue(donViHanhChinh.current)
      } catch (error) {}
    } else {
      listPickerData.splice(2, 1, [])
      const newDVHC = {
        ...donViHanhChinh.current,
        maQuanHuyen: '',
        tenQuanHuyen: '',
        maPhuongXa: '',
        tenPhuongXa: '',
      }
      donViHanhChinh.current = newDVHC
      onChangeValue(donViHanhChinh.current)
    }

    setTenQH(value)
    setTenPX('Chọn Phường Xã')
    setListPickerData(pickerData)
    setListPhuongXa(listPX)
  }

  const onChangePX = (value: string) => {
    if (value !== 'Chọn Phường Xã') {
      const itemPX = findDonViByName(listPickerData[2], value)
      setTenPX(value)
      const newDVHC = {
        ...donViHanhChinh.current,
        maPhuongXa: itemPX?.ma,
        tenPhuongXa: itemPX?.tenDonVi,
      }
      donViHanhChinh.current = newDVHC
      onChangeValue(donViHanhChinh.current)
    } else {
      const newDVHC = {
        ...donViHanhChinh.current,
        maPhuongXa: '',
        tenPhuongXa: '',
      }
      donViHanhChinh.current = newDVHC
      onChangeValue(donViHanhChinh.current)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text} testID={`Text ${title}`}>
        {title ?? 'Địa chỉ liên hệ'}
        {!isNotRequired && <Text style={styles.required}> *</Text>}
      </Text>
      <Picker
        // testString={`${title}_${'Chọn Thành Phố'}${belongTo || ''}`}
        placeholder={'Chọn Thành Phố'}
        defaultValue={tenTP}
        height={45}
        width={customWidth ?? getWidth()}
        data={listThanhPho?.map(item => {
          return { label: item, value: item }
        })}
        onChangeValue={onChangeTP}
        containerStyle={[styles.customStyle, { borderColor }]}
        // noShadow
        // enabled={!disabled}
        hidden={capDonViHanhChinh < CAP_DON_VI_HANH_CHINH.TINH}
      />
      <Picker
        // testString={`${title}_${'Chọn Quận Huyện'}${belongTo || ''}`}
        placeholder={'Chọn Quận Huyện'}
        defaultValue={tenQH}
        height={45}
        width={customWidth ?? getWidth()}
        data={listQuanHuyen?.map(item => {
          return { label: item, value: item }
        })}
        onChangeValue={onChangeQH}
        containerStyle={[styles.customStyle, { borderColor }]}
        // noShadow
        // enabled={!disabled && tenTP !== 'Chọn Thành Phố'}
        hidden={capDonViHanhChinh < CAP_DON_VI_HANH_CHINH.HUYEN}
      />
      <Picker
        // testString={`${title}_${'Chọn Phường Xã'}${belongTo || ''}`}
        placeholder={'Chọn Phường Xã'}
        defaultValue={tenPX}
        height={45}
        width={customWidth ?? getWidth()}
        data={listPhuongXa?.map(item => {
          return { label: item, value: item }
        })}
        onChangeValue={onChangePX}
        containerStyle={[styles.customStyle, { borderColor }]}
        // noShadow
        // enabled={
        //   !disabled && tenQH !== 'Chọn Quận Huyện' && tenTP !== 'Chọn Thành Phố'
        // }
        hidden={capDonViHanhChinh < CAP_DON_VI_HANH_CHINH.XA}
      />
      <InputArea
        showInput={
          capDonViHanhChinh >= CAP_DON_VI_HANH_CHINH.SO_NHA || showInput
        }
        diaChi={diaChi}
        customStyle={[styles.customStyle, { borderColor }]}
        customWidth={customWidth ?? getWidth()}
        // disabled={disabled}
        belongTo={belongTo}
        title={title ?? 'hehe'}
        onValueChange={(text: string) => {
          setDiaChi(text)
          const newDVHC = {
            ...donViHanhChinh.current,
            soNhaTenDuong: text,
          }
          donViHanhChinh.current = newDVHC
          onChangeValue(donViHanhChinh.current)
        }}
      />
      {!!errorContent && (
        <View style={styles.viewError}>
          <WarningOutlineIcon size="xs" color="#F72504" />
          <Text style={styles.errorContent}> {errorContent}</Text>
        </View>
      )}
      {/* <Text>DonViHanhChinh</Text> */}
    </View>
  )
}

export default DonViHanhChinh
const InputArea = ({
  title,
  showInput,
  diaChi,
  disabled,
  onValueChange,
  belongTo,
  // customWidth,
  customStyle,
}: {
  title?: string
  showInput?: boolean
  diaChi?: string
  disabled?: boolean
  onValueChange: (value: string) => void
  belongTo?: any
  customWidth?: string
  customStyle?: any
}) => {
  if (showInput) {
    // const opacity = disabled ? (Platform.OS === 'ios' ? 0.8 : 0.6) : 1
    // const borderColor = disabled ? R.colors.grey400 : R.colors.grey400
    return (
      <InputBase
        // testID={title}
        // autoFocus={true}
        containerStyle={customStyle}
        testID={`${title}${belongTo || ''}`}
        onChangeText={(text: string) => onValueChange(text)}
        editable={!disabled}
        placeholder={'Địa chỉ'}
        value={diaChi}
        defaultValue={diaChi}
        maxLength={2000}
        contextMenuHidden
        // containerStyle={styles.input}
      />
    )
  } else {
    return <View />
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  text: {
    // fontSize: getFontSize(16),
    // fontFamily: R.fonts.Roboto,
    lineHeight: getLineHeight(24),
    // marginBottom: HEIGHT(8),
    // marginTop: HEIGHT(10),
    // color: R.colors.red800,
    marginBottom: HEIGHT(6),
    fontSize: getFontSize(14),
    color: R.colors.grey800,
  },
  viewError: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: HEIGHT(4),
  },
  errorContent: {
    fontSize: getFontSize(12),
    color: '#F72504',
  },
  customStyle: {
    width: WIDTH(319),
    overflow: 'hidden',
    borderRadius: WIDTH(8),
    height: HEIGHT(40),
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: HEIGHT(8),
  },
  input: {
    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingHorizontal: WIDTH(10),
    width: WIDTH(332),
    borderRadius: WIDTH(8),
    minHeight: 45,
    borderWidth: WIDTH(1),
    borderColor: R.colors.red101,
    alignSelf: 'center',
    color: R.colors.black0,
    backgroundColor: R.colors.white,
  },
  required: {
    color: R.colors.red900,
  },
})
