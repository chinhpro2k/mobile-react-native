import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import R from '@/Assets/R'
import { HEIGHT, WIDTH, popupCancel, popupOk, getLogoutMessage } from '@/Config'
import { TouchableOpacity, View } from 'react-native'
import HeaderMain from '@/Components/Header/HeaderMain'
import styles from './styles'
import { Avatar, FlatList, Text } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import ScreenName from '@/Navigators/screenNames'
import { reset } from '@/Navigators/navigationServices'
import { logOut } from '@/Services/modules/users'
const LIST_FUNC = [
  {
    title: 'Đăng xuất',
    icon: (
      <Entypo name="login" color={R.colors.MAIN_APP_COLOR} size={WIDTH(20)} />
    ),
  },
]
const CaNhan = () => {
  const [accountUser, setaccountUser] = useState<any>()
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const account: any = await AsyncStorageUtils.getObject(
        AsyncStorageUtils.KEY.CURRENTTOKEN,
      )
      setaccountUser(account?.user)
    } catch (error) {}
  }
  return (
    <View style={styles.container}>
      <HeaderMain title="Cá nhân" />
      <View style={styles.viewAva}>
        <TouchableOpacity>
          <Avatar
            bg={R.colors.primaryColor}
            source={R.images.logoApp}
            alignSelf="center"
            size="2xl"
            mt={HEIGHT(20)}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{accountUser?.username}</Text>
        <View style={styles.contentContainer}>
          <FlatList
            data={LIST_FUNC}
            renderItem={({ item, index }) => {
              return <RenderItem item={item} index={index} />
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default CaNhan
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
    case 'Đăng xuất': {
      popupCancel('Thông báo', 'Bạn có muốn đăng xuất?', () =>
        logOutMuaSamCong(),
      )
      break
    }
    default:
      break
  }
}
const logOutMuaSamCong = async () => {
  try {
    const res = await logOut()
    if (res.statusCode === 201) {
      await AsyncStorageUtils.removeObject(AsyncStorageUtils.KEY.CURRENTTOKEN)
      reset(ScreenName.Login)
    } else {
      popupOk('Thông báo', getLogoutMessage(res?.statusCode))
    }
  } catch (error) {}
}
