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
import FilterChuDauTu from './Items/FilterChuDauTu'
import R from '@/Assets/R'
import { TabView } from 'react-native-tab-view'
import { HEIGHT, WIDTH } from '@/Config'
import DanhSachChuDauTu from './DanhSachChuDauTu'
const ChuDauTu = ({ dataFilter }: any) => {
  const [index, setIndex] = React.useState(1)
  const [routes] = React.useState([
    { key: 'first', title: 'Tất cả', icon: 'home' },
    { key: 'second', title: 'Quan tâm', icon: 'bells' },
  ])
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
        return (
          <DanhSachChuDauTu dataFilter={dataFilter} loaiDuLieu={route.title} />
        )

      case 'Quan tâm':
        return (
          <DanhSachChuDauTu dataFilter={dataFilter} loaiDuLieu={route.title} />
        )

      default:
        return <DanhSachChuDauTu loaiDuLieu={route.title} />
    }
  }
  const layout = useWindowDimensions()
  return (
    <View style={styles.container}>
      <HeaderMain title="Danh sách chủ đầu tư" />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        swipeEnabled={false}
        // style={{ backgroundColor: R.colors.red }}
      />
      {/* <FlatList
        data={listThongBao}
        extraData={listThongBao}
        // keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ItemTab
            itemTab={item}
            onReadNoti={() => navigate(ScreenName.ChiTietChuDauTu)}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        // onEndReached={loadMoreData}
        onEndReachedThreshold={0.01}
        onMomentumScrollBegin={() => {
          beginScroll.current = true
        }}
        // onRefresh={getData}
      /> */}
    </View>
  )
}

export default ChuDauTu
