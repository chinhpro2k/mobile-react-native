import HeaderBase from '@/Components/Header/HeaderBase'
import * as React from 'react'
import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import styles from './styles'
import { TabBar } from 'react-native-tab-view'
import { FlatList } from 'react-native-gesture-handler'
import { HEIGHT, WIDTH } from '@/Config'
import R from '@/Assets/R'
import { Formik } from 'formik'
import FormDV1Cua from '@/Components/Form/DynamicForm'
import { getFormMucI } from './Items/FormMucI'
import { getFormMucII } from './Items/FormMucII'
import { getFormMucIII } from './Items/FormMucIII'
import { getFormMucIV } from './Items/FormMucIV'
import { getFormMucV } from './Items/FormMucV'
import { getFormMucVI } from './Items/FormMucVI'
const FormView = () => (
  <ScrollView
    contentContainerStyle={styles.scrollView}
    bounces={false}
    showsVerticalScrollIndicator={false}
  >
    <Formik initialValues={{}} onSubmit={values => console.log(values)}>
      {({ setFieldValue, handleSubmit }) => (
        <View>
          <FormDV1Cua
            title="Test đơn vị 1 cửa"
            formInput={getFormMucI}
            formContainer={styles.formContainer}
            onChangeValue={(value, id) => {
              setFieldValue(id, value)
            }}
            disabled={true}
          />
        </View>
      )}
    </Formik>
  </ScrollView>
)

export default function HoSoCanBo() {
  const layout = useWindowDimensions()
  const dataList = [
    getFormMucI,
    getFormMucII,
    getFormMucIII,
    getFormMucIV,
    getFormMucV,
    getFormMucVI,
  ]
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: '1', title: 'I.Thông tin chung' },
    { key: '2', title: 'II.Thành phần bản thân' },
    { key: '3', title: 'III.Tài khoản - sổ BHXH' },
    { key: '4', title: 'IV.Sức khỏe' },
    { key: '5', title: 'V.Lịch sử bản thân' },
    { key: '6', title: 'VI.Tóm tắt quá trình công tác' },
  ])

  const renderScene = ({ route }: { route: { key: string } }) => {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Formik initialValues={{}} onSubmit={values => console.log(values)}>
          {({ setFieldValue, handleSubmit }) => (
            <View>
              <Text style={styles.title}>
                {routes[Number(route.key) - 1].title}
              </Text>
              <FormDV1Cua
                formInput={dataList[Number(route.key) - 1]}
                formContainer={styles.formContainer}
                onChangeValue={(value, id) => {
                  setFieldValue(id, value)
                }}
                disabled={false}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    )
  }
  const renderTabBar = (props: any) => {
    const dataTabView = props.navigationState.routes
    const indexNow = props.navigationState.index
    return (
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={dataTabView}
          extraData={dataTabView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const backgroundColor =
              indexNow >= index ? R.colors.primaryColor : R.colors.white
            const color =
              indexNow >= index ? R.colors.white : R.colors.primaryColor
            return (
              <TouchableOpacity
                onPress={() => {
                  props?.jumpTo(item?.key)
                  // setIndex(index)
                }}
                activeOpacity={0.6}
                style={[styles.touchCirle, { backgroundColor }]}
              >
                <Text style={[{ color }]}>{index + 1}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderBase title="Hồ sơ cán bộ " />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        // style={{ backgroundColor: R.colors.red }}
      />
    </View>
  )
}
