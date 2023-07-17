/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Keyboard,
} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import styles from './styles'

import { navigate } from '@/Navigators/navigationServices'
import HeaderMain from '@/Components/Header/HeaderMain'
import ScreenName from '@/Navigators/screenNames'
import R from '@/Assets/R'
import { TabView } from 'react-native-tab-view'
import { HEIGHT, WIDTH, popupCancel, popupOk } from '@/Config'
import ItemTab from '../Items/ItemTab'
import {
  boQuanTamAllGoiThau,
  boQuanTamNhieuGoiThau,
  getDanhSachChuDauTu,
  getDanhSachGoiThau,
  getDanhSachGoiThauQuanTam,
  getDanhSachGoiThauTheoChuDauTu,
  quanTamNhieuGoiThau,
} from '@/Services/modules/users'
import LoadingComponent from '@/Components/LoadingComponent'
import FilterGoiThau from '../Items/FilterGoiThau'
import ItemTrong from '@/Components/ItemTrong'
import RadioButton from '@/Components/RadioButton'
const DanhSachGoiThau = (props: any) => {
  const [search, setsearch] = useState('')
  const { loaiDuLieu, dataChuDauTu } = props
  const loaiQuanTam = loaiDuLieu === 'Quan tâm'
  const [listDuLieu, setlistDuLieu] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(false)
  const [multiMode, setMultiMode] = useState(false)
  const [cat, setCat] = useState<any>('2')
  const [selectedList, setSelectedList] = useState([])
  const page = useRef(1)
  const beginScroll = useRef(false)
  const getData = async (textSearch?: any, cate?: any) => {
    setLoading(true)
    setlistDuLieu([])
    page.current = 1
    const type = cate ?? cat
    const body = {
      bidFilter: {
        keywordType: 'Khớp tất cả từ (Phân biệt dấu)',
        keywordCat:
          type == '1'
            ? 'Kế hoạch lựa chọn nhà thầu'
            : 'Thông báo mời thầu/Tên gói thầu',
        isChuDauTu: true,
        isBenMoiThau: true,
        keyword: textSearch ?? search,
      },
    }

    const bodyQuanTam = {
      page: page.current,
      limit: 10,
      condition: {
        ...((textSearch ?? search) && {
          bidName: { $regex: textSearch ?? search, $options: 'i' },
        }),
        ...(type === '1'
          ? { notifyNo: { $exists: false }, planNo: { $exists: true } }
          : { notifyNo: { $exists: true }, planNo: { $exists: true } }),
      },
      sort: { publicDate: -1 },
    }

    try {
      if (dataChuDauTu) {
        const res = await getDanhSachGoiThauTheoChuDauTu(
          {
            page: page.current,
            limit: 10,
            cat:
              type == '1'
                ? 'Kế hoạch lựa chọn nhà thầu'
                : 'Thông báo mời thầu/Tên gói thầu',
            sort: { publicDate: -1 },
          },
          dataChuDauTu?.orgCode,
        )

        setlistDuLieu([...(res?.data?.result ?? [])])
      } else {
        const res = loaiQuanTam
          ? await getDanhSachGoiThauQuanTam(bodyQuanTam)
          : await getDanhSachGoiThau(body, page.current)
        setlistDuLieu(JSON.parse(JSON.stringify(res?.data?.result ?? [])))
      }
      setLoadMore(false)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const loadMoreData = async () => {
    if (beginScroll.current) {
      setLoadMore(true)
      page.current += 1
      const body = {
        bidFilter: {
          keywordType: 'Khớp tất cả từ (Phân biệt dấu)',
          keywordCat:
            cat == '1'
              ? 'Kế hoạch lựa chọn nhà thầu'
              : 'Thông báo mời thầu/Tên gói thầu',
          isChuDauTu: true,
          isBenMoiThau: true,
          keyword: search,
        },
      }
      const bodyQuanTam = {
        page: page.current,
        limit: 10,
        condition: {
          ...(search && {
            bidName: { $regex: search, $options: 'i' },
          }),
          ...(cat === '1'
            ? { notifyNo: { $exists: false }, planNo: { $exists: true } }
            : { notifyNo: { $exists: true }, planNo: { $exists: true } }),
        },
        sort: { publicDate: -1 },
      }
      try {
        if (dataChuDauTu) {
          const res = await getDanhSachGoiThauTheoChuDauTu(
            {
              page: page.current,
              limit: 10,
              cat:
                cat == '1'
                  ? 'Kế hoạch lựa chọn nhà thầu'
                  : 'Thông báo mời thầu/Tên gói thầu',
              sort: { publicDate: -1 },
            },
            dataChuDauTu?.orgCode,
          )

          setlistDuLieu([...listDuLieu, ...(res?.data?.result ?? [])])
        } else {
          const res = loaiQuanTam
            ? await getDanhSachGoiThauQuanTam(bodyQuanTam)
            : await getDanhSachGoiThau(body, page.current)

          setlistDuLieu([...listDuLieu, ...(res?.data?.result ?? [])])
        }
        setLoadMore(false)
        setLoading(false)
        // setlistDuLieu([...listDuLieu, ...(res?.data?.result ?? [])])
        // setLoadMore(false)
        beginScroll.current = false
      } catch (error) {
        setLoadMore(false)
        setLoading(false)
      }
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const onPressResetQuanTam = () => {
    popupCancel(
      'Thông báo',
      'Bạn có chắc chắn muốn bỏ tất cả theo dõi',
      boQuanTam,
    )
  }
  const boQuanTam = async () => {
    try {
      setLoading(true)
      const res = await boQuanTamAllGoiThau()
      setLoading(false)
      getData()
      popupOk('Thông báo', 'Bỏ theo dõi thành công', getData)
    } catch (error) {
      popupOk('Thông báo', 'Bỏ theo dõi thất bại')
    }
  }
  const getOutMulti = () => {
    setSelectedList([])
    setMultiMode(false)
  }
  const followMulti = async () => {
    try {
      const listSend = selectedList?.map((item: any) => item?.orgCode)

      const body = {
        list: listSend,
      }
      const res = loaiQuanTam
        ? await boQuanTamNhieuGoiThau(body)
        : await quanTamNhieuGoiThau(body)

      getOutMulti()
      popupOk(
        'Thông báo',
        `${loaiQuanTam ? 'Bỏ theo dõi' : 'Theo dõi'} thành công`,
        getData,
      )
    } catch (error) {}
  }
  return (
    <>
      {dataChuDauTu ? (
        <></>
      ) : (
        <FilterGoiThau
          onFilter={(item: any) => {
            Keyboard.dismiss()
            setsearch(item?.text)
            getData(item?.text, undefined)
          }}
        />
      )}

      <View style={{ marginLeft: WIDTH(16), marginTop: HEIGHT(16) }}>
        <RadioButton
          data={[
            { label: 'Thông báo mời thầu/ Tên gói thầu', value: '2' },
            { label: 'Kế hoạch lựa chọn nhà thầu', value: '1' },
          ]}
          defaultValue="2"
          onChangeValue={value => {
            setCat(value)
            getData(undefined, value)
          }}
          // label="Chọn giới tính"
          // errorContent="Vui lòng chọn lại"
        />
      </View>
      {multiMode && (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.chonFile}
            onPress={() => followMulti()}
          >
            <Text style={styles.txtChonFile}>
              {loaiQuanTam ? 'Bỏ theo dõi' : 'Theo dõi'} {selectedList.length}{' '}
              gói thầu
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnBoQuanTam}
            onPress={() => getOutMulti()}
          >
            <Text style={styles.txtBoQuanTam}>Thoát</Text>
          </TouchableOpacity>
        </View>
      )}
      {loaiQuanTam && (
        <TouchableOpacity
          style={styles.btnBoQuanTam}
          onPress={() => onPressResetQuanTam()}
        >
          <Text style={styles.txtBoQuanTam}>Bỏ theo dõi tất cả</Text>
        </TouchableOpacity>
      )}
      {loading ? (
        <LoadingComponent isLoading={loadMore} style={styles.loadMore} />
      ) : (
        <FlatList
          data={listDuLieu}
          extraData={listDuLieu}
          maxToRenderPerBatch={7}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <ItemTab
              itemTab={item}
              cat={cat}
              onReadNoti={() =>
                navigate(ScreenName.ChiTietGoiThau, {
                  data: item,
                  cat:
                    cat == '1'
                      ? 'Kế hoạch lựa chọn nhà thầu'
                      : 'Thông báo mời thầu/Tên gói thầu',
                })
              }
              onRefresh={getData}
              setMultiMode={setMultiMode}
              multiMode={multiMode}
              setSelectedList={setSelectedList}
              selectedList={selectedList}
            />
          )}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          ListFooterComponent={
            <LoadingComponent isLoading={loadMore} style={styles.loadMore} />
          }
          ListEmptyComponent={
            <ItemTrong content="Hiện đang không có gói thầu nào" />
          }
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.01}
          onMomentumScrollBegin={() => {
            beginScroll.current = true
          }}
          onRefresh={getData}
        />
      )}
    </>
  )
}

export default DanhSachGoiThau
