import {
  StyleSheet,
  Linking,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native'
import React, { memo, useState, useEffect, useRef } from 'react'
import { FAB, Portal } from 'react-native-paper'
import { Dropdown, MultiSelect } from 'react-native-element-dropdown'
// config
import R from '@/Assets/R'
import { navigate } from '@/Navigators/navigationServices'
import {
  DANH_SACH_BO_LOC_NGHI_KHONG_LUONG,
  DANH_SACH_KIEU_LOC_DON,
  DANH_SACH_THAO_TAC_DON,
  getFontSize,
  HEIGHT,
  INDEX_TYPE_QUAN_LY_DON_TU,
  LOAI_LOC_THEO_THOI_GIAN,
  WIDTH,
} from '@/Config'
import Feather from 'react-native-vector-icons/Feather'
import { Modal, View } from 'native-base'
import DatePickerNew from '@/Components/Picker/DatePickerNew'
type Props = {
  onFilter: (data: any) => void
  dataBoLoc: Array<any>
}
type ListTypeLoc = Array<TypeLoc>
type TypeLoc = {
  _id: string
  name: string
  type: number
}

const FormBoLoc = ({
  item,
  index,
  danhSachBoLoc,
  onXoa = () => null,
  onChangeBoLoc = () => null,
}: {
  item: TypeLoc
  index: number
  danhSachBoLoc: Array<any>
  onXoa: (index: number) => void
  onChangeBoLoc: (index: number, item: any) => void
}) => {
  const [isFocus, setIsFocus] = useState(false)
  switch (item.type) {
    case DANH_SACH_KIEU_LOC_DON.NULL:
      return (
        <View style={styles.boLocContainer}>
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
            search
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            dropdownPosition={'auto'}
            data={danhSachBoLoc}
            labelField={'name'}
            valueField={'type'}
            placeholder={'Chọn trường cần lọc'}
            searchPlaceholder="Tìm kiếm ..."
            // value={data}
            onChange={(itemPicker: any) => {
              onChangeBoLoc(index, itemPicker)
            }}
          />
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => onXoa(index)}
          >
            <Feather name="trash-2" color={R.colors.red600} size={WIDTH(20)} />
          </TouchableOpacity>
        </View>
      )
    case DANH_SACH_KIEU_LOC_DON.TEXT_INPUT:
      return (
        <View style={[styles.boLocContainer, { flexDirection: 'column' }]}>
          <Text>{item.name}:</Text>
          <View style={styles.boLocContainer}>
            <TextInput
              style={[
                styles.input,
                isFocus && { borderColor: R.colors.MAIN_APP_COLOR },
              ]}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={text => {}}
              placeholder={`Nhập ${item?.name}`}
            />
            <TouchableOpacity
              style={styles.containerIcon}
              onPress={() => onXoa(index)}
            >
              <Feather
                name="trash-2"
                color={R.colors.red600}
                size={WIDTH(20)}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    case DANH_SACH_KIEU_LOC_DON.PICKER:
      return (
        <View style={[styles.boLocContainer, { flexDirection: 'column' }]}>
          <Text>{item.name}:</Text>
          <View style={styles.boLocContainer}>
            <Dropdown
              style={[
                styles.input,
                isFocus && { borderColor: R.colors.MAIN_APP_COLOR },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              confirmSelectItem={true}
              iconStyle={styles.iconStyle}
              search
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              dropdownPosition={'auto'}
              data={danhSachBoLoc}
              labelField={'name'}
              valueField={'type'}
              placeholder={`Chọn ${item?.name}`}
              searchPlaceholder="Tìm kiếm ..."
              // value={data}
              onChange={(itemPicker: any) => {
                // onChangeBoLoc(index, itemPicker)
              }}
            />
            <TouchableOpacity
              style={styles.containerIcon}
              onPress={() => onXoa(index)}
            >
              <Feather
                name="trash-2"
                color={R.colors.red600}
                size={WIDTH(20)}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    case DANH_SACH_KIEU_LOC_DON.DATE:
      return (
        <View style={[styles.boLocDateContainer]}>
          <Text>{item.name} :</Text>
          <View style={styles.locDateContainer}>
            <DatePickerNew
              containerStyle={styles.inputDate}
              isRequired={false}
              mode={'date'}
              value={new Date()}
              onDateChange={time => console.log('time', time)}
            />
            <Dropdown
              style={[
                styles.inputDateFilter,
                isFocus && { borderColor: R.colors.MAIN_APP_COLOR },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              confirmSelectItem={true}
              iconStyle={styles.iconStyle}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              dropdownPosition={'auto'}
              data={LOAI_LOC_THEO_THOI_GIAN}
              labelField={'title'}
              valueField={'value'}
              placeholder={`Thứ tự lọc`}
              searchPlaceholder="Tìm kiếm ..."
              // value={data}
              onChange={(itemPicker: any) => {
                // onChangeBoLoc(index, itemPicker)
              }}
            />
            <TouchableOpacity
              style={styles.containerIcon}
              onPress={() => onXoa(index)}
            >
              <Feather
                name="trash-2"
                color={R.colors.red600}
                size={WIDTH(20)}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    case DANH_SACH_KIEU_LOC_DON.MIN_MAX_NUMBER:
      return (
        <View style={[styles.boLocDateContainer]}>
          <Text>{item.name} :</Text>
          <View style={styles.locDateContainer}>
            <TextInput
              style={[
                styles.twoInput,
                isFocus && { borderColor: R.colors.MAIN_APP_COLOR },
              ]}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={text => {}}
              placeholder={`Từ`}
            />
            <View style={styles.seperator}></View>
            <TextInput
              style={[
                styles.twoInput,
                isFocus && { borderColor: R.colors.MAIN_APP_COLOR },
              ]}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={text => {}}
              placeholder={`Đến`}
            />
            <TouchableOpacity
              style={styles.containerIcon}
              onPress={() => onXoa(index)}
            >
              <Feather
                name="trash-2"
                color={R.colors.red600}
                size={WIDTH(20)}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    case DANH_SACH_KIEU_LOC_DON.MIN_MAX_DATE:
      return (
        <View style={[styles.boLocDateContainer]}>
          <Text>{item.name} :</Text>
          <View style={styles.locDateContainer}>
            <DatePickerNew
              containerStyle={styles.twoInput}
              isRequired={false}
              mode={'date'}
              value={new Date()}
              onDateChange={time => console.log('time', time)}
            />
            <View style={styles.seperator}></View>
            <DatePickerNew
              containerStyle={styles.twoInput}
              isRequired={false}
              mode={'date'}
              value={new Date()}
              onDateChange={time => console.log('time', time)}
            />
            <TouchableOpacity
              style={styles.containerIcon}
              onPress={() => onXoa(index)}
            >
              <Feather
                name="trash-2"
                color={R.colors.red600}
                size={WIDTH(20)}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    default:
      return (
        <View>
          <Text>{item.name}</Text>
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => onXoa(index)}
          >
            <Feather name="trash-2" color={R.colors.red600} size={WIDTH(20)} />
          </TouchableOpacity>
        </View>
      )
  }
}
const DanhSachBoLoc = ({ dataBoLoc, onFilter = () => null }: Props) => {
  const dataLoc = useRef({})
  const danhSachBoLoc = useRef<any>(dataBoLoc ?? [])
  const [listBoLoc, setListBoLoc] = useState<ListTypeLoc>([
    {
      _id: 'canBo',
      name: 'Cán bộ',
      type: DANH_SACH_KIEU_LOC_DON.PICKER,
    },
    {
      _id: 'donVi',
      name: 'Đơn vị',
      type: DANH_SACH_KIEU_LOC_DON.PICKER,
    },
  ])
  const addBoLoc = () => {
    setListBoLoc([
      ...listBoLoc,
      {
        _id: '',
        name: '',
        type: DANH_SACH_KIEU_LOC_DON.NULL,
      },
    ])
  }
  const onXoaBoLoc = (index: number) => {
    const newList = listBoLoc
    if (listBoLoc?.[index].type !== DANH_SACH_KIEU_LOC_DON.NULL) {
      danhSachBoLoc.current.push({
        name: listBoLoc[index]?.name,
        type: { ...listBoLoc[index] },
      })
    }
    newList.splice(index, 1)
    setListBoLoc([...newList])
  }
  const onChangeBoLoc = (index: number, item: any) => {
    const newList = listBoLoc
    danhSachBoLoc.current.splice(item._index, 1)
    newList.splice(index, 1, item.type)
    setListBoLoc([...newList])
  }
  return (
    <View>
      <FlatList
        data={listBoLoc}
        extraData={listBoLoc}
        style={{ alignSelf: 'flex-start' }}
        renderItem={({ item, index }) => (
          <FormBoLoc
            danhSachBoLoc={danhSachBoLoc.current}
            item={item}
            index={index}
            onXoa={onXoaBoLoc}
            onChangeBoLoc={onChangeBoLoc}
          />
        )}
      />
      <View style={styles.twoBtn}>
        <TouchableOpacity onPress={addBoLoc} style={styles.btnAdd}>
          <Text style={styles.btnTxtAdd}>Thêm điều kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onFilter('')} style={styles.btn}>
          <Text style={styles.btnTxt}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(DanhSachBoLoc)

const styles = StyleSheet.create({
  boLocContainer: {
    flexDirection: 'row',
    marginTop: HEIGHT(8),
    // alignItems: 'center',
    // marginBottom: HEIGHT(8),
    width: WIDTH(343),
  },
  boLocDateContainer: {
    alignItems: 'flex-start',
    marginBottom: HEIGHT(4),
    marginTop: HEIGHT(4),
    width: WIDTH(343),
  },
  locDateContainer: {
    flexDirection: 'row',
    marginTop: HEIGHT(8),
  },
  headerTxt: {
    color: R.colors.primaryColor,
    fontWeight: 'bold',
    fontSize: getFontSize(18),
  },
  headerContainer: {
    backgroundColor: R.colors.white,
    width: WIDTH(330),
    borderTopEndRadius: WIDTH(8),
    borderTopStartRadius: WIDTH(8),
    alignItems: 'center',
    paddingBottom: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
    flexDirection: 'row',
  },
  twoBtn: {
    paddingBottom: HEIGHT(8),
    // paddingHorizontal: WIDTH(16),
    flexDirection: 'row',
    // paddingTop: WIDTH(4),
    justifyContent: 'space-around',
  },
  titleIcon: {
    marginTop: HEIGHT(8),
  },
  containerIcon: {
    marginLeft: HEIGHT(8),
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: R.colors.primaryColor,
    alignSelf: 'center',
    marginTop: HEIGHT(20),
    borderRadius: WIDTH(8),
    width: WIDTH(140),
    height: HEIGHT(44),
    padding: WIDTH(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAdd: {
    borderColor: R.colors.primaryColor,
    backgroundColor: R.colors.white100,
    borderWidth: WIDTH(1),
    alignSelf: 'center',
    marginTop: HEIGHT(20),
    borderRadius: WIDTH(8),
    width: WIDTH(140),
    height: HEIGHT(44),
    padding: WIDTH(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: R.colors.white100,
    // fontWeight: 'bold',
    fontSize: getFontSize(16),
  },
  btnTxtAdd: {
    color: R.colors.primaryColor,
    // fontWeight: 'bold',
    fontSize: getFontSize(16),
  },
  placeholderStyle: {
    fontSize: getFontSize(12),
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
  dropdown: {
    height: HEIGHT(40),
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: WIDTH(8),
    marginBottom: HEIGHT(4),

    borderRadius: WIDTH(8),
    width: WIDTH(300),
  },
  input: {
    height: HEIGHT(40),
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: WIDTH(8),
    marginBottom: HEIGHT(4),
    // marginTop: HEIGHT(4),
    // marginLeft: WIDTH(4),
    borderRadius: WIDTH(8),
    width: WIDTH(300),
  },
  inputDate: {
    height: HEIGHT(40),
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: WIDTH(8),
    marginBottom: HEIGHT(4),
    // marginTop: HEIGHT(4),
    // marginLeft: WIDTH(4),
    borderRadius: WIDTH(8),
    width: WIDTH(160),
  },
  twoInput: {
    height: HEIGHT(40),
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: WIDTH(8),
    marginBottom: HEIGHT(4),
    // marginTop: HEIGHT(4),
    // marginLeft: WIDTH(4),
    borderRadius: WIDTH(8),
    width: WIDTH(146),
  },
  seperator: {
    width: WIDTH(8),
  },
  inputDateFilter: {
    height: HEIGHT(40),
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: WIDTH(8),
    marginBottom: HEIGHT(4),
    marginLeft: WIDTH(4),
    borderRadius: WIDTH(8),
    width: WIDTH(136),
    marginTop: HEIGHT(4),
  },
})
