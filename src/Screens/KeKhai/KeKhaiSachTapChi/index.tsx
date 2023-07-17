/* eslint-disable no-sparse-arrays */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import HeaderBase from '@/Components/Header/HeaderBase'
import { DVMC_TYPE, HEIGHT, KE_KHAI_ENUM } from '@/Config'
import FormDV1Cua from '@/Components/Form/DynamicForm'
import LoadingComponent from '@/Components/LoadingComponent'
import {
  getListNgonNgu,
  getListNXB,
  getListLinhVuc,
  getListTheLoai,
} from '@/Services/modules/users'
import ScreenName from '@/Navigators/screenNames'
import { navigate } from '@/Navigators/navigationServices'
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
const bodyLinhVuc = {
  fields: 'id,tenLinhVuc',
  filters: [],
  pageInfo: { page: 1, pageSize: 666 },
  sorts: [{ field: 'tenLinhVuc', dir: 1 }],
}
const bodyTheLoai = {
  fields: 'id,tenTheLoaiSach',
  filters: [],
  pageInfo: { page: 1, pageSize: 666 },
  sorts: [{ field: 'tenTheLoaiSach', dir: 1 }],
}
const bodyNXB = {
  fields: 'id,tenNhaXuatBan',
  filters: [],
  pageInfo: { page: 1, pageSize: 666 },
  sorts: [{ field: 'tenNhaXuatBan', dir: 1 }],
}
const formInputInit = (
  arrayNgonNgu: any,
  arrLinhVuc: any,
  arrTheLoai: any,
  arrNXB: any,
  onGoToTable?: () => void,
) => {
  return [
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Tên sách',
      isRequired: true,
      _id: 1,
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Nhà xuất bản',
      _id: '2',
      dataSource: arrNXB,
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Năm xuất bản',
      _id: '2',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Số ISBN',
      _id: 1,
    },
    {
      type: DVMC_TYPE.DROP_LIST_MULTI,
      label: 'Lĩnh vực',
      _id: '2',
      dataSource: arrLinhVuc,
    },
    {
      type: DVMC_TYPE.DROP_LIST_MULTI,
      label: 'Thể loại',
      _id: '2',
      dataSource: arrTheLoai,
    },
    {
      type: DVMC_TYPE.TABLE,
      label: 'Tác giả',
      _id: '2',
      chuThich: true ? 'Thêm mới' : 'Xem chi tiết',
      onGoTo: onGoToTable,
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
      label: 'Ảnh bìa',
      fileType: ['image'],
      _id: 6,
    },
    {
      type: DVMC_TYPE.UPLOAD_SINGLE,
      label: 'File đính kèm',
      _id: 7,
    },
    {
      type: DVMC_TYPE.DROP_LIST_MULTI,
      label: 'Ngôn ngữ',
      _id: '2',
      position: 'top',
      dataSource: arrayNgonNgu,
    },
  ]
}

const KeKhaiSachTapChi = () => {
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
      const resListLinhVuc = await getListLinhVuc(bodyLinhVuc)
      const resListTheLoai = await getListTheLoai(bodyTheLoai)
      const resListNXB = await getListNXB(bodyNXB)
      const arrNXB =
        resListNXB?.data?.map((item: any) => {
          return { label: item?.tenNhaXuatBan, value: item?.id }
        }) ?? []
      const arrLinhVuc =
        resListLinhVuc?.data?.map((item: any) => {
          return { label: item?.tenLinhVuc, value: item?.id }
        }) ?? []
      const arrTheLoai =
        resListTheLoai?.data?.map((item: any) => {
          return { label: item?.tenTheLoaiSach, value: item?.id }
        }) ?? []
      const arrNgonNgu =
        resListNgonNgu?.data?.map((item: any) => {
          return { label: item?.tenNgonNgu, value: item?.id }
        }) ?? []
      setformInput(
        formInputInit(
          arrNgonNgu,
          arrLinhVuc,
          arrTheLoai,
          arrNXB,
          goToDetailTable,
        ),
      )
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
          title="Test đơn vị 1 cửa"
          formInput={formInput}
          formContainer={styles.formContainer}
          onSubmitForm={() => console.log('xxx')}
          onChangeValue={(value, id) => console.log('hehe', id, value)}
        />
      </ScrollView>
    </View>
  )
}

export default KeKhaiSachTapChi
