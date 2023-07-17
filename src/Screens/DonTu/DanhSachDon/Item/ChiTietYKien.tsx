import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
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
import ButtonBase from '@/Components/Button'
import { Field, Form, Formik } from 'formik'

import { getListLoaiVanBan } from '@/Services/modules/users'
import R from '@/Assets/R'
import * as Yup from 'yup'
import { getFormYKien } from './FormYKien'

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

const ChiTietYKien: React.FunctionComponent<any> = (props: Props) => {
  const label = props.route.params?.label
  const [formData, setFormData] = useState<any>([])
  const [formDisable, setFormDisable] = useState(false)

  return (
    <View style={styles.container}>
      <HeaderBase title={label ?? 'Đơn'} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Formik initialValues={{}} onSubmit={values => console.log(values)}>
          {({ setFieldValue, handleSubmit }) => (
            <View style={styles.formView}>
              <FormDV1Cua
                formInput={getFormYKien}
                formContainer={styles.formContainer}
                onChangeValue={(value, id) => {
                  setFieldValue(id, value)
                }}
                disabled={formDisable}
              />
              {formDisable ? null : (
                <View style={styles.twoBtn}>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.btnAdd}
                  >
                    <Text style={styles.btnTxtAdd}>Duyệt</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.btn}
                  >
                    <Text style={styles.btnTxt}>Không duyệt</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  )
}

export default ChiTietYKien

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { paddingBottom: HEIGHT(30), marginTop: HEIGHT(16) },
  formContainer: { marginTop: HEIGHT(16) },
  btn: {
    backgroundColor: R.colors.primaryColor,
    alignSelf: 'center',
    marginTop: HEIGHT(20),
    borderRadius: WIDTH(8),
    width: WIDTH(140),
    height: HEIGHT(44),
    padding: WIDTH(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  formView: {
    backgroundColor: R.colors.white100,
    width: WIDTH(343),
    alignSelf: 'center',
    borderRadius: WIDTH(8),
  },
  btnAdd: {
    borderColor: R.colors.primaryColor,
    backgroundColor: R.colors.white100,
    borderWidth: WIDTH(1),
    alignSelf: 'center',
    marginTop: HEIGHT(20),
    borderRadius: WIDTH(8),
    width: WIDTH(140),
    height: HEIGHT(44),
    padding: WIDTH(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: R.colors.white100,
    // fontWeight: 'bold',
    fontSize: getFontSize(16),
  },
  btnTxtAdd: {
    color: R.colors.primaryColor,
    // fontWeight: 'bold',
    fontSize: getFontSize(16),
  },
  twoBtn: {
    paddingBottom: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
    flexDirection: 'row',
    paddingTop: WIDTH(4),
    justifyContent: 'space-around',
  },
})
