/* eslint-disable prefer-const */
import React from 'react'
import { View, Text, Image } from 'react-native'
// import { Layout, Text } from "@ui-kitten/components";
import { useDispatch } from 'react-redux'
import Modal from 'react-native-modal'
import R from '@/Assets/R'
import styles from '../CustomDialog/styles'
import { useSelector } from '@/Redux/Reducers'
import { WIDTH } from '@/Config'
import ButtonBase from '@/Components/Button'
import { changeDialogConfirmContent } from '@/Redux/Actions/dialogConfirmStateAction'

const CustomConfirmDialog: React.FC = () => {
  const dispatch = useDispatch()

  const {
    isVisible,
    title,
    content,
    onPress,
    onPressCancel,
    onCancelPressCallback,
    cancelTitle,
  } = useSelector(state => state.dialogConfirmStateReducers)

  const onBackdrop = () => {
    dispatch(
      changeDialogConfirmContent({
        isVisible: false,
        title: '',
        content: '',
        onPress: null,
        onPressCancel: null,
        onCancelPressCallback: null,
      }),
    )
    setTimeout(() => {
      onPressCancel && onPressCancel()
    }, 500)
  }
  const source = R.images.logoNoti
  const onCancelPress = () => {
    if (onCancelPressCallback) {
      onCancelPressCallback()
    } else {
      dispatch(
        changeDialogConfirmContent({
          isVisible: false,
          title: '',
          content: '',
          onPress: null,
          onPressCancel: null,
          onCancelPressCallback: null,
        }),
      )
      let timeoutCancelPress
      clearTimeout(timeoutCancelPress)
      timeoutCancelPress = setTimeout(() => {
        onPressCancel && onPressCancel()
      }, 500)
    }
  }

  const onOkPress = () => {
    dispatch(
      changeDialogConfirmContent({
        isVisible: false,
        title: '',
        content: '',
        onPress: null,
        onPressCancel: null,
      }),
    )
    let timeoutOkPress
    clearTimeout(timeoutOkPress)
    timeoutOkPress = setTimeout(() => {
      onPress && onPress()
    }, 500)
  }
  if (!isVisible) {
    return <></>
  }
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      // onBackdropPress={onBackdrop}
    >
      <View style={styles.content}>
        <View style={styles.viewImage}>
          <Image
            source={source}
            style={{ height: WIDTH(96), width: WIDTH(96) }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textHeader}>{title || 'Thông báo'}</Text>
        <Text style={styles.textContent}>{content ?? 'Bạn có muốn'}</Text>

        <View style={styles.row}>
          <ButtonBase
            style={styles.btnCancel}
            text={styles.text}
            title={'Huỷ'}
            onPress={onCancelPress}
          />
          <ButtonBase
            style={styles.btn}
            title="Đồng ý"
            onPress={onOkPress}
            textColor={R.colors.white}
          />
        </View>
      </View>
    </Modal>
  )
}

export default CustomConfirmDialog
