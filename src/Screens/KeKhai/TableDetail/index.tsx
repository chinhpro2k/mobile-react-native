import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
  DVMC_TYPE,
  getFontSize,
  HEIGHT,
  KE_KHAI_ENUM,
  popupOk,
  WIDTH,
} from '@/Config'
import R from '@/Assets/R'
import styles from './styles'
import ScreenName from '@/Navigators/screenNames'
import { navigate } from '@/Navigators/navigationServices'
import ModalBase from '@/Components/Modal'
import { getListNhaKhoaHoc } from '@/Services/modules/users'
import FormDV1Cua from '@/Components/Form/DynamicForm'
import LoadingComponent from '@/Components/LoadingComponent'
import ButtonBase from '@/Components/Button'
const bodyNhaKhoaHoc = {
  fields: 'id,hoVaTen,canBoCode',
  filters: [],
  pageInfo: { page: 1, pageSize: 666 },
  sorts: [{ field: 'hoVaTen', dir: 1 }],
}
const TableDetail = () => {
  const [listNhaKH, setListNhaKH] = useState([])
  const [loading, setloading] = useState(false)
  const [visible, setvisible] = useState(false)
  useEffect(() => {
    getInit()
  }, [])
  const getInit = async () => {
    setloading(true)
    try {
      const resListNgonNgu = await getListNhaKhoaHoc(bodyNhaKhoaHoc)
      const arrNgonNgu =
        resListNgonNgu?.data?.map((item: any) => {
          return { label: item?.hoVaTen, value: item?.id }
        }) ?? []
      setListNhaKH(arrNgonNgu)
      setloading(false)
    } catch (error) {
      setloading(false)
    }
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <HeaderBase
          title="Chi tiết"
          childrenRight={<ChilrenRight onPress={() => setvisible(true)} />}
        />
        <LoadingComponent isLoading={loading} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <HeaderBase
        title="Chi tiết"
        childrenRight={<ChilrenRight onPress={() => setvisible(true)} />}
      />
      <ModalBase
        Footer={<Footer />}
        Header={<Header onPress={() => setvisible(false)} />}
        showModal={visible}
        Body={<Body listNhaKH={listNhaKH} />}
      />
    </View>
  )
}

export default TableDetail
const ChilrenRight = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.containerCon} onPress={onPress}>
      <MaterialIcons
        name="person-add"
        color={R.colors.white}
        size={WIDTH(26)}
      />
    </TouchableOpacity>
  )
}
const Header = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.viewHeader}>
      <Text style={{ fontSize: getFontSize(18) }}>Thêm mới tác giả</Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign
          name="close"
          color={R.colors.MAIN_APP_COLOR}
          size={WIDTH(18)}
        />
      </TouchableOpacity>
    </View>
  )
}
const Footer = ({ onPress }: { onPress: () => void }) => {
  return (
    <View>
      <ButtonBase
        style={[styles.button]}
        textColor={R.colors.white}
        onPress={onPress}
        title="Gửi"
      />
    </View>
  )
}
const Body = ({ listNhaKH }) => {
  const dataList = [
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tìm trong đơn vị',
      _id: '2',
      dataSource: listNhaKH,
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Tên hiển thị',
      _id: 1,
    },
    {
      type: DVMC_TYPE.CHECKLIST,
      dataSource: [{ label: 'Là tác giả chính' }],
      _id: 1,
    },
  ]
  return (
    <View style={{}}>
      <FormDV1Cua
        formInput={dataList}
        formContainer={{
          backgroundColor: R.colors.transparent,
          width: WIDTH(300),
          paddingBottom: 0,
        }}
        onChangeValue={(value, id) => console.log('hehe', id, value)}
      />
    </View>
  )
}
