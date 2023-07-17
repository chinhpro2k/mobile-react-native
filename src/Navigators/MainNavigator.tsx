import { StatusBar } from 'react-native'
import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Main from '@/Screens/Main/DynamicFormTest'
import ThongTinCaNhan from '@/Screens/ThuMucCaNhan/ThongTinCaNhan'
import DoiMatKhau from '@/Screens/ThuMucCaNhan/DoiMatKhau'
import DynamicFormTest from '@/Screens/Main/DynamicFormTest'

// import DoiMatKhau from '@/Screens/ThuMucCaNhan/DoiMatKhau'

// utils
import { navigationRef } from './navigationServices'
import ScreenName from './screenNames'
import QuenMatKhau from '@/Screens/Auth/QuenMatKhau'
import DangNhap from '@/Screens/Auth/Login'
import SeePDF from '@/Components/SeePDF'
import TrangChu from '@/Screens/TrangChu'
import NghienCuuKhoaHoc from '@/Screens/KeKhai'
import KeKhaiGiaiThuong from '@/Screens/KeKhai/KeKhaiGiaiThuong'
import KeKhaiBaiBaoBaoCao from '@/Screens/KeKhai/KeKhaiBaiBaoBaoCao'
import KeKhaiSachTapChi from '@/Screens/KeKhai/KeKhaiSachTapChi'
import TableDetail from '@/Screens/KeKhai/TableDetail'
import HanhChinh from '@/Screens/HanhChinh'
import DonTu from '@/Screens/DonTu'
import DanhSachChucNangDon from '@/Screens/DonTu/DanhSachChucNangDon'
import DanhSachDon from '@/Screens/DonTu/DanhSachDon'
import ChiTietDon from '@/Screens/DonTu/ChiTietDon'
import DanhSachCanBo from '@/Screens/DanhSachCanBo'
import ChiTietYKien from '@/Screens/DonTu/DanhSachDon/Item/ChiTietYKien'
import HoSoCanBo from '@/Screens/HoSoCanBo'
import CapQuyetDinh from '@/Screens/DonTu/ChiTietDon/Items/CapQuyetDinh'
import TabMain from '@/Screens/TabMain'
import ChiTietThongBao from '@/Screens/TabMain/ThongBao/ChiTietThongBao'
import ChiTietChuDauTu from '@/Screens/ChiTietChuDauTu'
import ChiTietGoiThau from '@/Screens/ChiTietGoiThau'
import WebViewScreen from '@/Screens/WebViewScreen'
import OhNo from '@/Screens/OhNo'
import Intro from '@/Screens/Intro'
import DanhSachGoiThauChuDauTu from '@/Screens/DanhSachGoiThauChuDauTu'
// import * as screenNames from './screenNames'

type ScreenType = any
const Stack = createStackNavigator<ScreenType>()

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName={ScreenName.Intro}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.FadeFromBottomAndroid, // thêm hiệu ứng chuyển màn hình Slide từ phải sang trái
        }}
      >
        <Stack.Screen name={ScreenName.Intro} component={Intro} />
        <Stack.Screen name={ScreenName.Main} component={Main} />
        <Stack.Screen
          name={ScreenName.ThongTinCaNhan}
          component={ThongTinCaNhan}
        />
        <Stack.Screen name={ScreenName.Login} component={DangNhap} />
        <Stack.Screen name={ScreenName.QuenMatKhau} component={QuenMatKhau} />
        <Stack.Screen name={ScreenName.DoiMatKhau} component={DoiMatKhau} />
        <Stack.Screen
          name={ScreenName.DynamicFormTest}
          component={DynamicFormTest}
        />
        <Stack.Screen
          name={ScreenName.NghienCuuKhoaHoc}
          component={NghienCuuKhoaHoc}
        />
        <Stack.Screen
          name={ScreenName.KeKhaiGiaiThuong}
          component={KeKhaiGiaiThuong}
        />
        <Stack.Screen
          name={ScreenName.KeKhaiBaiBaoBaoCao}
          component={KeKhaiBaiBaoBaoCao}
        />
        <Stack.Screen
          name={ScreenName.KeKhaiSachTapChi}
          component={KeKhaiSachTapChi}
        />
        <Stack.Screen name={ScreenName.TrangChu} component={TrangChu} />
        <Stack.Screen name={ScreenName.TableDetail} component={TableDetail} />
        <Stack.Screen name={ScreenName.SeePDF} component={SeePDF} />
        <Stack.Screen name={ScreenName.HanhChinh} component={HanhChinh} />
        <Stack.Screen name={ScreenName.DonTu} component={DonTu} />
        <Stack.Screen
          name={ScreenName.DanhSachChucNangDon}
          component={DanhSachChucNangDon}
        />
        <Stack.Screen name={ScreenName.DanhSachDon} component={DanhSachDon} />
        <Stack.Screen name={ScreenName.ChiTietDon} component={ChiTietDon} />
        <Stack.Screen
          name={ScreenName.DanhSachCanBo}
          component={DanhSachCanBo}
        />
        <Stack.Screen name={ScreenName.ChiTietYKien} component={ChiTietYKien} />
        <Stack.Screen name={ScreenName.HoSoCanBo} component={HoSoCanBo} />
        <Stack.Screen name={ScreenName.CapQuyetDinh} component={CapQuyetDinh} />
        <Stack.Screen name={ScreenName.TabMain} component={TabMain} />
        <Stack.Screen
          name={ScreenName.ChiTietThongBao}
          component={ChiTietThongBao}
        />
        <Stack.Screen
          name={ScreenName.ChiTietChuDauTu}
          component={ChiTietChuDauTu}
        />
        <Stack.Screen
          name={ScreenName.ChiTietGoiThau}
          component={ChiTietGoiThau}
        />
        <Stack.Screen
          name={ScreenName.WebViewScreen}
          component={WebViewScreen}
        />
        <Stack.Screen name={ScreenName.OhNo} component={OhNo} />
        <Stack.Screen
          name={ScreenName.DanhSachGoiThauChuDauTu}
          component={DanhSachGoiThauChuDauTu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
