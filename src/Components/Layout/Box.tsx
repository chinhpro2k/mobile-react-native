/* eslint-disable react/require-default-props */
import React, { FunctionComponent, ReactChild } from 'react'
import { Box, IBoxProps } from 'native-base'

interface Props extends IBoxProps {
  children?: ReactChild | ReactChild[]
}

const BoxBase: FunctionComponent<Props> = (props: Props) => {
  const { children, ...otherProps } = props
  return (
    <Box {...otherProps}>
      {children ? (Array.isArray(children) ? [...children] : children) : null}
    </Box>
  )
}

export default BoxBase
