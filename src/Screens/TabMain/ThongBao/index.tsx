/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import styles from './styles'

import { navigate } from '@/Navigators/navigationServices'
import HeaderMain from '@/Components/Header/HeaderMain'
import ItemTab from './Items/ItemTab'
import ScreenName from '@/Navigators/screenNames'
import {
  danhSachThongBaoCuaToi,
  postReadOneNotification,
} from '@/Services/modules/users'
import ItemTrong from '@/Components/ItemTrong'
import LoadingComponent from '@/Components/LoadingComponent'
import MultiSelectNew from '@/Components/Picker/MultiSelectNew'
import { HEIGHT, WIDTH, popupOk } from '@/Config'
import DatePickerBase from '@/Components/Picker/DatePickerNew'
// import NavigationService from '../../../../routers/NavigationService'
// import { DetailNoti } from '../../../../routers/screenNames'
const ThongBao = (props: any) => {
  const toDay = new Date()
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(toDay.getDate() + 1))

  startDate.setUTCHours(0, 0, 0, 0)
  endDate.setUTCHours(23, 59, 59, 999)
  const [listThongBao, setlistThongBao] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(false)
  const [from, setFrom] = useState(startDate)
  const [to, setTo] = useState<any>(endDate)
  const [type, settype] = useState<string>()
  const page = useRef(1)
  const beginScroll = useRef(false)
  const getData = async (typeNoti?: string) => {
    setLoading(true)
    page.current = 1
    const body = {
      page: page.current,
      limit: 10,

      sort: { createdAt: -1 },
      ...(type && (typeNoti ? typeNoti !== 'TAT_CA' : type !== 'TAT_CA')
        ? {
            condition: {
              'info.type': typeNoti ?? type,
              createdAt: {
                $gte: new Date(from).toISOString(),
                $lte: new Date(to).toISOString(),
              },
            },
          }
        : {
            condition: {
              createdAt: {
                $gte: new Date(from).toISOString(),
                $lte: new Date(to).toISOString(),
              },
            },
          }),
    }

    try {
      if (from.getTime() > to) {
        popupOk('Thông báo', 'Thời gian nhập không hợp lệ')
        setFrom(toDay)
        setTo(toDay)
        setLoading(false)
      } else {
        const res = await danhSachThongBaoCuaToi(body)
        setlistThongBao(res?.data?.result ?? [])
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }
  const loadMoreData = async () => {
    if (beginScroll.current) {
      setLoadMore(true)
      page.current += 1
      const body = {
        page: page.current,
        limit: 10,
        sort: {
          createdAt: -1,
        },
        ...(type && type !== 'TAT_CA'
          ? {
              condition: {
                'info.type': type,
                createdAt: {
                  $gte: new Date(from).toISOString(),
                  $lte: new Date(to).toISOString(),
                },
              },
            }
          : {
              condition: {
                createdAt: {
                  $gte: new Date(from).toISOString(),
                  $lte: new Date(to).toISOString(),
                },
              },
            }),
      }
      try {
        const res = await danhSachThongBaoCuaToi(body)
        setlistThongBao([...listThongBao, ...(res?.data?.result ?? [])])
        setLoadMore(false)
        beginScroll.current = false
      } catch (error) {
        setLoadMore(false)
      }
    }
  }
  useEffect(() => {
    getData()
  }, [from, to])
  const onReadNoti = async (item: any) => {
    if (item?.unread) {
      await postReadOneNotification({
        notificationId: item?._id,
      })
      getData()
    }
    navigate(ScreenName.ChiTietThongBao, {
      item,
    })
  }
  const data = [
    { value: 'TAT_CA', label: 'Tất cả' },
    { value: 'TAO_MOI', label: 'Tạo mới' },
    { value: 'CAP_NHAT', label: 'Cập nhật' },
  ]
  return (
    <View style={styles.container}>
      <HeaderMain title="Thông báo" />
      <View style={styles.viewFilter}>
        <View style={styles.dateContainer}>
          <DatePickerBase
            mode={'date'}
            value={from}
            maxDate={to}
            onDateChange={setFrom}
            label="Từ ngày"
            containerStyle={styles.datePicker}
          />
          <DatePickerBase
            mode={'date'}
            minDate={from}
            value={to}
            onDateChange={setTo}
            label="Đến ngày"
            containerStyle={styles.datePicker}
          />
        </View>

        <MultiSelectNew
          search={false}
          placeholder={'Chọn trạng thái'}
          single={true}
          onChangeValue={(value: any) => {
            settype(value)
            getData(value)
          }}
          data={data}
        />
      </View>
      <FlatList
        data={listThongBao}
        extraData={listThongBao}
        renderItem={({ item }) => (
          <ItemTab itemTab={item} onReadNoti={() => onReadNoti(item)} />
        )}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        ListEmptyComponent={
          <ItemTrong content="Hiện đang không có thông báo nào" />
        }
        ListFooterComponent={
          <LoadingComponent isLoading={loadMore} style={styles.loadMore} />
        }
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.01}
        onMomentumScrollBegin={() => {
          beginScroll.current = true
        }}
        onRefresh={getData}
      />
    </View>
  )
}

export default ThongBao
