import { StyleSheet } from 'react-native'

import R from '@/Assets/R'
import { HEIGHT, WIDTH } from '@/Config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.grey200,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
  formContainer: { marginTop: HEIGHT(16) },
})

export default styles
