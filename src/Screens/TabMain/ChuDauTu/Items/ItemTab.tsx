import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import moment from 'moment'
import AntDesign from 'react-native-vector-icons/AntDesign'
// config
import R from '@/Assets/R'

import { getFontSize, HEIGHT, getLineHeight, WIDTH, popupOk } from '@/Config'
import { any } from 'prop-types'
import { Pressable } from 'native-base'
import {
  boQuanTamChuDauTu,
  coQuan,
  coQuanChuQuan,
  quanTamChuDauTu,
  tinhThanhPho,
} from '@/Services/modules/users'
import { showToast, TypeToast } from '@/Components/Popup/Toast'

const TrangThai = ({ data, listTrangThai }: any) => {
  let trangThaiName =
    listTrangThai?.find((item: any) => {
      return item?.code === data
    })?.name ?? ''
  let trangThaiColor = R.colors.primaryColor

  return true ? (
    <View style={[styles.iconNew, { backgroundColor: trangThaiColor }]}>
      <Text style={styles.new}>{trangThaiName}</Text>
    </View>
  ) : (
    <View style={[styles.iconNew, styles.empty]} />
  )
}

const MoTaDiaChi = ({ data }: any) => {
  return (
    <Text style={styles.content}>
      <Text style={styles.code}>Tỉnh/huyện: </Text>
      {data}
    </Text>
  )
}
const MoTa = ({ data, title }: any) => {
  return (
    <Text style={styles.content}>
      <Text style={styles.code}>{title}: </Text>
      {data}
    </Text>
  )
}
const TitleAndContent = ({
  data,
  onRefresh,
  listTrangThai,
  onReadNoti,
}: any) => {
  const [check, setCheck] = useState(data?.favorite)
  const [tinhTp, setTinhTp] = useState('')
  const [coQuanMe, setCoQuanMe] = useState('')
  useEffect(() => {
    setCheck(data?.favorite)
  }, [data?.favorite])
  useEffect(() => {
    getTinh()
    layCoQuanChuQuan()
  }, [])
  const getTinh = async () => {
    try {
      const res = await tinhThanhPho(data?.officePro)
      if (res?.data?.[0]) {
        setTinhTp(res?.data?.[0]?.name)
      }
    } catch (error) {}
  }
  const layCoQuanChuQuan = async () => {
    try {
      const resCoQuan = await coQuan(data?.orgCode)
      const resCoQuanChuQuan = await coQuanChuQuan(
        resCoQuan?.data?.orgInfo?.agencyName,
      )
      setCoQuanMe(resCoQuanChuQuan?.data?.[0]?.name ?? '')
    } catch (error) {}
  }
  const quanTam = async () => {
    try {
      let res
      if (check) {
        res = await boQuanTamChuDauTu(data?.orgCode)
      } else {
        res = await quanTamChuDauTu(data?.orgCode)
      }
      if (res.statusCode === 200) {
        showToast({
          title: 'Thông báo',
          message: `Bạn đã ${check ? 'bỏ theo dõi' : 'theo dõi'} chủ đầu tư "${
            data?.orgFullname
          }"`,
          type: TypeToast.SUCCESS,
        })
        setCheck(!check)
        onRefresh && onRefresh()
      } else {
        showToast({
          title: 'Thông báo',
          message: res?.errorDescription ?? 'Đã có lỗi xảy ra!',
          type: TypeToast.ERROR,
        })
      }
    } catch (error) {}
  }
  return (
    <View style={{ width: WIDTH(320) }}>
      <View style={styles.viewTitle}>
        <Text style={styles.code} numberOfLines={1}>
          {data?.orgCode ?? ''}
        </Text>
        <TrangThai data={data.statusOrg} listTrangThai={listTrangThai} />
      </View>
      <Text style={styles.title}>{data?.orgFullname ?? ''}</Text>
      <MoTa data={coQuanMe} title={'Cơ quan chủ quản'} />
      <MoTaDiaChi data={tinhTp} />
      <Pressable
        onPress={() => {
          onReadNoti()
        }}
      >
        <Text style={styles.textNavigate}>Các gói thầu</Text>
      </Pressable>
      <Pressable onPress={quanTam}>
        <AntDesign
          name={check ? 'star' : 'staro'}
          size={WIDTH(24)}
          style={styles.star}
          color={check ? R.colors.yellow600 : R.colors.grey500}
        />
      </Pressable>
    </View>
  )
}

const ItemTab = (props: any) => {
  const {
    itemTab,
    onReadNoti,
    onReadData,
    onRefresh,
    listTrangThai,
    setMultiMode,
    multiMode,
    selectedList,
    setSelectedList,
  } = props

  const selected =
    selectedList?.find((item: any) => item.orgCode === itemTab.orgCode) !==
    undefined
  const styleMulti = selected
    ? { borderWidth: 2, borderColor: R.colors.primaryColor }
    : {}
  const onPress = () => {
    if (multiMode) {
      if (selected) {
        let list: Array<any> = selectedList?.filter(
          (item: any) => item.orgCode !== itemTab.orgCode,
        )
        if (list?.length == 0) {
          setMultiMode(false)
        }
        setSelectedList(list)
      } else {
        setSelectedList([...selectedList, itemTab])
      }
    } else {
      onReadNoti && onReadNoti()
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.itemContainer, styleMulti]}
      onPress={onPress}
      // delayLongPress={1800}
      onLongPress={() => {
        console.log('LongPress')
        setMultiMode(true)
        setSelectedList([...selectedList, itemTab])
      }}
    >
      <TitleAndContent
        data={itemTab}
        onRefresh={onRefresh}
        listTrangThai={listTrangThai}
        onReadNoti={onReadData}
      />
    </TouchableOpacity>
  )
}

export default ItemTab

const styles = StyleSheet.create({
  viewTitle: { flexDirection: 'row', justifyContent: 'space-between' },
  itemContainer: {
    width: WIDTH(343),
    padding: WIDTH(12),
    alignSelf: 'center',
    backgroundColor: R.colors.white,
    marginTop: HEIGHT(12),
    borderRadius: WIDTH(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: R.colors.grey500,
  },
  viewImgNoti: {
    width: WIDTH(48),
    height: WIDTH(48),
    borderRadius: WIDTH(48) / 2,
    shadowColor: R.colors.black50p,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    backgroundColor: R.colors.white,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imgNoti: {
    width: WIDTH(48),
    height: WIDTH(48),
    borderRadius: WIDTH(24),
  },
  title: {
    width: WIDTH(280),
    fontSize: getFontSize(18),
    lineHeight: getLineHeight(24),
    // fontFamily: R.fonts.Roboto,
    color: R.colors.primaryColor,
    fontWeight: '600',
    // marginBottom: HEIGHT(16),
  },
  code: {
    // width: WIDTH(225),
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(28),
    // fontFamily: R.fonts.Roboto,
    // color: R.colors.color101426,
    // fontWeight: 'bold',
  },
  content: {
    width: WIDTH(280),
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(20),
    // fontFamily: R.fonts.Roboto,
    color: R.colors.black0,
  },
  ngayGui: {
    color: R.colors.primaryColor,
    marginBottom: 0,
  },
  iconNew: {
    // width: WIDTH(22),
    height: WIDTH(22),
    paddingHorizontal: WIDTH(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WIDTH(22) / 2,
    backgroundColor: R.colors.primaryColor,
  },
  new: {
    fontSize: getFontSize(10),
    lineHeight: getLineHeight(18),
    // fontFamily: R.fonts.Roboto,
    fontWeight: 'bold',
    color: R.colors.white,
  },
  empty: {
    backgroundColor: R.colors.white,
  },
  star: {
    alignSelf: 'flex-end',
    marginTop: WIDTH(-30),
    marginRight: WIDTH(12),
  },
  textNavigate: {
    color: R.colors.primaryColor,
    marginTop: HEIGHT(8),
    textDecorationLine: 'underline',
  },
})
