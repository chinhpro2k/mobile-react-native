/* eslint-disable handle-callback-err */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DeviceInfo from 'react-native-device-info'
import {
  getFontSize,
  getHeight,
  getMessageByStatusCode,
  getWidth,
  HEIGHT,
  popupCancel,
  popupOk,
  WIDTH,
} from '@/Config'
import R from '@/Assets/R'
import styles from './styles'
import SplashScreen from 'react-native-splash-screen'
import InputBase from '@/Components/Input/index'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import { authorize, revoke, refresh, logout } from 'react-native-app-auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Checkbox, Icon, Pressable } from 'native-base'
import ButtonBase from '@/Components/Button'
import Form from '@/Components/Form'
import * as yup from 'yup'
import { getInfo, loginMuaSamCong } from '@/Services/modules/users'
import { navigate, reset } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import { showToast, TypeToast } from '@/Components/Popup/Toast'
import moment from 'moment'
import LoadingComponent from '@/Components/LoadingComponent'
import { IResponseLogin } from '@/Services/modules/users/interface/login'
import { rootServerInstance } from '@/Services/helpers'
import OneSignal from 'react-native-onesignal'
// import CustomDialog from '@/Components/Popup/CustomConfirmDialog'

const DangNhap = () => {
  const [show, setShow] = React.useState(false)
  const [loading, setloading] = useState(false)
  const [loadingDangNhap, setloadingDangNhap] = useState(false)

  const [soLanNhapSai, setSoLanNhapSai] = useState(0)
  const [thoiGianConLai, setThoiGianConLai] = useState<any>()
  const [check, setcheck] = useState(false)
  const [emailDaLuu, setemailDaLuu] = useState('')
  const oneSignalId = useRef<any>('')
  useEffect(() => {
    SplashScreen.hide()
    getID()
    getDeviceStateValue()
  }, [])
  const getID = async () => {
    setloading(true)
    try {
      const response: any = await AsyncStorageUtils.getObject(
        AsyncStorageUtils.KEY.TAI_KHOAN,
      )
      setcheck(response?.id ? true : false)
      setemailDaLuu(response?.id ?? '')
      setloading(false)
    } catch (error) {
      setloading(false)
    }
  }

  const onLogin = async (data: any, values: any) => {
    rootServerInstance.setHeader('Authorization', `Bearer ${data?.accessToken}`)
    axios.defaults.headers.common.Authorization = `Bearer ${data?.accessToken}`
    await AsyncStorageUtils.saveObject(AsyncStorageUtils.KEY.CURRENTTOKEN, data)
    await AsyncStorageUtils.saveObject(AsyncStorageUtils.KEY.TAI_KHOAN, {
      id: values?.email,
    })

    reset(ScreenName.TabMain)
  }

  const getDeviceStateValue = async () => {
    const valueDeviceState = await OneSignal.getDeviceState()

    oneSignalId.current = valueDeviceState?.userId
  }

  const onSubmit = async (values: any) => {
    Keyboard.dismiss()
    setloadingDangNhap(true)
    try {
      const deviceId = await DeviceInfo.getUniqueId()
      const deviceName = await DeviceInfo.getDeviceName()
      const body = {
        username: values?.email,
        password: values?.password,
        deviceId: deviceId,
        deviceName: deviceName,
        oneSignalId: oneSignalId.current ?? '',
      }
      const res: any = await loginMuaSamCong(body)
      if (res?.statusCode === 201) {
        onLogin(res?.data, values)
      } else {
        popupOk('Thông báo', getMessageByStatusCode(res?.statusCode))
      }
      setloadingDangNhap(false)
    } catch (error) {
      setloadingDangNhap(false)
    }
  }
  const loginValidationSchema = yup.object().shape({
    email: yup.string().required('Vui lòng nhập tên đăng nhập hoặc email!'),
    password: yup.string().required('Vui lòng nhập mật khẩu!'),
  })
  if (loading) {
    return (
      <View style={styles.container}>
        <LoadingComponent color={R.colors.white} size={'lg'} />
      </View>
    )
  }
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      bounces={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.containerViewContent}>
        <View style={styles.viewAnh}>
          <Image
            source={R.images.logoApp}
            resizeMode="contain"
            style={styles.ava}
          />
        </View>
        <Form
          initialValues={{ email: emailDaLuu, password: '' }}
          onSubmitForm={onSubmit}
          validationSchema={loginValidationSchema}
        >
          {({ handleChange, handleSubmit, values, errors }) => {
            return (
              <>
                <InputBase
                  placeholder="Tên đăng nhập hoặc email"
                  placeholderTextColor={R.colors.grey600}
                  onChangeText={handleChange('email')}
                  backgroundColor={R.colors.white}
                  errorContent={errors?.email ?? ''}
                  value={values?.email}
                  errorColor={R.colors.white}
                  InputLeftElement={<IconUser />}
                  style={styles.input}
                  containerStyle={styles.textInput}
                />
                <InputBase
                  placeholder="Mật khẩu"
                  errorColor={R.colors.white}
                  backgroundColor={R.colors.white}
                  style={styles.input}
                  containerStyle={{ marginBottom: HEIGHT(16) }}
                  placeholderTextColor={R.colors.grey600}
                  value={values?.password}
                  errorContent={errors?.password}
                  onChangeText={handleChange('password')}
                  type={show ? 'text' : 'password'}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={
                          <Entypo
                            name={show ? 'eye' : 'eye-with-line'}
                            size={WIDTH(16)}
                            style={{ marginRight: WIDTH(8) }}
                            color={R.colors.MAIN_APP_COLOR}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  InputLeftElement={<IconKey />}
                />
                <ButtonBase
                  isLoading={loadingDangNhap}
                  style={styles.button}
                  textColor={R.colors.white}
                  onPress={handleSubmit}
                  title="Đăng nhập"
                />
              </>
            )
          }}
        </Form>
        {/* Button Đăng Nhập */}
      </View>
    </ScrollView>
  )
}

export default DangNhap
const IconKey = () => (
  <FontAwesome5
    name="key"
    size={WIDTH(16)}
    style={{ marginLeft: WIDTH(8) }}
    color={R.colors.MAIN_APP_COLOR}
  />
)
const IconUser = () => (
  <FontAwesome5
    name="user-alt"
    size={WIDTH(16)}
    style={{ marginLeft: WIDTH(8) }}
    color={R.colors.MAIN_APP_COLOR}
  />
)
