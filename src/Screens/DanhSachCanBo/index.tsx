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

import ModalBase from '@/Components/Modal'
import { Modal } from 'native-base'
import ItemCanBo from './Item/ItemCanBo'

type Props = {
  navigation: any
  route: {
    params: {
      onAdd: (item: any) => void
    }
  }
}

const DanhSachCanBo: React.FunctionComponent<any> = (props: Props) => {
  const onAdd = props.route.params.onAdd ?? null

  return (
    <View style={styles.container}>
      <HeaderBase title={'Chọn cán bộ'} />

      <View style={styles.contentContainer}>
        <Text style={styles.headerList}>{'Danh sách cán bộ'}</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3]}
          renderItem={({ item, index }) => (
            <ItemCanBo
              item={item}
              index={index + 1}
              onPress={() => onAdd(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default DanhSachCanBo
