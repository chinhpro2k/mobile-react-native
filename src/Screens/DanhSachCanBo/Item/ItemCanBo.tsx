import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@/Config'
import React from 'react'
import R from '@/Assets/R'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
const ItemCanBo = ({
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
        <View style={styles.indexView}>
          <Text style={styles.index}>{index}</Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            Nguyễn Văn Nam (BCH423434) (Mã ...)
          </Text>
          <Text style={styles.title}>
            Chức vụ:
            <Text style={styles.value}>{' Nhân viên'}</Text>
          </Text>
          <Text style={styles.title}>
            Email:
            <Text style={styles.value}> {'...@gmail.com'}</Text>
          </Text>
        </View>
      </View>
      <Entypo
        name="chevron-thin-right"
        color={R.colors.grey400}
        size={WIDTH(20)}
      />
    </TouchableOpacity>
  )
}
export default ItemCanBo
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
    lineHeight: getLineHeight(22),
  },
  title: {
    fontWeight: 'bold',

    fontSize: getFontSize(13),
    lineHeight: getLineHeight(22),
  },
  value: {
    fontWeight: 'normal',
  },
})
