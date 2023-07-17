import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import moment from 'moment'

// config
import R from '@/Assets/R'

import { getFontSize, HEIGHT, getLineHeight, WIDTH } from '@/Config'
import IconSVG from '@/Components/Icons/IconSVG'
import { LinhVuc } from '@/Screens/ChiTietGoiThau/enum'

const ImgNoti = ({ imageUrl }: any) => (
  <View style={styles.viewImgNoti}>
    <IconSVG
      iconName={'Thông báo'}
      width={WIDTH(32)}
      height={WIDTH(32)}
      color={R.colors.MAIN_APP_COLOR}
    />
  </View>
)

const NewIcon = ({ itemTab }: any) => {
  return itemTab?.unread ? (
    <View style={styles.iconNew}>
      <Text style={styles.new}>N</Text>
    </View>
  ) : (
    <View style={[styles.iconNew, styles.empty]} />
  )
}

const MoTa = ({ itemTab }: any) => {
  const moTa =
    itemTab?.description && itemTab?.description !== ''
      ? itemTab?.description
      : itemTab?.content && itemTab?.content !== ''
      ? itemTab?.content
      : 'Abc đã được thay đổi từ ngày abcd đến xyz'
  return (
    <Text style={styles.content} numberOfLines={1}>
      {`Lĩnh vực: ${LinhVuc?.[itemTab?.info?.investField?.[0]]}`}
    </Text>
  )
}

const TitleAndContent = ({ itemTab }: any) => {
  console.log('===> itemTab', itemTab)
  const TrangThai = () => {
    switch (itemTab?.info?.type) {
      case 'TAO_MOI':
        return (
          <Text style={[styles.title, { color: R.colors.red600 }]}>
            Tạo mới
          </Text>
        )
      case 'CAP_NHAT':
        return (
          <Text style={[styles.title, { color: R.colors.green600 }]}>
            Cập nhật
          </Text>
        )
      default:
        return null
    }
  }
  return (
    <View>
      <Text style={styles.title} numberOfLines={3}>
        {itemTab?.info?.bidName?.[0] ?? 'Tiêu đề'}
      </Text>
      <MoTa itemTab={itemTab} />
      {/* {itemTab?.info?.type && ( */}
      <Text style={styles.title} numberOfLines={3}>
        {`Bên mời thầu: ${itemTab?.info?.benMoiThau ?? ''}`}
      </Text>
      {/* )} */}
      <View>
        <Text style={[styles.content, styles.ngayGui]}>
          <Text
            style={[
              styles.content,
              styles.ngayGui,
              { color: R.colors.colorTextDetail },
            ]}
          >{`Gửi lúc: Ngày ${moment(itemTab.createdAt ?? new Date()).format(
            'HH:mm DD/MM/YYYY',
          )}`}</Text>
        </Text>
      </View>
    </View>
  )
}

const ItemTab = (props: any) => {
  const { itemTab, onReadNoti } = props
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.itemContainer}
      onPress={onReadNoti && onReadNoti}
    >
      <ImgNoti imageUrl={itemTab?.imageUrl} />
      <TitleAndContent itemTab={itemTab} />
      <NewIcon itemTab={itemTab} />
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
    width: WIDTH(225),
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(24),
    // fontFamily: R.fonts.Roboto,
    color: R.colors.color101426,
    fontWeight: 'bold',
  },
  content: {
    width: WIDTH(225),
    fontSize: getFontSize(14),
    lineHeight: getLineHeight(20),
    // fontFamily: R.fonts.Roboto,
    color: R.colors.black0,
    marginVertical: HEIGHT(8),
  },
  ngayGui: {
    color: R.colors.primaryColor,
    marginBottom: 0,
  },
  iconNew: {
    width: WIDTH(22),
    height: WIDTH(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WIDTH(22) / 2,
    backgroundColor: R.colors.primaryColor,
  },
  new: {
    fontSize: getFontSize(13),
    lineHeight: getLineHeight(18),
    // fontFamily: R.fonts.Roboto,
    color: R.colors.white,
  },
  empty: {
    backgroundColor: R.colors.white,
  },
})
