import { Platform, StyleSheet } from 'react-native'

import R from '@/Assets/R'
import { getFontSize, getLineHeight, getWidth, HEIGHT, WIDTH } from '@/Config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  tabBarCustome: {
    borderWidth: 1,
    borderColor: R.colors.grey400,
    backgroundColor: R.colors.white,
    height: HEIGHT(70),
    width: getWidth() - WIDTH(32),
    alignSelf: 'center',
    // height: HEIGHT_PH(80),
    position: 'absolute',
    bottom: HEIGHT(12),
    borderRadius: WIDTH(40),
  },
  contentContainerTab: { alignItems: 'center' },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT(60),
    width: WIDTH(343) / 4,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
  itemFunc: {
    width: WIDTH(343),
    backgroundColor: R.colors.grey200,
    borderRadius: WIDTH(8),
    flexDirection: 'row',
    paddingHorizontal: WIDTH(16),
    paddingVertical: HEIGHT(16),
    marginBottom: HEIGHT(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabBar: {
    backgroundColor: R.colors.white100,
    borderTopWidth: 1,
    borderColor: R.colors.grey300,
  },
  viewLabel: { flexDirection: 'row', alignItems: 'center' },
  viewIcon: {
    marginRight: WIDTH(16),
    height: WIDTH(20),
    width: WIDTH(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFunc: {
    fontSize: getFontSize(12),
    maxWidth: WIDTH(250),
    marginTop: HEIGHT(4),
    // backgroundColor: 'red',
  },
})

export default styles
