/* eslint-disable no-sparse-arrays */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import HeaderBase from '@/Components/Header/HeaderBase'
import { DVMC_TYPE, HEIGHT, KE_KHAI_ENUM } from '@/Config'
import FormDV1Cua from '@/Components/Form/DynamicForm'

const FormInput = [
  {
    type: DVMC_TYPE.TEXT_INPUT,
    label: 'Tên bài báo',
    isRequired: true,
    _id: 1,
  },
  {
    type: DVMC_TYPE.TEXT_INPUT,
    label: 'Địa chỉ bài báo',
    _id: 2,
    isRequired: true,
  },
  {
    type: DVMC_TYPE.TEXT_INPUT,
    label: 'Số',
    _id: 4,
  },
  {
    type: DVMC_TYPE.TEXT_INPUT,
    label: 'Số ISSN',
    _id: 5,
  },
  {
    type: DVMC_TYPE.TEXT_INPUT,
    label: 'Tập',
    _id: 4,
  },
  {
    type: DVMC_TYPE.TEXT_INPUT,
    label: 'Trang',
    _id: 5,
  },
  {
    type: DVMC_TYPE.TABLE,
    label: 'Tác giả',
    _id: '2',
    chuThich: true ? 'Thêm mới' : 'Xem chi tiết',
    onGoTo: () => console.log('hehe'),
    tableHead: ['STT', 'Tên hiển thị', 'Là tác giả chính'],
    // tableData: [
    //   [
    //     <View>
    //       <Text style={{ textAlign: 'center' }}>1</Text>
    //     </View>,
    //     <View>
    //       <Text>1</Text>
    //     </View>,
    //     <View>
    //       <Text>1</Text>
    //     </View>,
    //   ],
    // ],
  },
  {
    type: DVMC_TYPE.UPLOAD_SINGLE,
    label: 'Ảnh đại diện',
    fileType: ['image'],
    _id: 6,
  },
  {
    type: DVMC_TYPE.UPLOAD_SINGLE,
    label: 'File đính kèm',
    _id: 7,
  },
  {
    type: DVMC_TYPE.DATE_PICKER,
    label: 'Thời điểm đạt được',
    isRequired: true,
    _id: '2',
  },

  {
    type: DVMC_TYPE.DROP_LIST_MULTI,
    label: 'Ngôn ngữ',
    _id: '2',
    position: 'top',
    dataSource: [
      {
        label: 'Tiếng Anh',
      },
      {
        label: 'Tiếng Nhật',
      },
      {
        label: 'Tiếng Pháp',
      },
      {
        label: 'Tiếng Trung Quốc',
      },
      {
        label: 'Tiếng Việt',
      },
    ],
  },
]

const KeKhaiBaiBaoBaoCao = () => {
  return (
    <View style={styles.container}>
      <HeaderBase title={KE_KHAI_ENUM.GIAI_THUONG_KHOA_HOC} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: HEIGHT(30) }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <FormDV1Cua
          title="Test đơn vị 1 cửa"
          formInput={FormInput}
          formContainer={styles.formContainer}
          onSubmitForm={() => console.log('xxx')}
          onChangeValue={(value, id) => console.log('hehe', id, value)}
        />
      </ScrollView>
    </View>
  )
}

export default KeKhaiBaiBaoBaoCao
