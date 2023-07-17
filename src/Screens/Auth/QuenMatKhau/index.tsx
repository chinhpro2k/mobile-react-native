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
import React, { useEffect, useState } from 'react'
import {
  getFontSize,
  getHeight,
  getWidth,
  HEIGHT,
  popupCancel,
  popupOk,
  WIDTH,
} from '@/Config'
import styles from '../Login/styles'
import R from '@/Assets/R'
import SplashScreen from 'react-native-splash-screen'
import InputBase from '@/Components/Input/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Icon, Pressable } from 'native-base'
import ButtonBase from '@/Components/Button'
import Form from '@/Components/Form'
import * as yup from 'yup'
import { getInfo, quenMatKhau } from '@/Services/modules/users'
import { navigate, reset } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
// import CustomDialog from '@/Components/Popup/CustomConfirmDialog'

const QuenMatKhau = () => {
  const [loading, setloading] = useState(false)
  const onSubmit = async (values: any) => {
    Keyboard.dismiss()
    setloading(true)
    try {
      const body: any = { email: values?.email?.trim() }
      const response = await quenMatKhau(body)
      if (response?.data?.success) {
        popupOk(
          'Thông báo',
          `Email khôi phục tài khoản đã được gửi, vui lòng kiếm tra trong hộp thư email: ${
            values?.email ?? ''
          }`,
          () => navigate(ScreenName.Login),
        )
      } else {
        popupOk('Thông báo', response?.data?.message ?? 'Đã có lỗi xảy ra!')
      }
      setloading(false)
    } catch (error) {
      setloading(false)
    }
  }
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email('Email không hợp lệ!')
      .required('Vui lòng nhập Email!'),
  })
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
    >
      <View style={styles.containerViewContent}>
        {/* <CustomDialog /> */}
        <View style={styles.viewAnh}>
          <Image
            source={R.images.logoApp}
            resizeMode="contain"
            style={styles.ava}
          />
          <Text style={styles.viewTextICI}>{'ICI'}</Text>
        </View>
        {/* Text Input */}
        <Form
          initialValues={{ email: '' }}
          onSubmitForm={onSubmit}
          validationSchema={loginValidationSchema}
        >
          {({ handleChange, handleSubmit, values, errors }) => {
            return (
              <>
                <InputBase
                  placeholder="Email"
                  placeholderTextColor={R.colors.grey600}
                  onChangeText={handleChange('email')}
                  backgroundColor={R.colors.white}
                  errorContent={errors?.email ?? ''}
                  value={values?.email}
                  errorColor={R.colors.white}
                  InputLeftElement={<IconEmail />}
                  style={{ fontSize: getFontSize(14), height: HEIGHT(40) }}
                  containerStyle={styles.textInput}
                />
                {/* Text Input */}

                {/* Quên mật khẩu */}
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigate(ScreenName.Login)}
                  style={styles.viewQMK}
                >
                  <Text style={styles.textQuayLaiDangNhap}>
                    Quay lại trang đăng nhập
                  </Text>
                </TouchableOpacity>
                {/* Quên mật khẩu */}

                {/* Button Đăng Nhập */}
                <ButtonBase
                  isLoading={loading}
                  style={styles.button}
                  textColor={R.colors.white}
                  onPress={handleSubmit}
                  title="Khôi phục"
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

export default QuenMatKhau
const IconEmail = () => (
  <MaterialCommunityIcons
    name="email"
    size={WIDTH(16)}
    style={{ marginLeft: WIDTH(8) }}
    color={R.colors.MAIN_APP_COLOR}
  />
)
