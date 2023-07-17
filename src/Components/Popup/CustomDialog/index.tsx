import React from 'react'
import { Image, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import Modal from 'react-native-modal'
import R from '@/Assets/R'
import styles from './styles'
import { useSelector } from '@/Redux/Reducers'
import { changeDialogContent } from '@/Redux/Actions/changeDialogContentAction'
import { WIDTH } from '@/Config'
import ButtonBase from '@/Components/Button'

const CustomDialog = () => {
  const dispatch = useDispatch()
  const { isVisible, title, content, onPress } = useSelector(
    state => state.changeDialogContentReducer,
  )

  const onPressButton = () => {
    dispatch(
      changeDialogContent({
        isVisible: false,
        title: '',
        content: '',
        onPress: null,
      }),
    )
    setTimeout(() => {
      onPress && onPress()
    }, 2000)
  }

  const source = R.images.logoNoti
  if (!isVisible) {
    return <></>
  }
  return (
    <Modal
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      isVisible={isVisible}
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
        <Text style={styles.textContent}>{content || ''}</Text>
        <ButtonBase
          style={styles.btn}
          title="Đồng ý"
          onPress={onPressButton}
          textColor={R.colors.white}
        />
      </View>
    </Modal>
  )
}

export default CustomDialog

// const styles = StyleSheet.create({});
