/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import {
  KE_KHAI_ENUM,
  QUAN_LY_DON_TU,
  popupOk,
  WIDTH,
  DANH_SACH_CHUC_NANG_DON,
  INDEX_TYPE_BY_NAME_QUAN_LY_DON_TU,
  LIST_THE_LOAI_CHUC_NANG_DON,
} from '@/Config'
import AntDesign from 'react-native-vector-icons/AntDesign'
import R from '@/Assets/R'
import styles from './styles'
import ScreenName from '@/Navigators/screenNames'
import { navigate } from '@/Navigators/navigationServices'
import { TabBar, TabView } from 'react-native-tab-view'
import HeaderMain from '@/Components/Header/HeaderMain'
import ThongBao from './ThongBao'
import ChuDauTu from './ChuDauTu'
import CaNhan from './CaNhan'
import GoiThau from './GoiThau'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import axios from 'axios'
import IconSVG from '@/Components/Icons/IconSVG'
import {
  getBoBanNganh,
  getTapDoan,
  getTinhThanh,
  tinhThanhPho,
} from '@/Services/modules/users'

type Props = {
  navigation: any
  route: {
    params: {
      type: string
    }
  }
}

const TabMain: React.FunctionComponent<any> = (props: Props) => {
  useEffect(() => {
    getData()
  }, [])
  const [dataFilter, setDataFilter] = useState({})
  const getData = async () => {
    try {
      const resTinhThanhPho = await getTinhThanh()
      const resBoBanNganh = await getBoBanNganh()
      const resTapDoan = await getTapDoan()
      setDataFilter({
        tinhTP: resTinhThanhPho?.data ?? [],
        boBanNganh: resBoBanNganh?.data ?? [],
        tapDoan: resTapDoan?.data ?? [],
      })
    } catch (error) {}
  }
  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case routes?.[0].key:
        return <GoiThau />
      case routes?.[1].key:
        return <ChuDauTu />
      case routes?.[2].key:
        return <ThongBao />
      case routes?.[3].key:
        return <CaNhan />
    }
    return <></>
  }
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Gói thầu' },
    { key: 'four', title: 'Chủ đầu tư' },
    { key: 'second', title: 'Thông báo' },
    { key: 'third', title: 'Cá nhân' },
  ])
  const layout = useWindowDimensions()
  return (
    <View style={styles.container}>
      <TabView
        keyboardDismissMode="none"
        navigationState={{ index, routes }}
        renderScene={renderScene}
        tabBarPosition="bottom"
        renderTabBar={() => null}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        lazyPreloadDistance={1}
        swipeEnabled={false}
      />
      <TabBarCustom
        routes={routes}
        currentIndex={index}
        onChangeTab={setIndex}
      />
    </View>
  )
}

export default TabMain
const TabBarCustom = props => {
  const { routes, currentIndex, onChangeTab } = props
  return (
    <FlatList
      data={routes}
      style={styles.tabBarCustome}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerTab}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            onChangeTab && onChangeTab(index)
          }}
          style={styles.tab}
        >
          <IconSVG
            iconName={item?.title}
            width={WIDTH(20)}
            height={WIDTH(20)}
            color={
              currentIndex === index
                ? R.colors.MAIN_APP_COLOR
                : R.colors.grey400
            }
          />
          <Text
            style={[
              styles.textFunc,
              {
                color:
                  currentIndex === index
                    ? R.colors.MAIN_APP_COLOR
                    : R.colors.grey400,
              },
            ]}
          >
            {item?.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  )
}
