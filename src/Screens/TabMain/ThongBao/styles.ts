import { Platform, StyleSheet } from 'react-native'

// config
import R from '@/Assets/R'
import { HEIGHT, WIDTH } from '@/Config'

// import { getFont, getLineHeight, HEIGHT } from "../../../../config";

const styles = StyleSheet.create({
  viewFilter: {
    marginHorizontal: WIDTH(16),
    marginTop: HEIGHT(12),
    width: WIDTH(343),
  },
  datePicker: { width: WIDTH(164), borderColor: 'gray' },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: HEIGHT(16),
  },
  container: { flex: 1, backgroundColor: R.colors.white },
  contentContainer: {
    backgroundColor: R.colors.white,
    width: WIDTH(343),
    borderRadius: WIDTH(8),
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
    marginHorizontal: WIDTH(16),
    marginTop: HEIGHT(16),
  },
  contentContainerStyle: {
    paddingBottom: HEIGHT(100),
  },
  loadMore: {
    marginTop: HEIGHT(30),
    height: HEIGHT(30),
  },
  viewEmpty: { height: HEIGHT(30) },
})

export default styles
