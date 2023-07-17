/* eslint-disable react-hooks/exhaustive-deps */
import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { SceneMap } from 'react-native-tab-view'

// components
import Form from '@/Components/Form'
import BoxBase from '@/Components/Layout/Box'
import TextBase from '@/Components/Text'
import ToastItem from '@/Components/Toast'
import { useToast } from 'native-base'
import Picker from '@/Components/Picker/Picker'
import Input from '@/Components/Input'

import DatePicker from '@/Components/Picker/DatePicker'
import MultipleSelectPicker from '@/Components/Picker/MultipleSelectPicker'

import ButtonBase from '@/Components/Button'
import CheckBox from '@/Components/CheckBox'
import RadioButton from '@/Components/RadioButton'
import HTMLEdit from '@/Components/HTMLEdit'
import DonViHanhChinh from '@/Components/DonViHanhChinh'
import UploadFile from '@/Components/UploadFile'
import { HEIGHT, WIDTH } from '@/Config'
import R from '@/Assets/R'
import HeaderBase from '@/Components/Header/HeaderBase'
const Main = () => {
  const [multipleSelectValue, setMultipleSelectValue] = useState<any[]>([])
  const toast = useToast()
  useEffect(() => {
    SplashScreen.hide()

    // toast.show({
    //   render: () => <ToastItem content="Test" type="success" />,
    // })
  }, [])

  const FirstRoute = () => (
    <BoxBase flex={1}>
      <TextBase textContent="First Tab" />
    </BoxBase>
  )

  const SecondRoute = () => (
    <BoxBase flex={1}>
      <TextBase textContent="Second Tab" />
    </BoxBase>
  )

  const renderScene = ({
    route,
  }: {
    route: { key: string; title: string }
  }) => {
    switch (route.key) {
      case '0':
        return <FirstRoute />
      case '1':
        return <SecondRoute />
    }
  }

  const onChooseMultiple = (val: any[]) => {
    setMultipleSelectValue(val)
  }
  return (
    <View style={{ flex: 1, backgroundColor: R.colors.grey300 }}>
      <HeaderBase title="Thông tin cá nhân" />
      <Form
        initialValues={{ picker: 'hehe3' }}
        onSubmitForm={values => console.log(values?.picker)}
        // onSubmit={values => console.log('values2222', values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View
            style={{
              width: WIDTH(343),
              marginTop: HEIGHT(16),
              marginHorizontal: WIDTH(16),
              borderRadius: WIDTH(8),
              backgroundColor: R.colors.white,
              paddingHorizontal: WIDTH(16),
              paddingVertical: HEIGHT(16),
              // paddingTop: HEIGHT(80),
            }}
          >
            <HTMLEdit label="Thông tin khác" errorContent="" />
            <Input
              containerStyle={{ marginBottom: HEIGHT(8) }}
              label="Họ và tên"
              style={{ backgroundColor: 'white' }}
              isRequired={true}
              // errorContent={'Đã có lỗi xảy ra'}
            />
            <Input
              containerStyle={{ marginBottom: HEIGHT(8) }}
              multiline
              height={HEIGHT(80)}
              label="Nhập thông tin cá nhân"
              style={{ backgroundColor: 'white' }}
              isRequired={true}
              // errorContent={'Đã có lỗi xảy ra'}
            />
            {/* <Picker
              defaultValue={values?.picker}
              // value={values.picker}
              data={[
                { label: 'Developers', value: 'hehe1' },
                { label: 'hyh', value: 'hehe2' },
                { label: 'Cán bộ', value: 'hehe3' },
                { label: 'hs', value: 'hehe4' },
              ]}
              isRequired={true}
              label={'Vị trí'}
              // errorContent={'hhihihihi'}
              onChangeValue={handleChange('picker')}
            />
            <DatePicker
              value={new Date()}
              mode={'datetime'}
              label="Chọn thời gian"
              // errorContent="Vui lòng chọn lại"
              containerStyle={{ width: WIDTH(311) }}
              onDateChange={value => console.log(value)}
            /> */}
            {/* <RadioButton
              data={[
                { label: 'Nam', value: 'hehe1' },
                { label: 'Nữ', value: 'hehe2' },
                { label: 'Khác', value: 'hehe3' },
                // { label: 'Item 4', value: 'hehe4' },
              ]}
              label="Chọn giới tính"
              // errorContent="Vui lòng chọn lại"
            />
            <CheckBox
              // errorContent={'hehe'}
              label="Ngôn ngữ"
              // errorContent="Vui lòng chọn lại"
              data={[
                { label: 'Tiếng Việt', value: 'hehe1' },
                { label: 'Tiếng Anh', value: 'hehe2' },
                { label: 'Tiếng Nhật', value: 'hehe3' },
                { label: 'Tiếng Pháp', value: 'hehe4' },
              ]}
            /> */}
            {/* <DonViHanhChinh onChangeValue={value => console.log(value)} /> */}
            <MultipleSelectPicker
              data={[
                {
                  value: '1111',
                  name: '',
                },
                {
                  value: '222',
                  name: 'Ogun',
                },
                {
                  value: '333',
                  name: 'Calabar',
                },
                {
                  value: '444',
                  name: 'Lagos',
                },
                {
                  value: '555',
                  name: 'Maiduguri',
                },
                {
                  value: '666',
                  name: 'Anambra',
                },
                {
                  value: '7777',
                  name: 'Benue',
                },
                {
                  value: '888',
                  name: 'Kaduna',
                },
                {
                  value: '123 ',
                  name: 'Abuja',
                },
              ]}
              displayKey="name"
              title="Multi select"
              // single
              uniqueKey="value"
              value={multipleSelectValue}
              onChoose={onChooseMultiple}
            />
            <UploadFile />
            {/* <ButtonBase title="hehe" onPress={handleSubmit} /> */}
          </View>
        )}
      </Form>
    </View>
    // <View />
  )
}

export default Main

const styles = StyleSheet.create({
  container: {},
})
