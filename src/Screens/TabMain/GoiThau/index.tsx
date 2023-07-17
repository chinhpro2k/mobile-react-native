import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import styles from './styles'

import { navigate } from '@/Navigators/navigationServices'
import HeaderMain from '@/Components/Header/HeaderMain'
import ItemTab from './Items/ItemTab'
import ScreenName from '@/Navigators/screenNames'
import { HEIGHT, WIDTH } from '@/Config'
import R from '@/Assets/R'
import { TabView } from 'react-native-tab-view'
import FilterGoiThau from './Items/FilterGoiThau'
import DanhSachGoiThau from './DanhSachGoiThau'
// import FilterChuDauTu from './Items/FilterChuDauTu'
// import NavigationService from '../../../../routers/NavigationService'
// import { DetailNoti } from '../../../../routers/screenNames'
const GoiThau = () => {
  const [index, setIndex] = React.useState(1)
  const [routes] = React.useState([
    { key: 'first', title: 'Tất cả', icon: 'home' },
    { key: 'second', title: 'Quan tâm', icon: 'bells' },
  ])
  const layout = useWindowDimensions()
  const renderTabBar = (props: any) => {
    const dataTabView = props.navigationState.routes
    const indexNow = props.navigationState.index

    return (
      <View style={styles.viewTabBar}>
        <FlatList
          data={dataTabView}
          extraData={dataTabView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.tabBarStyle}
          renderItem={({ item, index }) => {
            const backgroundColor =
              indexNow === index ? R.colors.primaryColor : R.colors.white
            const color =
              indexNow === index ? R.colors.white : R.colors.primaryColor
            const radius = index === 0 ? styles.radiusLeft : styles.radiusRight
            return (
              <TouchableOpacity
                onPress={() => {
                  props?.jumpTo(item?.key)
                }}
                activeOpacity={0.6}
                style={[styles.touchCirle, radius, { backgroundColor }]}
              >
                <Text style={[{ color }]}>{item?.title}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
  const renderScene = ({
    route,
  }: {
    route: { key: string; title: string }
  }) => {
    switch (route.title) {
      case 'Tất cả':
        return <DanhSachGoiThau loaiDuLieu={route.title} />
      case 'Quan tâm':
        return <DanhSachGoiThau loaiDuLieu={route.title} />
      default:
        return <DanhSachGoiThau loaiDuLieu={route.title} />
    }
  }
  return (
    <View style={styles.container}>
      <HeaderMain title="Danh sách gói thầu" />
      <TabView
        swipeEnabled={false}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  )
}

export default GoiThau
