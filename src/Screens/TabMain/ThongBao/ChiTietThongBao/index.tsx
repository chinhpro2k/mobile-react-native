/* eslint-disable react-hooks/exhaustive-deps */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { useState, useEffect } from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import { HEIGHT, WIDTH, getFontSize, getLineHeight, getWidth } from '@/Config'
import moment from 'moment'
import R from '@/Assets/R'
import ButtonBase from '@/Components/Button'
import { Pressable } from 'native-base'
import { chiTietThongBao } from '@/Services/modules/users'
import { navigate } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
const ChiTietThongBao = (props: any) => {
  const item = props?.route?.params?.item
  const notiData = props?.route?.params?.notiData
  const id = notiData?.id ?? item?._id
  const [data, setData] = useState<any>({})
  const initData = async () => {
    try {
      const res = await chiTietThongBao(id)

      if (res?.data) {
        setData(res?.data)
      }
    } catch (error) {}
  }
  useEffect(() => {
    initData()
  }, [])
  return (
    <View>
      <HeaderBase title="Chi tiết thông báo" />
      <ScrollView>
        <Text style={styles.textTittle}>{data?.content}</Text>
        <Text style={styles.textTime}>
          {moment(data?.createdAt).format('HH:mm, DD/MM/YYYY')}
        </Text>
        <View style={styles.cntHTML}>
          <Text selectable>{data?.description}</Text>
        </View>
        {item?.info?._id && (
          <Pressable
            alignSelf={'flex-end'}
            marginRight={WIDTH(12)}
            onPress={() => {
              navigate(ScreenName.ChiTietGoiThau, {
                id: item?.info?._id,
                cat: item?.info?.cat,
              })
            }}
          >
            <Text style={styles.chiTiet}>Xem chi tiết</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  )
}
export default ChiTietThongBao
const styles = StyleSheet.create({
  textTittle: {
    // fontFamily: R.fonts.RobotoRegular,
    fontWeight: 'bold',
    fontSize: getFontSize(18),
    color: R.colors.black0,
    width: WIDTH(270),
    flexWrap: 'wrap',
    marginTop: HEIGHT(16),
    marginLeft: WIDTH(16),
  },
  chiTiet: {
    color: R.colors.primaryColor,
    textDecorationLine: 'underline',
  },
  textDetail: {
    // fontFamily: R.fonts.RobotoRegular,
    fontSize: getFontSize(15),
    color: R.colors.black0,
    marginHorizontal: HEIGHT(15),
    lineHeight: getLineHeight(18),
  },
  textAuthor: {
    // fontFamily: R.fonts.RobotoRegular,
    fontSize: getFontSize(16),
    color: R.colors.primaryColor,
    paddingHorizontal: HEIGHT(15),
    lineHeight: getLineHeight(24),
    fontWeight: '500',
    marginVertical: HEIGHT(15),
  },
  textTime: {
    // fontFamily: R.fonts.RobotoRegular,
    fontSize: getFontSize(16),
    color: R.colors.gray6B,
    marginLeft: WIDTH(16),
    marginTop: HEIGHT(4),
  },
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  wrapper: {
    flexDirection: 'row',
    width: getWidth(),
    marginTop: WIDTH(16),
  },
  wrapImage: {
    marginLeft: WIDTH(15),
    // shadowColor: R.colors.whitec2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 1.5,
    marginRight: WIDTH(12),
  },
  image: {
    width: WIDTH(55),
    height: HEIGHT(62),
  },
  cntHTML: {
    flex: 1,
    paddingHorizontal: WIDTH(16),
    paddingTop: HEIGHT(8),
  },
  urlFile: {
    color: R.colors.primaryColor,
    textDecorationLine: 'underline',
    // fontFamily: R.fonts.Roboto,
    fontWeight: 'bold',
    marginTop: HEIGHT(6),
  },
  tepDinhKem: {
    marginHorizontal: WIDTH(15),
  },
  viewNguoiGui: { alignItems: 'flex-end' },
  btn: {
    width: WIDTH(100),
    borderRadius: WIDTH(8),
    marginTop: HEIGHT(16),
    alignSelf: 'center',
    backgroundColor: R.colors.primaryColor,
  },
})
