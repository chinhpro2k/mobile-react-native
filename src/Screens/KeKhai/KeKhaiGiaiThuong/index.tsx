/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sparse-arrays */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import HeaderBase from '@/Components/Header/HeaderBase'
import { DVMC_TYPE, getHeight, HEIGHT, KE_KHAI_ENUM } from '@/Config'
import FormDV1Cua from '@/Components/Form/DynamicForm'
import { getListNgonNgu } from '@/Services/modules/users'
import LoadingComponent from '@/Components/LoadingComponent'
import R from '@/Assets/R'
import { navigate } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
const bodyNhaKhoaHoc = {
  fields: 'id,hoVaTen,canBoCode',
  filters: [],
  pageInfo: { page: 1, pageSize: 666 },
  sorts: [{ field: 'hoVaTen', dir: 1 }],
}
const bodyNgoaiNgu = {
  fields: 'id,tenNgonNgu',
  filters: [],
  pageInfo: { page: 1, pageSize: 666 },
  sorts: [{ field: 'tenNgonNgu', dir: 1 }],
}
const formInputInit = (arrNgonNgu: any, onGoTo?: () => void) => {
  return [
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Mã giải thưởng',
      isRequired: true,
      _id: 1,
    },
    {
      type: DVMC_TYPE.CHECKLIST,
      _id: 12,
      dataSource: [{ label: 'hehe' }],
    },
    {
      type: DVMC_TYPE.TEXT_AREA,
      label: 'Tên giải thưởng',
      _id: 2,
      isRequired: true,
    },
    {
      type: DVMC_TYPE.TEXT_AREA,
      label: 'Nội dung',
      _id: 4,
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Nơi phong tặng',
      disabled: true,
      _id: 5,
    },
    {
      type: DVMC_TYPE.TABLE,
      label: 'Tác giả',
      _id: '2',
      chuThich: true ? 'Thêm mới' : 'Xem chi tiết',
      onGoTo: onGoTo,
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
      // position: 'top',
      dataSource: arrNgonNgu,
    },
  ]
}

const KeKhaiGiaiThuong = () => {
  const [formInput, setformInput] = useState<any>([])
  const [loading, setloading] = useState<boolean>(false)
  useEffect(() => {
    getInit()
  }, [])
  const goToDetailTable = () => {
    navigate(ScreenName.TableDetail)
  }
  const getInit = async () => {
    setloading(true)
    try {
      const resListNgonNgu = await getListNgonNgu(bodyNgoaiNgu)
      const arrNgonNgu =
        resListNgonNgu?.data?.map((item: any) => {
          return { label: item?.tenNgonNgu, value: item?.id }
        }) ?? []
      formInputInit(arrNgonNgu)
      setformInput(formInputInit(arrNgonNgu, goToDetailTable))
      setloading(false)
    } catch (error) {
      setloading(false)
    }
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <HeaderBase title={KE_KHAI_ENUM.GIAI_THUONG_KHOA_HOC} />
        <LoadingComponent isLoading={loading} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <HeaderBase title={KE_KHAI_ENUM.GIAI_THUONG_KHOA_HOC} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: HEIGHT(30) }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <FormDV1Cua
          formInput={formInput}
          formContainer={styles.formContainer}
          onSubmitForm={() => console.log('xxx')}
          onChangeValue={(value, id) => console.log('hehe', id, value)}
        />
      </ScrollView>
    </View>
  )
}

export default KeKhaiGiaiThuong
