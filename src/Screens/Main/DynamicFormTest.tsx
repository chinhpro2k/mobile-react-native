import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormDV1Cua from '@/Components/Form/DynamicForm'
import { HEIGHT } from '@/Config'
import HeaderBase from '@/Components/Header/HeaderBase'
import ButtonBase from '@/Components/Button'

const DV1Cua = () => {
  const data = [
    {
      type: 'TEXT_INPUT',
      label: 'Tên trường',
      isRequired: true,
      _id: 'tenTruong',
    },
    {
      type: 'DROP_LIST_MULTI',
      label: 'Multi Select',
      dataSource: [
        {
          value: '1111',
          label: 'hihihihi',
        },
        {
          value: '222',
          label: 'Ogun',
        },
        {
          value: '333',
          label: 'Calabar',
        },
        {
          value: '444',
          label: 'Lagos',
        },
        {
          value: '555',
          label: 'Maiduguri',
        },
        {
          value: '666',
          label: 'Anambra',
        },
        {
          value: '7777',
          label: 'Benue',
        },
        {
          value: '888',
          label: 'Kaduna',
        },
        {
          value: '123 ',
          label: 'Abuja',
        },
      ],
      isRequired: true,
      _id: 'level',
    },
    {
      type: 'DROP_LIST_SINGLE',
      label: 'Giấy phép kinh doanh',
      isRequired: true,
      dataSource: [
        {
          value: '1111',
          label: 'hihihihi',
          relatedElement: [
            {
              type: 'TEXT_BLOCK',
              label: 'Địa chỉ BĐS',
              relatedElement: [],
              _id: 'QVctGK0PSnn8E3yRgOGVr',
            },
            {
              type: 'TEXT_INPUT',
              label: 'Tên tòa nhà / Khu dân cư / dự án',
              isRequired: true,
              relatedElement: [],
              _id: 'H74rEEBRTwj7w12_e38Zz',
            },
          ],
        },
        {
          value: '222',
          label: 'Ogun',
        },
        {
          value: '333',
          label: 'Calabar',
        },
        {
          value: '444',
          label: 'Lagos',
        },
        {
          value: '555',
          label: 'Maiduguri',
        },
        {
          value: '666',
          label: 'Anambra',
        },
        {
          value: '7777',
          label: 'Benue',
        },
        {
          value: '888',
          label: 'Kaduna',
        },
        {
          value: '123 ',
          label: 'Abuja',
        },
      ],
      _id: 'giayPhepKinhDoanh',
    },
    {
      type: 'UPLOAD_MULTI',
      label: 'Giấy phép kinh doanh',
      isRequired: true,
      _id: 'giayPhepKinhDoanh',
    },
    {
      type: 'HTML',
      label: 'Tên trường',
      isRequired: true,
      _id: 'tenTruong',
    },
    {
      type: 'CHECKLIST',
      label: 'Trình độ',
      dataSource: [
        {
          label: '1',
        },
        {
          label: '2',
        },
        {
          label: '3',
        },
        {
          label: '4',
        },
        {
          label: '5',
        },
      ],
      isRequired: true,
      _id: 'level',
    },
    // {
    //   type: 'DON_VI_HANH_CHINH',
    //   label: 'Trình độ',
    //   dataSource: [
    //     {
    //       label: '1',
    //     },
    //     {
    //       label: '2',
    //     },
    //     {
    //       label: '3',
    //     },
    //     {
    //       label: '4',
    //     },
    //     {
    //       label: '5',
    //     },
    //   ],
    // },
    {
      type: 'RADIO_BUTTON',
      label: 'Trình độ',
      dataSource: [
        {
          label: '1',
          relatedElement: [
            {
              type: 'TEXT_BLOCK',
              label: 'Địa chỉ BĐS',
              relatedElement: [],
              _id: 'QVctGK0PSnn8E3yRgOGVr',
            },
            {
              type: 'TEXT_INPUT',
              label: 'Tên tòa nhà / Khu dân cư / dự án',
              isRequired: true,
              relatedElement: [],
              _id: 'H74rEEBRTwj7w12_e38Zz',
            },
          ],
        },
        {
          label: '2',
        },
        {
          label: '3',
        },
        {
          label: '4',
        },
        {
          label: '5',
        },
      ],
      isRequired: true,
      _id: 'level',
    },
    { type: 'DATE_PICKER', label: 'Multi Select' },
  ]
  return (
    <View style={{ flex: 1 }}>
      <HeaderBase title="Dynamic Form" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: HEIGHT(30) }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <FormDV1Cua
          title="Test đơn vị 1 cửa"
          formInput={data}
          formContainer={styles.formContainer}
          onChangeValue={(value, id) => console.log('hehe', id, value)}
        />
      </ScrollView>
    </View>
  )
}

export default DV1Cua

const styles = StyleSheet.create({
  formContainer: { marginTop: HEIGHT(16) },
})
