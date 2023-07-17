/* eslint-disable react/require-default-props */
import { StyleSheet, ViewStyle } from 'react-native'
import React, { FunctionComponent, ReactChild } from 'react'
import { Modal, IModalProps } from 'native-base'
import { WIDTH } from '@/Config'

interface Props extends IModalProps {
  Header?: ReactChild
  Body: ReactChild
  Footer?: ReactChild
  showModal: boolean
  customHeaderStyle?: ViewStyle
  customBodyStyle?: ViewStyle
  customFooterStyle?: ViewStyle
  customFormStyle?: ViewStyle
}

const ModalBase: FunctionComponent<Props> = (props: Props) => {
  const {
    Header,
    Body,
    Footer,
    showModal,
    customHeaderStyle,
    customBodyStyle,
    customFooterStyle,
    customFormStyle,
  } = props
  return (
    <Modal isOpen={showModal}>
      <Modal.Content style={[styles.contentForm, customFormStyle]}>
        <Modal.Header style={[styles.containerHeader, customHeaderStyle]}>
          {Header}
        </Modal.Header>
        <Modal.Body style={[customBodyStyle]}>{Body}</Modal.Body>
        <Modal.Footer style={[styles.containerHeader, customFooterStyle]}>
          {Footer}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default ModalBase

const styles = StyleSheet.create({
  contentForm: { width: WIDTH(330) },
  containerHeader: { justifyContent: 'center' },
})
