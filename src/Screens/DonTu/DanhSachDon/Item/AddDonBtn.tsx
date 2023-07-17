import { StyleSheet, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FAB, Portal } from 'react-native-paper'

// config
import R from '@/Assets/R'
import { navigate } from '@/Navigators/navigationServices'
import {
  DANH_SACH_THAO_TAC_DON,
  HEIGHT,
  INDEX_TYPE_QUAN_LY_DON_TU,
  popupOk,
  WIDTH,
} from '@/Config'
import { boolean } from 'yup'
import ScreenName from '@/Navigators/screenNames'
type Props = {
  disable: boolean
  type: number
}
const AddDonBtn = ({ disable, type }: Props) => {
  const goTo = () => {
    switch (type) {
      case INDEX_TYPE_QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP:
        navigate(ScreenName.ChiTietDon, {
          label: 'Thêm mới giấy nghỉ phép',
          thaoTac: DANH_SACH_THAO_TAC_DON.THEM,
          loaiDon: type,
        })
        break
      case INDEX_TYPE_QUAN_LY_DON_TU.NGHI_KHONG_LUONG:
        navigate(ScreenName.ChiTietDon, {
          label: 'Thêm mới nghỉ không lương',
          thaoTac: DANH_SACH_THAO_TAC_DON.THEM,
          loaiDon: type,
        })
        break
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU:
        navigate(ScreenName.ChiTietDon, {
          label: 'Thêm mới nghỉ ốm/ đau',
          thaoTac: DANH_SACH_THAO_TAC_DON.THEM,
          loaiDon: type,
        })
        break
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN:
        navigate(ScreenName.ChiTietDon, {
          label: 'Thêm mới nghỉ thai sản',
          thaoTac: DANH_SACH_THAO_TAC_DON.THEM,
          loaiDon: type,
        })
        break
      case INDEX_TYPE_QUAN_LY_DON_TU.QUAN_LY_CONG_TAC_TRONG_NUOC:
        navigate(ScreenName.ChiTietDon, {
          label: 'Thêm mới đăng ký công tác trong nước',
          thaoTac: DANH_SACH_THAO_TAC_DON.THEM,
          loaiDon: type,
        })
        break
      default:
        popupOk('Thông báo', 'Chức năng chưa phát triển')
        break
    }
  }
  if (disable) {
    return <></>
  }
  return (
    <FAB
      style={styles.fabStyle}
      small
      icon="plus"
      color={R.colors.white100}
      onPress={goTo}
    />
  )
}

export default AddDonBtn

const styles = StyleSheet.create({
  fabStyle: {
    backgroundColor: R.colors.primaryColor,
    marginBottom: HEIGHT(60),
    marginRight: WIDTH(30),
    width: WIDTH(40),
    height: WIDTH(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH(40),
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
})
