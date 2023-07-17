import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@/Config'
import React from 'react'
import R from '@/Assets/R'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const ItemDonXinNghiOmDau = ({
  item,
  index,
  onPress,
}: {
  item: any
  index: number
  onPress: () => void
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.infoView}>
        {/* <View style={styles.indexView}>
          <Text style={styles.index}>{index}</Text>
        </View> */}
        <View>
          <Text style={styles.mainText}>Nguyễn Văn Nam (BCH423434)</Text>
          <Text style={styles.title} numberOfLines={1}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              color={R.colors.primaryColor}
              size={WIDTH(14)}
            />
            <Text style={styles.value}>
              {'Phòng Tư vấn và Phát triển dịch vụ đào tạo '}
            </Text>
          </Text>
          <Text style={styles.title}>
            <Entypo
              name="calendar"
              color={R.colors.primaryColor}
              size={WIDTH(12)}
            />
            <Text style={styles.value}>
              {' '}
              {'Sáng,24/03/2022 -> Chiều,30/03/2023'}
            </Text>
          </Text>
        </View>
      </View>
      <Text style={styles.title}>
        <Text style={[styles.value, { color: R.colors.green600 }]}>
          {'Đã duyệt'}
        </Text>
      </Text>
    </TouchableOpacity>
  )
}
export default ItemDonXinNghiOmDau
const styles = StyleSheet.create({
  container: {
    width: WIDTH(343),
    backgroundColor: R.colors.grey200,
    borderRadius: WIDTH(8),
    flexDirection: 'row',
    paddingHorizontal: WIDTH(12),
    paddingVertical: HEIGHT(16),
    marginBottom: HEIGHT(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexView: {
    backgroundColor: R.colors.primaryColor,
    width: WIDTH(30),
    height: WIDTH(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: WIDTH(12),
    borderRadius: WIDTH(30),
  },
  index: {
    color: R.colors.white100,
    fontWeight: 'bold',
  },
  mainText: {
    fontWeight: 'bold',
    color: R.colors.primaryColor,
    fontSize: getFontSize(16),
    lineHeight: getLineHeight(24),
  },
  title: {
    fontWeight: 'bold',
    maxWidth: WIDTH(272),
    fontSize: getFontSize(12),
    lineHeight: getLineHeight(24),
  },
  value: {
    fontWeight: 'normal',
  },
})
