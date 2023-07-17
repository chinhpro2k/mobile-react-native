/* eslint-disable react/require-default-props */
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor'
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
import R from '@/Assets/R'
import DotRequired from '../DotRequired'
import AntDesign from 'react-native-vector-icons/AntDesign'

type PROPS = {
  disabled?: boolean
  label?: string
  isRequired?: boolean
  errorContent?: string
  errorColor?: string
  onChangeValueHTML: (value: string) => void
}
const HTMLEdit = (props: PROPS) => {
  const {
    label,
    errorContent,
    disabled,
    isRequired,
    onChangeValueHTML,
    errorColor,
    ...otherProps
  } = props
  const [editorAttached, seteditorAttached] = useState(false)
  const richText = React.useRef<any>()
  useEffect(() => {
    seteditorAttached(true)
  }, [])
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          <DotRequired isNotRequired={!isRequired} />
        </Text>
      )}
      <View style={styles.containerHTML}>
        <RichEditor
          disabled={disabled}
          ref={richText}
          style={styles.noiDung}
          onChange={onChangeValueHTML}
          androidLayerType="software"
          androidHardwareAccelerationDisabled
          {...otherProps}
        />
        {editorAttached && (
          <RichToolbar
            disabled={disabled}
            editor={richText}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.setUnderline,
              actions.removeFormat,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.undo,
              actions.redo,
            ]}
            style={styles.richtoolbar}
            iconMap={{
              [actions.heading1]: ({ tintColor }) => (
                <Text style={[{ color: tintColor }]}>H1</Text>
              ),
            }}
          />
        )}
      </View>
      {!!errorContent && (
        <View style={styles.viewError}>
          <AntDesign
            name="warning"
            size={WIDTH(13)}
            style={{ marginRight: WIDTH(4) }}
            color={errorColor ?? R.colors.red}
          />
          <Text style={styles.errorContent}> {errorContent}</Text>
        </View>
      )}
    </View>
  )
}

export default HTMLEdit

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  containerHTML: {
    borderWidth: 1,
    borderColor: R.colors.grey400,
    borderRadius: WIDTH(8),
    overflow: 'hidden',
    backgroundColor: R.colors.grey100,
    minHeight: HEIGHT(120),
    minWidth: WIDTH(300),
  },
  noiDung: {
    // borderColor: R.colors.blueGrey100,
    borderRadius: WIDTH(8),
    backgroundColor: R.colors.white,
    paddingBottom: HEIGHT(40),
    // borderWidth: 1,
    minHeight: HEIGHT(88),
    maxHeight: HEIGHT(280),
    overflow: 'hidden',
    opacity: 0.99,
  },
  richtoolbar: {
    bottom: 0,
    height: HEIGHT(40),
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(4),
  },
  errorContent: {
    fontSize: getFontSize(12),
    color: '#F72504',
  },
  viewError: { flexDirection: 'row', alignItems: 'center' },
})
