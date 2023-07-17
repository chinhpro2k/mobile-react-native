import { StyleSheet } from 'react-native'

import R from '@/Assets/R'
import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@/Config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: R.colors.white,
  },
  title: {
    marginLeft: WIDTH(16),
    color: R.colors.black0,
    fontWeight: 'bold',
    fontSize: getFontSize(18),
    marginTop: HEIGHT(4),
  },
  scrollView: { paddingBottom: HEIGHT(30) },
  formContainer: { marginTop: HEIGHT(16) },
  touchCirle: {
    width: WIDTH(36),
    height: WIDTH(36),
    borderRadius: WIDTH(36),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: HEIGHT(6),
    marginHorizontal: WIDTH(8),
  },
  contentContainer: {
    // flex: 1,
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
  textFunc: { fontSize: getFontSize(18) },
})

export default styles
