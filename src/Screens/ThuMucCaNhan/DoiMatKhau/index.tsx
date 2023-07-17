/* eslint-disable react-hooks/exhaustive-deps */
import {
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import ButtonBase from '@/Components/Button'
import R from '@/Assets/R'
import Form from '@/Components/Form'
import * as yup from 'yup'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import InputBase from '@/Components/Input'
import { getFontSize, HEIGHT, popupCancel, popupOk, WIDTH } from '@/Config'
import { Icon, Pressable } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import { getInfo, postDoiMatKhau } from '@/Services/modules/users'
import { useSelector } from '@/Redux/Reducers'
import { goBack, navigate, reset } from '@/Navigators/navigationServices'
import LoadingComponent from '@/Components/LoadingComponent'
import axios from 'axios'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import ScreenName from '@/Navigators/screenNames'
import { showToast, TypeToast } from '@/Components/Popup/Toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const listInput = (values, errors) => {
  return [
    {
      error: errors?.passwordOld ?? '',
      value: values?.passwordOld ?? '',
      id: 'passwordOld',
      title: 'Mật khẩu hiện tại',
    },
    {
      error: errors?.passwordNew ?? '',
      value: values?.passwordNew ?? '',
      title: 'Mật khẩu mới',
      id: 'passwordNew',
    },
    {
      error: errors?.passwordAgain ?? '',
      value: values?.passwordAgain ?? '',
      title: 'Nhập lại mật khẩu',
      id: 'passwordAgain',
    },
  ]
}

const ThongTinCaNhan = props => {
  const doiLanDau: boolean = props?.route?.params?.doiLanDau
  const onRefresh: () => void = props?.route?.params?.onRefresh
  const [noBack, setnoBack] = useState(false)
  useEffect(() => {
    getInit()
  }, [])

  const getInit = async () => {
    try {
      const resUser = await getInfo()
      if (resUser?.data?.data?.isFirstLogin) {
        setnoBack(true)
      } else {
        setnoBack(false)
      }
    } catch (error) {}
  }
  const [loading, setloading] = useState(false)
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    )
    return () => backHandler.remove()
  }, [])
  const handleBackPress = () => {
    goBackHome()
    // Xử lý khi người dùng bấm nút back ở đây
    return true // Nếu muốn chặn thoát ứng dụng bằng nút back, trả về true
  }
  const onHandleSubmit = async (values: any) => {
    setloading(true)
    try {
      const body = {
        oldPassword: values?.passwordOld ?? '',
        confirmPassword: values?.passwordAgain ?? '',
        password: values?.passwordNew ?? '',
      }
      const doiMatKhau = await postDoiMatKhau(body)
      if (doiMatKhau?.success) {
        if (doiLanDau) {
          onRefresh && onRefresh()
        }
        getInit()
        setnoBack(false)
        showToast({
          title: 'Thông báo',
          message: 'Đổi mật khẩu thành công!',
          type: TypeToast.SUCCESS_BUG,
        })
      } else {
        showToast({
          title: 'Thông báo',
          message: doiMatKhau?.message ?? 'Đã có lỗi xảy ra!',
          type: TypeToast.ERROR,
        })
      }
      setloading(false)
    } catch (error) {
      popupOk('Thông báo', 'Đã có lỗi xảy ra!')
      setloading(false)
    }
  }
  const goBackHome = () => {
    noBack
      ? popupOk(
          'Thông báo',
          'Bạn vui lòng đổi mật khẩu mặc định trong lần đăng nhập đầu tiên để tăng tính bảo mật của hệ thống!',
        )
      : goBack()
  }
  const onSubmit = async (values: any) => {
    Keyboard.dismiss()
    if (values?.passwordNew !== values?.passwordAgain) {
      // popupOk('Thông báo', 'Mật khẩu mới và nhập lại mật khẩu không khớp nhau!')
      showToast({
        title: 'Thông báo',
        message: 'Mật khẩu mới và nhập lại mật khẩu không khớp nhau!',
        type: TypeToast.ERROR,
      })
      return
    }
    popupCancel('Thông báo', 'Bạn có muốn đổi mật khẩu?', () =>
      onHandleSubmit(values),
    )
  }
  const loginValidationSchema = yup.object().shape({
    passwordOld: yup
      .string()
      // .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Yêu cầu bắt buộc!'),
    passwordNew: yup
      .string()
      // .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Yêu cầu bắt buộc!'),
    passwordAgain: yup
      .string()
      // .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Yêu cầu bắt buộc!'),
  })
  return (
    <View style={{ flex: 1 }}>
      <HeaderBase onButton={goBackHome} title="Đổi mật khẩu" />
      <Form
        initialValues={{ passwordOld: '', passwordNew: '', passwordAgain: '' }}
        onSubmitForm={onSubmit}
        validationSchema={loginValidationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          return (
            <View
              style={{
                paddingHorizontal: WIDTH(16),
                paddingVertical: HEIGHT(16),
              }}
            >
              <FlatList
                keyboardShouldPersistTaps="handled"
                data={listInput(values, errors)}
                extraData={listInput(values, errors)}
                renderItem={({ item, index }) => (
                  <ItemInput
                    item={item}
                    errors={errors}
                    handleChange={handleChange}
                  />
                )}
              />
              <ButtonBase
                style={{ backgroundColor: '#2d88dd' }}
                textColor={R.colors.white}
                onPress={handleSubmit}
                title="Đổi mật khẩu"
              />
            </View>
          )
        }}
      </Form>
      <LoadingComponent isLoading={loading} />
    </View>
  )
}

export default ThongTinCaNhan

const ItemInput = ({ item, errors, handleChange }) => {
  const [show, setshow] = useState(false)
  return (
    <InputBase
      placeholder={item?.title}
      placeholderTextColor={R.colors.grey600}
      onChangeText={handleChange(item?.id)}
      backgroundColor={R.colors.white}
      errorContent={item?.error ?? ''}
      value={item?.value}
      type={show ? 'text' : 'password'}
      InputLeftElement={<IconKey />}
      InputRightElement={<IconEye show={show} onPress={() => setshow(!show)} />}
      style={{ fontSize: getFontSize(14), height: HEIGHT(40) }}
      containerStyle={{
        marginBottom: HEIGHT(16),
        background: 'white',
        borderRadius: WIDTH(8),
      }}
    />
  )
}
const IconKey = () => (
  <FontAwesome5
    name="key"
    size={WIDTH(16)}
    style={{ marginLeft: WIDTH(8) }}
    color={R.colors.MAIN_APP_COLOR}
  />
)
const IconEye = ({ onPress, show }) => {
  return (
    <Pressable onPress={onPress}>
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
  )
}
