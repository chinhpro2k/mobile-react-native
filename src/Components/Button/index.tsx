import { StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { Button, IButtonProps } from 'native-base'

// components
import TextBase from '../Text'

// config
import { hitSlop, Colors, FontSizes, LineHeights } from '@/Theme'
import R from '@/Assets/R'

interface Props extends IButtonProps {
  title: string
  textColor: string
}

const ButtonBase: FunctionComponent<Props> = (props: Props) => {
  const {
    style,
    title,
    backgroundColor = Colors.MAIN_APP_COLOR,
    _light = { bg: Colors.white, _text: { color: Colors.black0 } },
    _dark = { bg: Colors.black0, _text: { color: Colors.white } },
    fontSize = FontSizes.size_16,
    lineHeight = LineHeights.value_24,
    textColor,
    ...otherProps
  } = props
  return (
    <Button
      style={[styles.button, style]}
      hitSlop={hitSlop}
      backgroundColor={backgroundColor}
      _light={_light}
      _dark={_dark}
      {...otherProps}
    >
      <TextBase
        textContent={title}
        fontSize={fontSize}
        color={textColor}
        lineHeight={lineHeight}
        // _dark={{ color: Colors.white }}
        // _light={{ color: Colors.black0 }}
      />
    </Button>
  )
}

export default ButtonBase

const styles = StyleSheet.create({
  button: {},
})
