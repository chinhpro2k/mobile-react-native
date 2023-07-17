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
import { ProgressBar, MD3Colors } from 'react-native-paper'
import styles from './styles'

import { navigate } from '@/Navigators/navigationServices'
import HeaderMain from '@/Components/Header/HeaderMain'
import ScreenName from '@/Navigators/screenNames'
import R from '@/Assets/R'
import { TabView } from 'react-native-tab-view'
import { HEIGHT, WIDTH, popupCancel, popupOk } from '@/Config'
import FilterChuDauTu from '../Items/FilterChuDauTu'
import ItemTab from '../Items/ItemTab'
import {
  boQuanTamAllChuDauTu,
  boQuanTamNhieuChuDauTu,
  getDanhSachChuDauTu,
  getDanhSachChuDauTuQuanTam,
  guiFileExcelChuDauTu,
  quanTamNhieuChuDauTu,
  trangThaiHoatDong,
} from '@/Services/modules/users'
import LoadingComponent from '@/Components/LoadingComponent'
import ItemTrong from '@/Components/ItemTrong'
import { KeyboardAvoidingView } from 'native-base'
import FilterGoiThau from '../../GoiThau/Items/FilterGoiThau'
import * as Progress from 'react-native-progress'
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
const DanhSachChuDauTu = (props: any) => {
  const [search, setsearch] = useState('')
  const { loaiDuLieu, dataFilter } = props
  const loaiQuanTam = loaiDuLieu === 'Quan tâm'
  const [listDuLieu, setlistDuLieu] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [fileUploading, setFileUpLoading] = useState(false)
  const [fileProgress, setFileProgress] = useState(0)
  const [loadMore, setLoadMore] = useState(false)
  const [multiMode, setMultiMode] = useState(false)
  const [selectedList, setSelectedList] = useState([])
  const page = useRef(1)
  const beginScroll = useRef(false)
  const listTrangThai = useRef([])
  const pickFile = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: [types.xls, types.xlsx],
      })
      popupCancel(
        'Thông báo',
        'Bạn có chắc chắn theo dõi tất cả chủ đầu tư trong file',
        async () => await uploadFile(pickerResult),
      )
    } catch (e) {}
  }
  const uploadFile = async (pickerResult: any) => {
    try {
      // setLoading(true)
      setFileProgress(0)
      setFileUpLoading(true)
      let formData = new FormData()

      formData.append('file', pickerResult)

      const res = await guiFileExcelChuDauTu(formData)
      await getData()
      // setLoading(false)
      popupOk('Thông báo', 'Theo dõi thành công')
      setFileUpLoading(false)
    } catch (error) {
      popupOk('Thông báo', 'Có lỗi xảy ra vui lòng thử lại sau')
      setLoading(false)
      setFileUpLoading(false)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      // let progress = fileProgress

      if (fileProgress <= 0.99) {
        setFileProgress(fileProgress + 0.005)
      }
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [new Date()])
  const getData = async (textSearch?: string) => {
    setLoading(true)
    page.current = 1
    const bodyQuanTam = {
      page: page.current,
      limit: 10,
      // ...(loaiQuanTam && { condition: { favorite: true } }),
      condition: {
        ...((textSearch ?? search) && {
          orgFullname: toRegex(search),
        }),
      },
    }

    const body = {
      ...((textSearch ?? search) && { orgNameOrOrgCode: textSearch ?? search }),
    }
    try {
      const res = loaiQuanTam
        ? await getDanhSachChuDauTuQuanTam(bodyQuanTam)
        : await getDanhSachChuDauTu(body, page.current)
      setLoading(false)

      const trangThai = await trangThaiHoatDong()
      listTrangThai.current = trangThai?.data ?? []
      setlistDuLieu(res?.data?.result ?? [])
    } catch (error) {
      popupOk('Thông báo', 'Có lỗi xảy ra vui lòng thử lại sau')
      setLoading(false)
    }
  }
  const charMap: any = {
    a: '[aàáâãăăạảấầẩẫậắằẳẵặ]',
    e: '[eèéẹẻẽêềềểễệế]',
    i: '[iìíĩỉị]',
    o: '[oòóọỏõôốồổỗộơớờởỡợ]',
    u: '[uùúũụủưứừửữự]',
    y: '[yỳỵỷỹý]',
    d: '[dđ]',
    ' ': ' ',
  }
  function render(value: string) {
    // phục vụ hàm toRegex bên dưới
    let result = ''
    ;[...value].forEach((char: any) => (result += charMap[char] || char))
    return result
  }

  function Format(str: string) {
    // xóa hết dấu + đưa về chữ thường
    if (!str) {
      return ''
    }
    return str
      .toString()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/đ/g, 'd')
  }

  function toRegex(value: any) {
    if (!value) {
      return undefined
    }
    // convert từ string sang dạng regex.
    return { $regex: `.*${render(Format(value))}.*`, $options: 'i' }
  }
  const loadMoreData = async () => {
    if (beginScroll.current) {
      setLoadMore(true)
      page.current += 1
      const bodyQuanTam = {
        page: page.current,
        limit: 10,
        condition: {
          // ...(loaiQuanTam && { favorite: true }),
          ...(search && {
            orgFullname: toRegex(search),
          }),
        },
      }
      const body = { ...(search && { orgNameOrOrgCode: search }) }
      try {
        const res = loaiQuanTam
          ? await getDanhSachChuDauTuQuanTam(bodyQuanTam)
          : await getDanhSachChuDauTu(body, page.current)

        setlistDuLieu([...listDuLieu, ...(res?.data?.result ?? [])])
        setLoadMore(false)
        beginScroll.current = false
      } catch (error) {
        setLoadMore(false)
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
      const res = await boQuanTamAllChuDauTu()

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
        ? await boQuanTamNhieuChuDauTu(body)
        : await quanTamNhieuChuDauTu(body)

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
      <FilterChuDauTu
        // dataFilter={dataFilter}
        onFilter={(item: any) => {
          Keyboard.dismiss()
          setsearch(item?.text)
          getData(item?.text)
        }}
      />
      <View>
        <View style={{ flexDirection: 'row' }}>
          {multiMode && (
            <>
              <TouchableOpacity
                style={styles.chonFile}
                onPress={() => followMulti()}
              >
                <Text style={styles.txtChonFile}>
                  {loaiQuanTam ? 'Bỏ theo dõi' : 'Theo dõi'}{' '}
                  {selectedList.length} chủ đầu tư
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnBoQuanTam}
                onPress={() => getOutMulti()}
              >
                <Text style={styles.txtBoQuanTam}>Thoát</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {loaiQuanTam && (
            <View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={styles.chonFile}
                  onPress={() => pickFile()}
                >
                  <Text style={styles.txtChonFile}>Chọn file theo dõi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnBoQuanTam}
                  onPress={() => onPressResetQuanTam()}
                >
                  <Text style={styles.txtBoQuanTam}>Bỏ theo dõi tất cả</Text>
                </TouchableOpacity>
              </View>
              {fileUploading ? (
                <View style={{ marginLeft: WIDTH(16) }}>
                  <Text style={styles.textLoading}>
                    Đang tải file ({Math.round(fileProgress * 100)}%)
                  </Text>
                  <Progress.Bar
                    progress={fileProgress}
                    width={WIDTH(343)}
                    style={{
                      alignSelf: 'center',
                      marginBottom: HEIGHT(8),
                    }}
                  />
                </View>
              ) : (
                <></>
              )}
            </View>
          )}
        </View>
      </View>
      <FlatList
        data={listDuLieu}
        extraData={listDuLieu}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ItemTab
            itemTab={item}
            onReadNoti={() =>
              navigate(ScreenName.ChiTietChuDauTu, { data: item })
            }
            onReadData={() =>
              navigate(ScreenName.DanhSachGoiThauChuDauTu, { data: item })
            }
            onRefresh={getData}
            listTrangThai={listTrangThai.current}
            setMultiMode={setMultiMode}
            multiMode={multiMode}
            setSelectedList={setSelectedList}
            selectedList={selectedList}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        ListEmptyComponent={
          <ItemTrong content="Hiện đang không có chủ đầu tư nào" />
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
    </>
  )
}

export default DanhSachChuDauTu
