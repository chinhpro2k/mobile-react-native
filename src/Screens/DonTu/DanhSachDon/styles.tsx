import { StyleSheet } from 'react-native'

import R from '@/Assets/R'
import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@/Config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  headerList: {
    marginVertical: HEIGHT(8),
    fontSize: getFontSize(16),
  },
  modalContainer: {
    backgroundColor: R.colors.white,
    width: WIDTH(330),
    minHeight: HEIGHT(80),
    borderRadius: WIDTH(8),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
  titleIcon: {
    marginTop: HEIGHT(8),
  },
  containerIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH(130),
    marginVertical: HEIGHT(16),
  },
  contentContainer: {
    flex: 1,
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
  hide: { display: 'none' },
  show: { display: 'flex' },
  hideBtn: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: WIDTH(4),
  },
  iconEye: { marginRight: WIDTH(12) },
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
    // backgroundColor: 'red',
  },
})

export default styles
