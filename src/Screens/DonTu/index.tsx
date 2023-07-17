import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { KE_KHAI_ENUM, QUAN_LY_DON_TU, popupOk, WIDTH } from '@/Config'
import R from '@/Assets/R'
import styles from './styles'
import ScreenName from '@/Navigators/screenNames'
import { navigate } from '@/Navigators/navigationServices'
const LIST_FUNC = [
  {
    title: QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP,
    icon: (
      <FontAwesome5
        name="calendar-week"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(18)}
      />
    ),
  },
  {
    title: QUAN_LY_DON_TU.NGHI_KHONG_LUONG,
    icon: (
      <FontAwesome5
        name="money-check-alt"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(16)}
      />
    ),
  },
  {
    title: QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU,
    icon: (
      <FontAwesome5
        name="book-medical"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(20)}
      />
    ),
  },
  {
    title: QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN,
    icon: (
      <FontAwesome5
        name="baby-carriage"
        color={R.colors.MAIN_APP_COLOR}
        size={WIDTH(18)}
      />
    ),
  },
]
const DonTu = () => {
  return (
    <View style={styles.container}>
      <HeaderBase title="Đơn từ" />
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

export default DonTu
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
  navigate(ScreenName.DanhSachChucNangDon, { type: titleFunc })
}
