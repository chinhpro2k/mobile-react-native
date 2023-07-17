/* eslint-disable react-hooks/exhaustive-deps */
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import HeaderBase from '@/Components/Header/HeaderBase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { popupCancel, popupOk, QUAN_LY_DON_TU, WIDTH } from '@/Config'
import R from '@/Assets/R'
import { navigate, replace, reset } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
import { authorize, logout } from 'react-native-app-auth'
import { getInfo } from '@/Services/modules/users'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import { showToast, TypeToast } from '@/Components/Popup/Toast'
const LIST_FUNC = [
  {
    title: 'Đơn từ',
    icon: (
      <Entypo name="mail" color={R.colors.MAIN_APP_COLOR} size={WIDTH(20)} />
    ),
  },
  {
    title: 'Thông báo',
    icon: (
      <Entypo name="bell" color={R.colors.MAIN_APP_COLOR} size={WIDTH(20)} />
    ),
  },
  {
    title: 'Thời khoá biểu',
    icon: (
      <FontAwesome5
        name="award"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(20)}
      />
    ),
  },
  {
    title: 'Quản lý quyết định đi công tác trong nước',
    icon: (
      <FontAwesome5
        name="award"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(20)}
      />
    ),
  },
  {
    title: 'Công tác nghiên cứu khoa học',
    icon: (
      <FontAwesome5
        name="award"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(20)}
      />
    ),
  },
  {
    title: 'Thông tin cá nhân',
    icon: (
      <FontAwesome5
        name="user-alt"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(20)}
      />
    ),
  },
  {
    title: 'Hồ sơ cán bộ',
    icon: (
      <FontAwesome5
        name="user-alt"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(20)}
      />
    ),
  },
  {
    title: 'Đổi mật khẩu',
    icon: (
      <Entypo name="key" color={R.colors.MAIN_APP_COLOR} size={WIDTH(20)} />
    ),
  },
  {
    title: 'Đăng xuất',
    icon: (
      <Entypo name="login" color={R.colors.MAIN_APP_COLOR} size={WIDTH(20)} />
    ),
  },
]
const TrangChu = props => {
  useEffect(() => {
    getInit()
  }, [])
  const onRefresh = () => {
    getInit()
  }
  const getInit = async () => {
    try {
      const resUser = await getInfo()
      if (resUser?.data?.data?.isFirstLogin) {
        popupOk(
          'Thông báo',
          'Bạn vui lòng đổi mật khẩu mặc định trong lần đăng nhập đầu tiên để tăng tính bảo mật của hệ thống!',
          () => navigate(ScreenName.DoiMatKhau, { doiLanDau: true, onRefresh }),
        )
      }
    } catch (error) {}
  }
  return (
    <View style={styles.container}>
      <HeaderBase title="Trang chủ" />
      <View style={styles.contentContainer}>
        <FlatList
          data={LIST_FUNC}
          renderItem={({ item, index }) => {
            return <RenderItem item={item} index={index} />
          }}
        />
      </View>
    </View>
  )
}

export default TrangChu
const RenderItem = ({ item, index }: { item: any; index: number }) => {
  return (
    <TouchableOpacity
      onPress={() => onPressFunc(item?.title)}
      activeOpacity={0.6}
      style={styles.itemFunc}
    >
      <View style={styles.viewLabel}>
        <View style={styles.viewIcon}>{item?.icon}</View>
        <Text style={styles.textFunc}>{item?.title}</Text>
      </View>
      <Entypo
        name="chevron-thin-right"
        color={R.colors.grey400}
        size={WIDTH(20)}
      />
    </TouchableOpacity>
  )
}
const onPressFunc = (titleFunc: string) => {
  switch (titleFunc) {
    case 'Đơn từ':
      navigate(ScreenName.DonTu)
      break
    case 'Thông báo':
      navigate(ScreenName.TabMain)
      break
    case 'Đổi mật khẩu':
      navigate(ScreenName.DoiMatKhau)
      break
    case 'Quản lý quyết định đi công tác trong nước':
      navigate(ScreenName.DanhSachChucNangDon, {
        type: QUAN_LY_DON_TU.QUAN_LY_CONG_TAC_TRONG_NUOC,
      })
      break
    case 'Công tác nghiên cứu khoa học':
      navigate(ScreenName.NghienCuuKhoaHoc)
      break
    case 'Hồ sơ cán bộ':
      navigate(ScreenName.HoSoCanBo)
      break
    case 'Đăng xuất': {
      popupCancel('Thông báo', 'Bạn có muốn đăng xuất?', () => logOut())
      break
    }
    default:
      break
  }
}
const logOut = async () => {
  try {
    await AsyncStorageUtils.removeObject(AsyncStorageUtils.KEY.CURRENTTOKEN)
    reset(ScreenName.Login)
  } catch (error) {}
}
