/* eslint-disable react-hooks/exhaustive-deps */
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

import { goBack, navigate } from '@/Navigators/navigationServices'
import HeaderMain from '@/Components/Header/HeaderMain'

import ScreenName from '@/Navigators/screenNames'
import R from '@/Assets/R'
import { HEIGHT, WIDTH, getFontSize, popupOk, findObject } from '@/Config'
import { Divider } from 'native-base'
import HeaderBase from '@/Components/Header/HeaderBase'
import {
  chiTietChuDauTu,
  coQuan,
  coQuanChuQuan,
  loaiHinhPhapLy,
  quocGia,
  tinhThanhPho,
  trangThaiHoatDong,
} from '@/Services/modules/users'
import LoadingComponent from '@/Components/LoadingComponent'
import moment from 'moment'
import { TabView } from 'react-native-tab-view'
import DanhSachGoiThau from '../TabMain/GoiThau/DanhSachGoiThau'

const formatData = (data: any) => {
  return [
    {
      title: 'Thông tin thành lập',
      exTraData: [
        {
          title: 'Tên đơn vị (đầy đủ)',
          value: data?.orgFullName,
        },
        {
          title: 'Tên đơn vị (tiếng Anh)',
          value: data?.orgEnName,
        },
        {
          title: 'Mã định danh',
          value: data?.orgCode,
        },
        {
          title: 'Loại hình pháp lý',
          value: data?.loaiHinhPhapLy, //chua biet
        },
        {
          title: 'Mã số thuế',
          value: data?.taxCode,
        },
        {
          title: 'Ngày cấp',
          value: data?.taxDate
            ? moment(new Date(data?.taxDate)).format('DD/MM/YYYY')
            : '', //chua biet
        },
        {
          title: 'Quốc gia cấp',
          value: data?.taxNation, //chua biet
        },
      ],
    },
    {
      title: 'Tình trạng hoạt động',
      exTraData: [
        {
          title: 'Ngày phê duyệt yêu cầu đăng ký',
          value: data?.ngayDuyet, //data?.orgFullName, //chua biet
        },
        {
          title: 'Trạng thái vai trò',
          value: data?.trangThaiVaiTro, //chua biet
        },
      ],
    },
    {
      title: 'Cơ quan chủ quản',
      exTraData: [
        {
          title: 'Tên cơ quan chủ quản',
          value: data?.coQuanChuQuan, //chua biet
        },
        {
          title: 'Mã quan hệ ngân sách',
          value: data?.budgetCode, //data?.orgEnName, //chua biet
        },
      ],
    },
    {
      title: 'Địa chỉ trụ sở',
      exTraData: [
        {
          title: 'Tỉnh / thành phố',
          value: data?.tinhThanhPho, //chua biet
        },
        {
          title: 'Địa chỉ',
          value: data?.officeAdd,
        },
        {
          title: 'Số điện thoại',
          value: data?.officePhone,
        },
        {
          title: 'Web',
          value: data?.officeWeb,
        },
      ],
    },
    {
      title: 'Người đại diện pháp luật',
      exTraData: [
        {
          title: 'Họ và tên',
          value: data?.repName, //chua biet
        },
        {
          title: 'Chức vụ',
          value: data?.repPosition, //chua biet
        },
      ],
    },
  ]
}
const ChiTietChuDauTu = (props: any) => {
  const duLieuGoc = props?.route?.params?.data
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Thông tin ', icon: 'home' },
    { key: 'second', title: 'Danh sách gói thầu', icon: 'bells' },
  ])

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    setLoading(true)
    try {
      const res = await chiTietChuDauTu(duLieuGoc?.orgCode)

      setData(
        formatData({
          ...res?.data?.orgInfo,
          ngayDuyet: ngayDuyet(duLieuGoc?.effRoleDate),
        }),
      )
      setLoading(false)

      //Loại hình pháp lí
      const resLoaiHinhPhapLy = await loaiHinhPhapLy()

      const trangThai = await trangThaiHoatDong()

      const resQuocGia = await quocGia()

      //Tỉnh thành phố
      const resTinhTP = await tinhThanhPho(res?.data?.orgInfo?.officePro)
      //Get cơ quan chủ quản
      const resCoQuan = await coQuan(duLieuGoc?.orgCode)
      const resCoQuanChuQuan = await coQuanChuQuan(
        resCoQuan?.data?.orgInfo?.agencyName,
      )

      const statusOrg = findObject(
        trangThai?.data,
        'code',
        res?.data?.orgInfo?.statusOrg.toString(),
      )

      const loaiHinhPhapLyName = findObject(
        resLoaiHinhPhapLy?.data,
        'code',
        res?.data?.orgInfo?.businessType,
      )
      const quocGiaCapName = findObject(
        resQuocGia?.data,
        'code',
        res?.data?.orgInfo?.taxNation,
      )

      if (res?.statusCode === 200) {
        setData(
          formatData({
            ...res?.data?.orgInfo,
            tinhThanhPho: resTinhTP?.data?.[0]?.nameTranslate,
            coQuanChuQuan: resCoQuanChuQuan?.data?.[0]?.name,
            loaiHinhPhapLy: loaiHinhPhapLyName?.name,
            taxNation: quocGiaCapName?.name,
            taxDate: resCoQuan?.data?.orgInfo?.taxDate,
            repPosition: resCoQuan?.data?.orgInfo?.repPosition,
            trangThaiVaiTro: statusOrg?.name,
            ngayDuyet: ngayDuyet(duLieuGoc?.effRoleDate),
          }),
        )
        const check = formatData({
          ...res?.data?.orgInfo,
          tinhThanhPho: resTinhTP?.data?.[0]?.nameTranslate,
          coQuanChuQuan: resCoQuanChuQuan?.data?.[0]?.name,
          loaiHinhPhapLy: loaiHinhPhapLyName?.name,
          taxNation: quocGiaCapName?.name,
          taxDate: resCoQuan?.data?.orgInfo?.taxDate,
          repPosition: resCoQuan?.data?.orgInfo?.repPosition,
          trangThaiVaiTro: statusOrg?.name,
          ngayDuyet: ngayDuyet(duLieuGoc?.effRoleDate),
        })
      } else {
        setData(null)
        popupOk('Thông báo', res?.errorDescription ?? 'Đã có lỗi xảy ra', () =>
          goBack(),
        )
      }
    } catch (error) {
      setLoading(false)
    }
  }
  const renderTabBar = (props: any) => {
    const dataTabView = props.navigationState.routes
    const indexNow = props.navigationState.index

    return (
      <View style={styles.viewContent}>
        <FlatList
          data={dataTabView}
          extraData={dataTabView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlist}
          renderItem={({ item, index }) => {
            const backgroundColor =
              indexNow === index ? R.colors.primaryColor : R.colors.white
            const color =
              indexNow === index ? R.colors.white : R.colors.primaryColor

            return (
              <TouchableOpacity
                onPress={() => {
                  props?.jumpTo(item?.key)
                }}
                activeOpacity={0.6}
                style={[styles.touchCirle, { backgroundColor }]}
              >
                <Text style={[{ color }]}>{item?.title}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case routes?.[0]?.key:
        return !loading ? (
          <>
            {data ? (
              <FlatList
                data={data}
                extraData={data}
                bounces={false}
                contentContainerStyle={styles.padding}
                // keyExtractor={item => item._id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.listItemContainer}>
                      <View style={styles.listContainer}>
                        <Text style={styles.title}>{item?.title}</Text>
                      </View>
                      <ListDataMuc data={item?.exTraData} />
                    </View>
                  )
                }}
              />
            ) : (
              <LoadingComponent size={'lg'} isLoading={loading} />
            )}
          </>
        ) : (
          <LoadingComponent size={'lg'} isLoading={loading} />
        )

      case routes?.[1]?.key:
        return (
          <DanhSachGoiThau loaiDuLieu={'Chủ đầu tư'} dataChuDauTu={duLieuGoc} />
        )
      default:
        return <></>
    }
  }
  return (
    <View style={styles.container}>
      <HeaderBase title={duLieuGoc?.orgFullname ?? 'Chi tiết chủ đầu tư'} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      {/* {data ? (
        <FlatList
          data={data}
          extraData={data}
          bounces={false}
          contentContainerStyle={styles.padding}
          // keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItemContainer}>
                <View style={styles.listContainer}>
                  <Text style={styles.title}>{item?.title}</Text>
                </View>
                <ListDataMuc data={item?.exTraData} />
              </View>
            )
          }}
        />
      ) : (
        <LoadingComponent size={'lg'} isLoading={loading} />
      )} */}
    </View>
  )
}

export default ChiTietChuDauTu
const ListDataMuc = ({ data }: any) => {
  return (
    <FlatList
      data={data}
      extraData={data}
      // keyExtractor={item => item._id}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item?.title}</Text>
            <Text selectable style={styles.itemValue}>
              {item?.value}
            </Text>
            <Divider style={styles.divider} />
          </View>
        )
      }}
    />
  )
}
const ngayDuyet = (d: Array<number>) => {
  if (d[2] && d[1] && d[0]) {
    return `${d[2]}/${d[1]}/${d[0]}`
  }
  return ''
}
