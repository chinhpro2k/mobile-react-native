import { Platform, StyleSheet } from 'react-native'

// config
import R from '@/Assets/R'
import { HEIGHT, WIDTH } from '@/Config'

// import { getFont, getLineHeight, HEIGHT } from "../../../../config";

const styles = StyleSheet.create({
  viewTabBar: { alignItems: 'center' },
  tabBarStyle: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: WIDTH(8),
    borderWidth: 1,
    borderColor: R.colors.primaryColor,
    marginTop: HEIGHT(12),
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
  radiusRight: {
    borderBottomRightRadius: WIDTH(8),
    borderTopRightRadius: WIDTH(8),
  },
  radiusLeft: {
    borderBottomLeftRadius: WIDTH(8),
    borderTopLeftRadius: WIDTH(8),
  },
  contentContainerStyle: {
    paddingBottom: HEIGHT(16),
  },
  loadMore: {
    height: HEIGHT(30),
  },
  viewEmpty: { height: HEIGHT(30) },
  touchCirle: {
    // width: WIDTH(36),
    height: WIDTH(36),
    width: WIDTH(343 / 2),
    // borderRadius: WIDTH(36),
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: HEIGHT(6),
    // marginHorizontal: WIDTH(8),
  },
})

export default styles
