import { StyleSheet } from 'react-native'

import R from '@/Assets/R'
import { getFontSize, getLineHeight, HEIGHT, WIDTH } from '@/Config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  containerCon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: WIDTH(36),
    width: WIDTH(36),
  },
  viewHeader: {
    width: WIDTH(300),
    paddingHorizontal: WIDTH(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2d88dd',
    width: WIDTH(100),
    alignSelf: 'center',
  },
})

export default styles
