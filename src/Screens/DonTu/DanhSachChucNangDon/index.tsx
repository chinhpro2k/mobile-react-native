import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'
import React from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import {
  KE_KHAI_ENUM,
  QUAN_LY_DON_TU,
  popupOk,
  WIDTH,
  DANH_SACH_CHUC_NANG_DON,
  INDEX_TYPE_BY_NAME_QUAN_LY_DON_TU,
  LIST_THE_LOAI_CHUC_NANG_DON,
} from '@/Config'
import R from '@/Assets/R'
import styles from './styles'
import ScreenName from '@/Navigators/screenNames'
import { navigate } from '@/Navigators/navigationServices'
import { TabBar, TabView } from 'react-native-tab-view'
import DanhSachDon from '../DanhSachDon'
type Props = {
  navigation: any
  route: {
    params: {
      type: string
    }
  }
}

const DanhSachChucNangDon: React.FunctionComponent<any> = (props: Props) => {
  const onPressFunc = (titleFunc: string) => {
    switch (titleFunc) {
      case DANH_SACH_CHUC_NANG_DON?.[`${props.route.params?.type}`].DANH_SACH:
        navigate(ScreenName.DanhSachDon, {
          type: titleFunc,
          loaiDanhSach: LIST_THE_LOAI_CHUC_NANG_DON.DANH_SACH,
          loaiDon:
            INDEX_TYPE_BY_NAME_QUAN_LY_DON_TU?.[`${props.route.params?.type}`],
        })
        break
      case DANH_SACH_CHUC_NANG_DON?.[`${props.route.params?.type}`].TONG_HOP:
        navigate(ScreenName.DanhSachDon, {
          type: titleFunc,
          loaiDanhSach: LIST_THE_LOAI_CHUC_NANG_DON.TONG_HOP,
          loaiDon:
            INDEX_TYPE_BY_NAME_QUAN_LY_DON_TU?.[
              `${props.route.params?.type}`
            ] ?? -1,
        })
        break
    }
  }

  const renderScene = ({ route }: { route: { key: string } }) => {
    return (
      <DanhSachDon
        type={
          route.key == '1'
            ? DANH_SACH_CHUC_NANG_DON?.[`${props.route.params?.type}`].DANH_SACH
            : DANH_SACH_CHUC_NANG_DON?.[`${props.route.params?.type}`].TONG_HOP
        }
        loaiDanhSach={
          route.key == '1'
            ? LIST_THE_LOAI_CHUC_NANG_DON.DANH_SACH
            : LIST_THE_LOAI_CHUC_NANG_DON.TONG_HOP
        }
        loaiDon={
          INDEX_TYPE_BY_NAME_QUAN_LY_DON_TU?.[`${props.route.params?.type}`]
        }
      />
    )
  }
  const renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: R.colors.primaryColor }}
        // getLabelText={}
        renderLabel={({ route, focused, color }) => (
          <View>
            <Text
              style={[
                styles.textFunc,
                { color: focused ? R.colors.MAIN_APP_COLOR : R.colors.grey400 },
              ]}
            >
              {route?.title}
            </Text>
          </View>
        )}
        style={{ backgroundColor: R.colors.white100 }}
      />
    )
  }

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: '1', title: 'Danh sách' },
    { key: '2', title: 'Tổng hợp' },
  ])
  const layout = useWindowDimensions()
  return (
    <View style={styles.container}>
      <HeaderBase
        title={props.route.params?.type ?? 'Danh sách chức năng đơn'}
      />
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

export default DanhSachChucNangDon
