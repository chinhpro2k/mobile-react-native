/* eslint-disable @typescript-eslint/no-unused-vars */
import { HEIGHT, WIDTH, getFontSize } from '@/Config'
import {
  Button,
  Icon,
  Modal,
  Pressable,
  keyboardDismissHandlerManager,
} from 'native-base'
import React, { useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import R from '@/Assets/R'
import InputBase from '@/Components/Input'
import Entypo from 'react-native-vector-icons/Entypo'
import IconSVG from '@/Components/Icons/IconSVG'
import DV1Cua from '@/Screens/Main/DynamicFormTest'
import { getFormFilterChuDauTu } from './FormFilterChuDauTu'
import FormDV1Cua from '@/Components/Form/DynamicForm'
const FilterChuDauTu = ({ onFilter, dataFilter }: any) => {
  const [text, setText] = useState('')
  // const [visible, setVisible] = useState(false)
  // const showModal = (item: any) => setVisible(true)
  // const hideModal = () => setVisible(false)
  const handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    console.log(keyValue)
    if (keyValue === 'Enter') {
      console.log('enter')
    }
  }
  return (
    <View style={styles.container}>
      <InputBase
        placeholder="Nhập từ khóa tìm kiếm"
        errorColor={R.colors.white}
        backgroundColor={R.colors.white}
        style={styles.input}
        containerStyle={styles.containerInput}
        placeholderTextColor={R.colors.grey600}
        // onFocus={() => keyboardDismissHandlerManager.}
        onEndEditing={() => onFilter({ text: text })}
        value={text}
        onChangeText={text => setText(text)}
        InputRightElement={
          <TouchableOpacity onPress={() => onFilter({ text: text })}>
            <Icon
              as={
                <Entypo
                  name={'magnifying-glass'}
                  size={WIDTH(20)}
                  style={{ marginRight: WIDTH(8) }}
                  color={R.colors.MAIN_APP_COLOR}
                />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </TouchableOpacity>
        }
      />
      {/* <TouchableOpacity style={styles.btnContainer} onPress={showModal}>
        <Text style={styles.btnTxt}>Bộ lọc</Text>
        <IconSVG iconName="filter" />
      </TouchableOpacity> */}
      {/* <Modal isOpen={visible} onClose={hideModal} animationPreset="fade">
        <View style={styles.modalContainer}>
          <Modal.CloseButton />
          <FormDV1Cua
            formInput={getFormFilterChuDauTu(dataFilter)}
            formContainer={styles.formContainer}
            onChangeValue={(value, id) => {
              console.log(id, value)
            }}
          />
          <Button.Group style={styles.btnGroup} space={2}>
            <Button
              variant="outline"
              colorScheme={R.colors.primaryColor}
              onPress={() => {
                hideModal()
              }}
              rounded="lg"
            >
              Bỏ lọc
            </Button>
            <Button
              _light={{
                bg: R.colors.primaryColor,
              }}
              _dark={{
                bg: R.colors.primaryColor,
              }}
              //   color={R.colors.primaryColor}
              onPress={() => {
                hideModal()
              }}
              rounded="lg"
            >
              Áp dụng
            </Button>
          </Button.Group>
        </View>
      </Modal> */}
    </View>
  )
}
export default FilterChuDauTu
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: WIDTH(343),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formContainer: {
    marginTop: HEIGHT(20),
  },
  btnTxt: {
    color: R.colors.white100,
    fontWeight: '600',
    marginRight: WIDTH(4),
  },
  btnGroup: { width: WIDTH(320), justifyContent: 'flex-end' },
  btnContainer: {
    borderRadius: WIDTH(8),
    width: WIDTH(72),
    height: HEIGHT(40),
    backgroundColor: R.colors.primaryColor,
    marginTop: HEIGHT(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // containerInput: { marginTop: HEIGHT(12), width: WIDTH(260) }, // Có bộ lọc
  // input: { width: WIDTH(280), fontSize: getFontSize(14), height: HEIGHT(40) },
  containerInput: { marginTop: HEIGHT(12), width: WIDTH(343) }, // Không có bộ lọc
  input: {
    width: WIDTH(343),
    fontSize: getFontSize(14),
    height: HEIGHT(40),
    color: R.colors.black0,
  },
  modalContainer: {
    backgroundColor: R.colors.white,
    width: WIDTH(343),
    minHeight: HEIGHT(80),
    borderRadius: WIDTH(8),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
  },
})
