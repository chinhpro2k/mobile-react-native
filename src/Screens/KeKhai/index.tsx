import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { KE_KHAI_ENUM, popupOk, WIDTH } from '@/Config'
import R from '@/Assets/R'
import styles from './styles'
import ScreenName from '@/Navigators/screenNames'
import { navigate } from '@/Navigators/navigationServices'
const LIST_FUNC = [
  {
    title: KE_KHAI_ENUM.GIAI_THUONG_KHOA_HOC,
    icon: (
      <FontAwesome5
        name="user-alt"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(20)}
      />
    ),
  },
  {
    title: KE_KHAI_ENUM.SACH_TAP_CHI,
    icon: (
      <Entypo name="key" color={R.colors.MAIN_APP_COLOR} size={WIDTH(20)} />
    ),
  },
  {
    title: KE_KHAI_ENUM.BAI_BAO_BAO_CAO,
    icon: (
      <Entypo name="login" color={R.colors.MAIN_APP_COLOR} size={WIDTH(20)} />
    ),
  },
]
const NghienCuuKhoaHoc = () => {
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

export default NghienCuuKhoaHoc
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
    case KE_KHAI_ENUM.GIAI_THUONG_KHOA_HOC:
      navigate(ScreenName.KeKhaiGiaiThuong)
      break
    case KE_KHAI_ENUM.SACH_TAP_CHI:
      navigate(ScreenName.KeKhaiSachTapChi)
      break
    case KE_KHAI_ENUM.BAI_BAO_BAO_CAO:
      navigate(ScreenName.KeKhaiBaiBaoBaoCao)
      break
    default:
      break
  }
}
