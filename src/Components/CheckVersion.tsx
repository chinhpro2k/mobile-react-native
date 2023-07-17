/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, Platform, Linking, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useToast } from 'native-base'
import VersionCheck from 'react-native-version-check'

// i18n
import { translate } from '@/i18n'

// config
import {
  getFontSize,
  getLineHeight,
  WIDTH,
  urlAppStore,
  urlCHPlay,
  showToast,
  STORE,
  HEIGHT,
} from '@/Config'

// components
import Toast from '@/Components/Toast'
import TextBase from './Text'
import TouchableLayout from './Layout/TouchableLayout'
import ModalBase from './Modal'

// themes
import { Images } from '@/Theme'
import BoxBase from './Layout/Box'

const CheckVersion = () => {
  const [showModal, setShowModal] = useState(false)
  const toast = useToast()

  const getLatestVersion = async () => {
    return fetch(Platform.OS === 'ios' ? urlAppStore : urlCHPlay)
      .then(res => res.text())
      .then(text => {
        if (Platform.OS === 'android') {
          const match = text.match(/Current Version.+>([\d.]{4,10})<\/span>/)
          if (match) {
            const latestVersion = match[1].trim()
            return Promise.resolve(latestVersion)
          }
          return Promise.reject()
        } else {
          const match = text.trim().match(/"version":"[\d.]{4,10}"/)

          if (match) {
            const latestVersion = match[0]
              .trim()
              .substring(11, match[0].trim().length - 1)
            return Promise.resolve(latestVersion)
          }
          return Promise.reject()
        }
      })
  }

  const checkUpdate = () => {
    getLatestVersion().then(async res => {
      let latestVersion = res
      let currentVersion = VersionCheck.getCurrentVersion()
      VersionCheck.needUpdate({
        currentVersion,
        latestVersion: latestVersion.toString(),
      }).then(async result => {
        if (result && result.isNeeded) {
          //   await AsyncStorageUtils.save(AsyncStorageUtils.KEY.IS_FIRST, 'true')
          setShowModal(true)
        }
      })
    })
  }

  useEffect(() => {
    checkUpdate()
  }, [])

  const onUpdatePressed = async () => {
    try {
      const url = await VersionCheck.getStoreUrl()
      Linking.canOpenURL(url)
        .then(supported => {
          if (supported) {
            Linking.openURL(url)
          } else {
            showToast(
              toast,
              <Toast
                type="error"
                content={translate('UNG_DUNG_KO_TON_TAI', {
                  store: Platform.OS === 'ios' ? STORE.IOS : STORE.ANDROID,
                })}
              />,
              'top',
            )
          }
        })
        .catch(() => {
          showToast(
            toast,
            <Toast
              type="error"
              content={translate('UNG_DUNG_KO_TON_TAI', {
                store: Platform.OS === 'ios' ? STORE.IOS : STORE.ANDROID,
              })}
            />,
            'top',
          )
        })
    } catch (error) {}
    setShowModal(false)
  }

  return (
    <ModalBase
      Header={
        <BoxBase
          w={WIDTH(282)}
          h={HEIGHT(200)}
          alignSelf="center"
          mt={-HEIGHT(17)}
        >
          <Image
            source={Images.rocket}
            resizeMode="contain"
            style={styles.imgRocket}
          />
          <Image
            source={Images.cloud}
            resizeMode="stretch"
            style={styles.imgHeader}
          />
          <Image
            source={Images.skyAndStar}
            resizeMode="stretch"
            style={[styles.imgHeader, styles.imgSky]}
          />
        </BoxBase>
      }
      Body={
        <TextBase
          textContent={translate('NOI_DUNG_CAP_NHAT')}
          fontSize={getFontSize(15)}
          lineHeight={getLineHeight(24)}
          textAlign="center"
        />
      }
      Footer={
        <TouchableLayout
          style={styles.viewTxt}
          onPress={onUpdatePressed}
          noScale
        >
          <TextBase
            textContent={translate('CAP_NHAT_NGAY')}
            fontWeight="bold"
            fontSize={getFontSize(18)}
            lineHeight={getLineHeight(24)}
            textAlign="center"
          />
        </TouchableLayout>
      }
      showModal={showModal}
      customFormStyle={styles.form}
    />
  )
}

export default CheckVersion

const styles = StyleSheet.create({
  containerHeader: { justifyContent: 'center' },
  viewTxt: { flex: 1 },
  imgHeader: {
    width: WIDTH(282),
    height: HEIGHT(200),
    position: 'absolute',
  },
  form: {
    width: WIDTH(280),
    overflow: 'visible',
  },
  imgSky: { height: HEIGHT(230) },
  imgRocket: {
    width: WIDTH(250),
    height: WIDTH(250),
    top: -HEIGHT(100),
    zIndex: 1,
    right: -HEIGHT(85),
    position: 'absolute',
  },
})
