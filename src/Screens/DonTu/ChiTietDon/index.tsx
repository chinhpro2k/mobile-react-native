import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import React, { useEffect, useRef, useState } from 'react'
import FormDV1Cua from '@/Components/Form/DynamicForm'

import {
  DANH_SACH_THAO_TAC_DON,
  getFontSize,
  HEIGHT,
  INDEX_TYPE_QUAN_LY_DON_TU,
  WIDTH,
} from '@/Config'
import HeaderBase from '@/Components/Header/HeaderBase'
import { Box, HamburgerIcon, Menu, Pressable } from 'native-base'
import ButtonBase from '@/Components/Button'
import { Field, Form, Formik } from 'formik'
import { getFormNghiPhep } from './Items/FormNghiPhep'

import R from '@/Assets/R'
import * as Yup from 'yup'
import { getFormNghiKhongLuong } from './Items/FormNghiKhongLuong'
import { getFormNghiOmDau } from './Items/FormNghiOmDau'
import { getFormNghiCheDoThaiSan } from './Items/FormNghiCheDoThaiSan'
import { getFormCongTacTrongNuoc } from './Items/FormCongTacTrongNuoc'
import { navigate } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'

type Props = {
  navigation: any
  route: {
    params: {
      label: string
      thaoTac: string
      loaiDon: number
      data?: any
    }
  }
}
const fakeData = {
  conLai: '123',
  daNghi: '12',
  tong: '1',
  soNgayNghi: '1',
}
const ChiTietDon: React.FunctionComponent<any> = (props: Props) => {
  const label = props.route.params?.label
  const thaoTac = props.route.params?.thaoTac
  const loaiDon = props.route.params?.loaiDon
  const data = props.route.params?.data == 1 ? fakeData : {}
  const [formData, setFormData] = useState<any>([])
  const [formDisable, setFormDisable] = useState(false)
  const btnText = () => {
    switch (thaoTac) {
      case DANH_SACH_THAO_TAC_DON.THEM:
        return 'Tạo đơn'
      case DANH_SACH_THAO_TAC_DON.CAP_NHAT_NGHI_PHEP:
        return 'Cập nhật đơn'
      default:
        return 'Tạo'
    }
  }
  const loaiForm = () => {
    switch (loaiDon) {
      case INDEX_TYPE_QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP:
        return getFormNghiPhep()
      case INDEX_TYPE_QUAN_LY_DON_TU.NGHI_KHONG_LUONG:
        return getFormNghiKhongLuong()
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU:
        return getFormNghiOmDau()
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN:
        return getFormNghiCheDoThaiSan()
      case INDEX_TYPE_QUAN_LY_DON_TU.QUAN_LY_CONG_TAC_TRONG_NUOC:
        return getFormCongTacTrongNuoc()
      default:
        break
    }
  }
  const listChucNang = () => {
    switch (loaiDon) {
      case INDEX_TYPE_QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP:
        return [
          {
            title: DANH_SACH_THAO_TAC_DON.PHE_DUYET,
            disable: false,
          },
          {
            title: DANH_SACH_THAO_TAC_DON.CAP_NHAT_NGHI_PHEP,
            disable: false,
          },
        ]
      case INDEX_TYPE_QUAN_LY_DON_TU.NGHI_KHONG_LUONG:
        return [
          {
            title: DANH_SACH_THAO_TAC_DON.PHE_DUYET,
            disable: false,
          },
          {
            title: DANH_SACH_THAO_TAC_DON.CAP_QUYET_DINH,
            disable: false,
          },
        ]

      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN:
      case INDEX_TYPE_QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU:
        return [
          {
            title: DANH_SACH_THAO_TAC_DON.PHE_DUYET,
            disable: false,
          },
        ]

      default:
        return []
    }
  }
  const initThaoTacAtributes = () => {
    switch (thaoTac) {
      case DANH_SACH_THAO_TAC_DON.THEM:
        break
      case DANH_SACH_THAO_TAC_DON.XEM:
        setFormDisable(true)
        break
      default:
        break
    }
  }
  useEffect(() => {
    setFormData(loaiForm())
    initThaoTacAtributes()
  }, [])
  const goToYKien = () => {
    navigate(ScreenName.ChiTietYKien, {})
  }
  const goToCapQuyetDinh = () => {
    navigate(ScreenName.CapQuyetDinh, {})
  }
  const onChonThaoTac = (thaoTac: string) => {
    switch (thaoTac) {
      case DANH_SACH_THAO_TAC_DON.PHE_DUYET:
        goToYKien()
        break
      case DANH_SACH_THAO_TAC_DON.CAP_QUYET_DINH:
        goToCapQuyetDinh()
        break
      case DANH_SACH_THAO_TAC_DON.CAP_NHAT_NGHI_PHEP:
        setFormDisable(false)
        break
    }
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  })
  return (
    <View style={styles.container}>
      <HeaderBase
        title={label ?? 'Đơn'}
        childrenRight={
          <Box w="90%" alignItems="center">
            <Menu
              w={WIDTH(160)}
              placement={'left top'}
              trigger={triggerProps => {
                return (
                  <Pressable {...triggerProps}>
                    <HamburgerIcon
                      size={HEIGHT(32)}
                      color={R.colors.white100}
                    />
                  </Pressable>
                )
              }}
            >
              {listChucNang().map(item => (
                <Menu.Item
                  disabled={item.disable}
                  onPress={() => onChonThaoTac(item.title)}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </Menu>
          </Box>
        }
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={{}}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ setFieldValue, handleSubmit, handleBlur, errors, touched }) => (
            <View style={styles.formView}>
              <FormDV1Cua
                title="Test đơn vị 1 cửa"
                formInput={formData}
                formContainer={styles.formContainer}
                onChangeValue={(value, id) => {
                  setFieldValue(id, value)
                }}
                disabled={formDisable}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              {formDisable ? null : (
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  style={styles.btn}
                >
                  <Text style={styles.btnTxt}>{btnText()}</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  )
}

export default ChiTietDon
const formInitWithValue = (form: Array<any>, data: any) => {
  const newForm = form?.map((item: any) => {
    if (data?.[item?._id]) {
      return {
        ...item,
        value: data?.[item?._id],
      }
    } else {
      return item
    }
  })

  return newForm
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: {
    // backgroundColor: R.colors.white100,
    width: WIDTH(343),
    alignSelf: 'center',
    borderRadius: WIDTH(8),
    paddingVertical: HEIGHT(16),
  },
  formView: {
    backgroundColor: R.colors.white100,
    width: WIDTH(343),
    alignSelf: 'center',
    borderRadius: WIDTH(8),
  },
  formContainer: { marginTop: HEIGHT(16) },
  btn: {
    backgroundColor: R.colors.primaryColor,
    alignSelf: 'center',
    marginBottom: HEIGHT(12),
    marginTop: HEIGHT(8),
    borderRadius: WIDTH(8),
    width: WIDTH(140),
    height: HEIGHT(44),
    padding: WIDTH(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: R.colors.white100,
    fontWeight: 'bold',
    fontSize: getFontSize(16),
  },
})
