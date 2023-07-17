import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import React, { useEffect, useState } from 'react'
import FormDV1Cua from '@/Components/Form/DynamicForm'
import { HEIGHT } from '@/Config'
import HeaderBase from '@/Components/Header/HeaderBase'
import ButtonBase from '@/Components/Button'
import { Field, Form, Formik } from 'formik'
import { getFormHanhChinh } from './FormHanhChinh'
import { getListLoaiVanBan } from '@/Services/modules/users'
import * as Yup from 'yup'
const HanhChinh = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  const [data, setData] = useState(getFormHanhChinh([]))
  useEffect(() => {
    setData(getFormHanhChinh([]))
  }, [])
  const loadData = async () => {
    try {
      const bodyVanBan = {
        pageInfo: {
          page: 1,
          pageSize: 666,
        },
        filters: [],
        sorts: [
          {
            field: 'ten',
            dir: 1,
          },
        ],
        fields: 'id,ten',
      }
      const resVanBan = await getListLoaiVanBan(bodyVanBan)
    } catch (error) {}
  }
  function validateUsername(value: string) {
    let error
    if (value === 'admin') {
      error = 'Nice try!'
    }
    return error
  }

  return (
    <View style={{ flex: 1 }}>
      <HeaderBase title="Hành chính" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: HEIGHT(30) }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={values => console.log(values)}
        >
          {({
            setFieldValue,
            validateField,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <FormDV1Cua
                title="Test đơn vị 1 cửa"
                formInput={data}
                formContainer={styles.formContainer}
                onChangeValue={(value, id) => {
                  setFieldValue(id, value)
                }}
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Text>TestSubmit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => validateField('trichYeu')}>
                <Text>Test Validate</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  )
}

export default HanhChinh

const styles = StyleSheet.create({
  formContainer: { marginTop: HEIGHT(16) },
})
