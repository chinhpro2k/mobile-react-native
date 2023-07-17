import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBase from '@/Components/Header/HeaderBase'

const ThongTinCaNhan = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBase title="Thông tin cá nhân" />
      <Text>DoiMatKhau</Text>
    </View>
  )
}

export default ThongTinCaNhan

const styles = StyleSheet.create({})
