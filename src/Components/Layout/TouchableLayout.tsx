/* eslint-disable react/require-default-props */
import React, { FunctionComponent, ReactChild } from 'react'
import { Pressable, IPressableProps } from 'native-base'
import BoxBase from './Box'
import { hitSlop } from '@/Theme'
import { ViewStyle } from 'react-native'

// components

interface Props extends IPressableProps {
  children?: ReactChild | ReactChild[] | undefined | null
  noScale?: boolean
  customViewStyle?: ViewStyle
}

const TouchableLayout: FunctionComponent<Props> = (props: Props) => {
  const { children, noScale, customViewStyle, ...otherProps } = props
  return (
    <Pressable {...otherProps} hitSlop={hitSlop}>
      {({ isPressed }) => {
        return children ? (
          <BoxBase
            style={{
              transform: [{ scale: noScale ? 1 : isPressed ? 0.96 : 1 }],
              ...customViewStyle,
            }}
          >
            {Array.isArray(children) ? [...children] : children}
          </BoxBase>
        ) : null
      }}
    </Pressable>
  )
}

export default TouchableLayout
