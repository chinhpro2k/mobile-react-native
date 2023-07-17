import { StyleSheet } from 'react-native'

// import config
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
import R from '@/Assets/R'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: R.colors.white100,
    flex: 1,
  },
  image: {
    height: WIDTH(200),
    width: WIDTH(200),
  },
  label: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HEIGHT(30),
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HEIGHT(250),
  },
  textLabel: {
    color: R.colors.primaryColor,
    fontSize: getFontSize(28),
    fontWeight: 'bold',
  },
})
export default styles
