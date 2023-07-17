/* eslint-disable react/require-default-props */
// @flow
import React from 'react'
import { StyleSheet, TouchableOpacity, Modal, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

// config
import R from '@/Assets/R'
import { getHeight, getWidth, HEIGHT, WIDTH } from '@/Config'
type PROPS = {
  uri?: any
  modalVisible?: boolean
  turnOffModel?: any
}
const ModalImage = (props: PROPS) => {
  const { uri, modalVisible, turnOffModel } = props

  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        onPress={turnOffModel && turnOffModel}
        style={styles.background}
      />
      <View style={styles.container}>
        <Image
          source={{ uri: uri?.uri ?? uri }}
          style={styles.img}
          resizeMode="contain"
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.iconDelete}
          onPress={turnOffModel && turnOffModel}
          hitSlop={styles.hitSlop}
        >
          <AntDesign
            name="close"
            size={WIDTH(20)}
            color={R.colors.primaryColor}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ModalImage
const styles = StyleSheet.create({
  background: {
    // ...StyleSheet.absoluteFill
    backgroundColor: R.colors.black50p,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: R.colors.white,
    borderRadius: WIDTH(8),
    marginTop: HEIGHT(180),
    paddingVertical: HEIGHT(12),
    width: WIDTH(343),
  },
  hitSlop: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 20,
  },
  iconDelete: {
    position: 'absolute',
    right: WIDTH(5),
    top: HEIGHT(8),
  },
  img: {
    height: HEIGHT(400),
    marginTop: HEIGHT(20),
    width: WIDTH(300),
  },
})
