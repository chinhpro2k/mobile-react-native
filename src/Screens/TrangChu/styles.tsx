import { StyleSheet } from 'react-native'

import R from '@/Assets/R'
import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@/Config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
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
  viewLabel: { flexDirection: 'row', alignItems: 'center' },
  viewIcon: {
    marginRight: WIDTH(16),
    height: WIDTH(20),
    width: WIDTH(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFunc: {
    fontSize: getFontSize(18),
    maxWidth: WIDTH(250),
    lineHeight: getLineHeight(24),
  },
})

export default styles
