import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import {
  KE_KHAI_ENUM,
  QUAN_LY_DON_TU,
  popupOk,
  WIDTH,
  DANH_SACH_CHUC_NANG_DON,
  INDEX_TYPE_QUAN_LY_DON_TU,
  LIST_THE_LOAI_CHUC_NANG_DON,
  DANH_SACH_THAO_TAC_DON,
  HEIGHT,
  DANH_SACH_BO_LOC_NGHI_KHONG_LUONG,
  DANH_SACH_BO_LOC_NGHI_OM_DAU,
  DANH_SACH_BO_LOC_NGHI_THAI_SAN,
} from '@/Config'
import R from '@/Assets/R'
import styles from './styles'
import ScreenName from '@/Navigators/screenNames'
import { navigate } from '@/Navigators/navigationServices'
import ItemDonXinNghiPhep from './Item/ItemDonXinNghiPhep'
import AddDonBtn from './Item/AddDonBtn'
import ModalBase from '@/Components/Modal'
import { Modal } from 'native-base'

import ItemDonXinNghiKhongLuong from './Item/ItemDonXinNghiKhongLuong'
import DanhSachBoLoc from './Item/DanhSachBoLoc'
import ItemDonXinNghiOmDau from './Item/ItemDonXinNghiOmDau'
import ItemDonXinNghiThaiSan from './Item/ItemDonXinNghiThaiSan'
type Props = {
  type: string
  loaiDanhSach: number
  loaiDon: number
}

const DanhSachDon: React.FunctionComponent<any> = (props: Props) => {
  const type = props?.type
  const loaiDanhSach = props?.loaiDanhSach
  const loaiDon = props?.loaiDon
  const [hideBoLoc, setHideBoLoc] = useState(true)
  const [visible, setVisible] = useState(false)

  const currentItem = useRef<any>({})
  const onPress = (item: any) => {
    // setVisible(true)

    const label = labelChucNang({
      loaidon: loaiDon,
    })
    navigate(ScreenName.ChiTietDon, {
      label,
      thaoTac: DANH_SACH_THAO_TAC_DON.XEM,
      loaiDon: loaiDon,
      data: item,
    })
  }

  const BoLocDon = useCallback(() => {
    switch (loaiDon) {
      case INDEX_TYPE_QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP:
        return <></>
      case INDEX_TYPE_QUAN_LY_DON_TU.NGHI_KHONG_LUONG:
        return (
          <DanhSachBoLoc
            onFilter={onLocDon}
            dataBoLoc={DANH_SACH_BO_LOC_NGHI_KHONG_LUONG}
          />
        )
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU:
        return (
          <DanhSachBoLoc
            onFilter={onLocDon}
            dataBoLoc={DANH_SACH_BO_LOC_NGHI_OM_DAU}
          />
        )
      case INDEX_TYPE_QUAN_LY_DON_TU.QUAN_LY_CONG_TAC_TRONG_NUOC:
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN:
        return (
          <DanhSachBoLoc
            onFilter={onLocDon}
            dataBoLoc={DANH_SACH_BO_LOC_NGHI_THAI_SAN}
          />
        )
      default:
        return <></>
    }
  }, [])
  const onLocDon = useCallback(() => {}, [])
  const renderItem = ({ item, index }: any) => {
    switch (loaiDon) {
      case INDEX_TYPE_QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP:
        return (
          <ItemDonXinNghiPhep
            item={item}
            index={index + 1}
            onPress={() => onPress(item)}
          />
        )
      case INDEX_TYPE_QUAN_LY_DON_TU.NGHI_KHONG_LUONG:
        return (
          <ItemDonXinNghiKhongLuong
            item={item}
            index={index + 1}
            onPress={() => onPress(item)}
          />
        )
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU:
        return (
          <ItemDonXinNghiOmDau
            item={item}
            index={index + 1}
            onPress={() => onPress(item)}
          />
        )
      case INDEX_TYPE_QUAN_LY_DON_TU.QUAN_LY_CONG_TAC_TRONG_NUOC:
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN:
        return (
          <ItemDonXinNghiThaiSan
            item={item}
            index={index + 1}
            onPress={() => onPress(item)}
          />
        )
      default:
        return <Text>{item}</Text>
    }
  }
  const hidingStyle = hideBoLoc ? styles.hide : styles.show
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {loaiDon === INDEX_TYPE_QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP ? null : (
          <>
            <TouchableOpacity
              style={styles.hideBtn}
              onPress={() => setHideBoLoc(!hideBoLoc)}
            >
              <FontAwesome5
                name={hideBoLoc ? 'eye' : 'eye-slash'}
                color={R.colors.grey400}
                size={WIDTH(16)}
                style={styles.iconEye}
              />
              <Text>{hideBoLoc ? 'Hiển thị bộ lọc' : 'Ẩn bộ lọc'}</Text>
            </TouchableOpacity>
            <View style={hidingStyle}>
              <BoLocDon />
            </View>
          </>
        )}

        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3]}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <AddDonBtn
        disable={loaiDanhSach !== LIST_THE_LOAI_CHUC_NANG_DON.DANH_SACH}
        type={loaiDon}
      />
    </View>
  )
}

export default DanhSachDon

const labelChucNang = ({ loaidon }: { loaidon: number }) => {
  const txtLoaiDon = () => {
    switch (loaidon) {
      case INDEX_TYPE_QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP:
        return 'xin nghỉ phép'
      case INDEX_TYPE_QUAN_LY_DON_TU.NGHI_KHONG_LUONG:
        return 'nghỉ không lương'
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU:
        return 'nghỉ ốm/ đau'
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN:
        return 'nghỉ thai sản'
      default:
        return ''
    }
  }

  return 'Xem ' + txtLoaiDon()
}
