/* eslint-disable react/require-default-props */
import React, { FunctionComponent } from 'react'
import { Text, ITextProps } from 'native-base'

// themes
import { FontSizes, FontWeights, LineHeights, Colors } from '@/Theme'

interface Props extends ITextProps {
  textContent: string
  children?: ReturnType<typeof Text>
}

const TextBase: FunctionComponent<Props> = (props: Props) => {
  const {
    textContent,
    fontSize = FontSizes.size_16,
    lineHeight = LineHeights.value_24,
    fontWeight = FontWeights.value_500,
    color = Colors.black0,
    children,
    ...otherProps
  } = props
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      {...otherProps}
    >
      {textContent}
      {children}
    </Text>
  )
}

export default TextBase
