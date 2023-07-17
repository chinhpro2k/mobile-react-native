import { HEIGHT, WIDTH, getFontSize } from '@/Config'
import { Button, Icon, Modal, Pressable } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import R from '@/Assets/R'
import InputBase from '@/Components/Input'
import Entypo from 'react-native-vector-icons/Entypo'
import IconSVG from '@/Components/Icons/IconSVG'
import DV1Cua from '@/Screens/Main/DynamicFormTest'
import { getFormFilterGoiThau } from './FormFilterGoiThau'
import FormDV1Cua from '@/Components/Form/DynamicForm'
const FilterGoiThau = ({ onFilter, setsearch }: any) => {
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(false)
  const showModal = (item: any) => setVisible(true)
  const hideModal = () => setVisible(false)
  return (
    <View style={styles.container}>
      <InputBase
        placeholder="Nhập từ khóa tìm kiếm"
        errorColor={R.colors.white}
        backgroundColor={R.colors.white}
        style={styles.input}
        containerStyle={styles.containerInput}
        placeholderTextColor={R.colors.grey600}
        onEndEditing={() => onFilter({ text: text })}
        value={text}
        onChangeText={text => {
          setText(text)
        }}
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
            title="Test đơn vị 1 cửa"
            formInput={getFormFilterGoiThau()}
            formContainer={styles.formContainer}
            onChangeValue={(value, id) => {
              //   setFieldValue(id, value)
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
export default FilterGoiThau
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
  containerInput: { marginTop: HEIGHT(12), width: WIDTH(343) }, //neu co loc width de 260
  input: {
    width: WIDTH(343),
    fontSize: getFontSize(14),
    height: HEIGHT(40),
    color: R.colors.black0,
  }, //neu co loc width de 280

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
