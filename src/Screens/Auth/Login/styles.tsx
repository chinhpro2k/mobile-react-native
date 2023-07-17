import { StyleSheet } from 'react-native'

import R from '@/Assets/R'
import { getFontSize, getLineHeight, getWidth, HEIGHT, WIDTH } from '@/Config'

const styles = StyleSheet.create({
  ava: {
    height: WIDTH(120),
    width: WIDTH(120),
    alignSelf: 'center',
    // borderRadius: WIDTH(1110),
  },
  textQMK: {
    color: R.colors.white,
    textDecorationLine: 'underline',
    fontSize: getFontSize(14),
  },
  viewGhiNho: { flexDirection: 'row', marginBottom: HEIGHT(24) },
  textQuayLaiDangNhap: {
    color: R.colors.white,
    textDecorationLine: 'underline',
    fontSize: getFontSize(14),
  },
  viewQMK: { alignItems: 'flex-end', marginBottom: HEIGHT(24) },
  container: {
    flex: 1,
    backgroundColor: R.colors.MAIN_APP_COLOR,
    justifyContent: 'center',
  },
  containerViewContent: {
    width: getWidth(),
    paddingHorizontal: WIDTH(16),
  },
  viewAnh: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: HEIGHT(40),
  },
  viewTextICI: {
    color: R.colors.white,
    fontSize: getFontSize(20),
    fontWeight: '700',
    marginLeft: WIDTH(4),
  },
  textInput: {
    marginBottom: HEIGHT(16),
    background: 'white',
    borderRadius: WIDTH(8),
  },
  input: {
    fontSize: getFontSize(14),
    height: HEIGHT(40),
    color: R.colors.black0,
  },
  button: { backgroundColor: '#2d88dd', marginTop: HEIGHT(16) },
})

export default styles
