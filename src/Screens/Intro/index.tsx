import { Image, StatusBar, View, Text } from 'react-native'
import * as React from 'react'
import * as Animatable from 'react-native-animatable'

// import config
import R from '@/Assets/R'

// style
import styles from './styles'
import { replace, reset } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import { rootServerInstance } from '@/Services/helpers'
import axios from 'axios'
type Props = {
  navigation: any
  route: {
    params: {
      isExpired: boolean
    }
  }
}

const Intro = (props: any) => {
  const timeOut = React.useRef<any>(null)

  React.useEffect(() => {
    getInitData()
  }, [])

  const getInitData = async () => {
    const account: any = await AsyncStorageUtils.getObject(
      AsyncStorageUtils.KEY.CURRENTTOKEN,
    )
    clearTimeout(timeOut.current)
    timeOut.current = setTimeout(() => {
      if (account) {
        rootServerInstance.setHeader(
          'Authorization',
          `Bearer ${account?.accessToken}`,
        )
        axios.defaults.headers.common.Authorization = `Bearer ${account?.accessToken}`

        reset(ScreenName.TabMain)
      } else {
        replace(ScreenName.Login)
      }
    }, 1600)
  }
  return (
    <View style={styles.container}>
      <StatusBar
        hidden
        backgroundColor={R.colors.white100}
        barStyle="light-content"
      />
      <Animatable.View
        animation="bounceIn"
        direction="alternate"
        duration={4000}
        style={styles.logoContainer}
      >
        <Image
          resizeMode="contain"
          source={R.images.logoApp}
          style={styles.image}
        />
      </Animatable.View>
      <Animatable.View
        animation="bounceInLeft"
        direction="alternate"
        duration={3500}
        style={styles.label}
      >
        <Text style={styles.textLabel}>Thông báo mời thầu</Text>
      </Animatable.View>
    </View>
  )
}

export default Intro
