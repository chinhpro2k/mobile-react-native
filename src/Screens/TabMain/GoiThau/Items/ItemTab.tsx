import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from 'react-native'
import moment from 'moment'

// config
import R from '@/Assets/R'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { getFontSize, HEIGHT, getLineHeight, WIDTH, formatVND } from '@/Config'
import { Pressable } from 'native-base'
import {
  boQuanTamGoiThau,
  coQuan,
  coQuanChuQuan,
  quanTamChuGoiThau,
} from '@/Services/modules/users'
import { showToast, TypeToast } from '@/Components/Popup/Toast'
const PhanLoai = (data: string) => {
  switch (data) {
    case 'DTPT':
      return 'Chi đầu tư phát triển'

    case 'TX':
      return 'Chi thường xuyên'

    case 'KHAC':
      return 'Khác'

    default:
      return 'Khác'
  }
}
const LinhVuc: any = {
  OTHER: 'Khác',
  HH: 'Hàng hoá',
  XL: 'Xây lắp',
  PTV: 'Phi tư vấn',
  TV: 'Tư vấn',
  HON_HOP: 'Hỗn hợp',
}
const TrangThai = ({ data, extraData }: any) => {
  let trangThaiName = ''
  let trangThaiColor = ''
  let textColor = R.colors.white100
  switch (data) {
    case 'KCNTTT':
      trangThaiName = 'Không có nhà thầu trúng thầu'
      trangThaiColor = R.colors.primaryColor
      break
    case 'CNTTT':
      trangThaiName = 'Có nhà thầu trúng thầu'
      trangThaiColor = R.colors.primaryColor
      break
    case 'DHTBMT':
      trangThaiName = 'Đã hủy TBMT'
      trangThaiColor = R.colors.red300
      textColor = R.colors.black51p
      break
    case 'DXT':
      trangThaiName = 'Đang xét thầu'
      trangThaiColor = R.colors.orange400
      textColor = R.colors.indigo400
      break
    case 'DHT':
      trangThaiName = 'Đã huỷ thầu'
      trangThaiColor = R.colors.orange400
      textColor = R.colors.indigo400
      break
    default:
      trangThaiName = 'Chưa cập nhật'
      trangThaiColor = R.colors.primaryColor
      break
  }
  if (!extraData.statusForNotify) {
    if (
      extraData.bidCloseDate &&
      new Date(extraData.bidCloseDate).getTime() > new Date().getTime()
    ) {
      trangThaiName = 'Chưa đóng thầu'
    }
    trangThaiColor = R.colors.yellow600
    if (
      extraData.bidCloseDate &&
      new Date(extraData.bidCloseDate).getTime() <= new Date().getTime()
    ) {
      if (extraData.isInternet == 0) {
        trangThaiName = 'Đang xét thầu'
        trangThaiColor = R.colors.orange400
      } else {
        trangThaiName = 'Chưa mở thầu'
        trangThaiColor = R.colors.orange400
      }
    }
  }
  return true ? (
    <View style={[styles.iconNew, { backgroundColor: trangThaiColor }]}>
      <Text style={[styles.new, { color: textColor }]}>{trangThaiName}</Text>
    </View>
  ) : (
    <View style={[styles.iconNew, styles.empty]} />
  )
}

const MoTa = ({ title, data }: any) => {
  if (data === undefined) {
    return null
  }
  return (
    <Text style={styles.content} numberOfLines={1}>
      <Text style={styles.code}>{title}: </Text>
      {data}
    </Text>
  )
}
const MoTaHinhThuc = ({ title, data }: any) => {
  if (data === undefined) {
    return null
  }
  return (
    <>
      {title ? (
        <Text style={styles.codeHinhThuc}>
          {title}:{' '}
          <Text style={styles.contentHinhThuc} numberOfLines={2}>
            {data}
          </Text>
        </Text>
      ) : null}
    </>
  )
}
const TitleAndContent = ({ data, onRefresh, cat }: any) => {
  const [check, setCheck] = useState(data?.favorite)
  useEffect(() => {
    setCheck(data?.favorite)
  }, [data?.favorite])

  const quanTam = async () => {
    try {
      let res
      if (check) {
        res = await boQuanTamGoiThau(data?._id)
      } else {
        res = await quanTamChuGoiThau(data?._id)
      }
      if (res.statusCode === 200) {
        showToast({
          title: 'Thông báo',
          message: `Bạn đã ${check ? 'bỏ theo dõi' : 'theo dõi'} gói thầu "${
            data?.bidName ?? ''
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
      {cat !== '1' ? (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.codeContent} numberOfLines={1}>
            {cat !== '1'
              ? `Mã TBMT: ${data?.notifyNoStand ?? ''}`
              : `Mã KHLCNT: ${data?.planNo ?? ''}`}
          </Text>
          <TrangThai extraData={data} data={data?.statusForNotify} />
        </View>
      ) : (
        <></>
      )}

      <Text numberOfLines={2} style={styles.title}>
        {data?.bidName ?? ''}
      </Text>
      {cat !== '1' ? (
        <>
          <MoTa title={'Mã KHLCNT'} data={data?.planNo} />
          <MoTa title={'Bên mời thầu'} data={data?.procuringEntityName} />
          <MoTa title={'Chủ đầu tư'} data={data?.investorName} />
          <MoTa
            title={'Ngày đăng tải thông báo'}
            data={moment(data?.publicDate).format('HH:mm DD/MM/YYYY')}
          />
          <MoTa title={'Lĩnh vực'} data={LinhVuc[data?.investField] ?? ''} />
          <MoTa
            title={'Địa điểm'}
            data={data?.locations?.map((item: any) => item?.provName)}
          />

          <MoTaHinhThuc
            title={'Thời điểm mở thầu'}
            data={moment(data?.bidOpenDate).format('HH:mm DD/MM/YYYY')}
          />
          <MoTaHinhThuc
            title={'Thời điểm đóng thầu'}
            data={moment(data?.bidCloseDate).format('HH:mm DD/MM/YYYY')}
          />
          <MoTaHinhThuc
            title={'Hình thức dự thầu'}
            data={data?.isInternet ? 'Qua mạng' : 'Trực tiếp'}
          />
        </>
      ) : (
        <>
          <MoTa title={'Mã KHLCNT'} data={data?.planNo} />
          <MoTa title={'Bên mời thầu'} data={data?.investorName} />
          <MoTa title={'Phân loại'} data={PhanLoai(data?.planType)} />
          <MoTa title={'Dự toán'} data={formatVND(data?.investTotal ?? 0)} />
          <MoTa
            title={'Thời điểm phê duyệt'}
            data={moment(data?.decisionDate).format('HH:mm DD/MM/YYYY')}
          />
          <MoTa
            title={'Ngày đăng tải thông báo'}
            data={moment(data?.publicDate).format('HH:mm DD/MM/YYYY')}
          />
        </>
      )}
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
    onRefresh,
    setMultiMode,
    multiMode,
    selectedList,
    setSelectedList,
    cat,
  } = props

  const selected =
    selectedList?.find((item: any) => item._id === itemTab._id) !== undefined

  const styleMulti = selected
    ? { borderWidth: 2, borderColor: R.colors.primaryColor }
    : {}
  const onPress = () => {
    if (multiMode) {
      if (selected) {
        let list: Array<any> = selectedList?.filter(
          (item: any) => item._id !== itemTab._id,
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
      onLongPress={() => {
        // setMultiMode(true)
        // setSelectedList([...selectedList, itemTab])
      }}
    >
      {/* <ImgNoti imageUrl={itemTab?.imageUrl} /> */}
      <TitleAndContent cat={cat} data={itemTab} onRefresh={onRefresh} />
    </TouchableOpacity>
  )
}

export default ItemTab

const styles = StyleSheet.create({
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
  star: {
    alignSelf: 'flex-end',
    marginTop: WIDTH(-30),
    marginRight: WIDTH(12),
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
    color: R.colors.black0,
  },
  codeHinhThuc: {
    // width: WIDTH(225),
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(28),
    // fontFamily: R.fonts.Roboto,
    // color: R.colors.color101426,
    // fontWeight: 'bold',
    // color: R.colors.black0,
  },
  codeContent: {
    // width: WIDTH(225),
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(28),
    // fontFamily: R.fonts.Roboto,
    // color: R.colors.color101426,
    // fontWeight: 'bold',
    // color: R.colors.black0,
  },
  content: {
    width: WIDTH(280),
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(20),
    // fontFamily: R.fonts.Roboto,
    //
  },
  contentHinhThuc: {
    width: WIDTH(280),
    fontSize: getFontSize(15),
    lineHeight: getLineHeight(24),
    color: R.colors.black0,
    fontWeight: '600',
    // fontFamily: R.fonts.Roboto,
    //
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
})
