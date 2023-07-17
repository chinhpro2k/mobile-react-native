import { Platform, StyleSheet } from 'react-native'

// config
import R from '@/Assets/R'
import { HEIGHT, WIDTH, getFontSize } from '@/Config'

// import { getFont, getLineHeight, HEIGHT } from "../../../../config";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: R.colors.white },
  viewVersion: {
    marginRight: WIDTH(10),
    padding: 8,
    borderRadius: WIDTH(4),
  },
  listVersion: { flexDirection: 'row' },
  flatlist: { alignSelf: 'center', marginLeft: WIDTH(12) },
  viewContent: { alignItems: 'center' },
  contentContainer: {
    backgroundColor: R.colors.white,
    width: WIDTH(343),
    borderRadius: WIDTH(8),
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
    marginHorizontal: WIDTH(16),
    marginTop: HEIGHT(16),
  },
  tabbar: { alignSelf: 'center', marginLeft: WIDTH(12) },
  padding: { paddingBottom: HEIGHT(40) },
  touchCirle: {
    // width: WIDTH(36),
    // height: WIDTH(36),
    paddingHorizontal: WIDTH(12),
    paddingVertical: HEIGHT(8),
    borderRadius: WIDTH(24),
    borderWidth: WIDTH(1),
    borderColor: R.colors.primaryColor,
    marginTop: HEIGHT(16),
    marginRight: WIDTH(12),
    // alignSelf: 'flex-start',
    // borderRadius: WIDTH(36),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: HEIGHT(8),
    // marginHorizontal: WIDTH(8),
  },
  listItemContainer: { marginLeft: WIDTH(12) },
  contentContainerStyle: {
    paddingBottom: HEIGHT(16),
  },
  loadMore: {
    height: HEIGHT(30),
  },
  viewEmpty: { height: HEIGHT(30) },
  title: {
    fontSize: getFontSize(16),
    color: R.colors.black0,
    fontWeight: '600',
  },
  listContainer: {
    width: WIDTH(343),
    backgroundColor: R.colors.backgroundColorMesseage,
    padding: WIDTH(8),
    borderRadius: WIDTH(8),
    marginVertical: HEIGHT(8),
    ...R.themes.shadowOffset,
  },
  divider: { marginTop: HEIGHT(8), width: WIDTH(343) },
  itemContainer: { marginLeft: WIDTH(8), marginVertical: HEIGHT(6) },
  itemTitle: {
    fontSize: getFontSize(14),
    color: R.colors.black0,
    marginBottom: HEIGHT(4),
  },
  itemValue: {
    fontSize: getFontSize(14),
    color: R.colors.color8b8,
    width: WIDTH(343),
    // fontWeight: '600',
  },
})

export default styles
