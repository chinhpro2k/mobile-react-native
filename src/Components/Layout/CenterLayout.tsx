import { StyleSheet } from 'react-native'
import React, { FunctionComponent, ReactChild } from 'react'
import { Center, ICenterProps } from 'native-base'

interface Props extends ICenterProps {
  children: ReactChild | ReactChild[]
}

const CenterLayout: FunctionComponent<Props> = (props: Props) => {
  const { children, ...otherProps } = props
  return (
    <Center style={styles.container} {...otherProps}>
      {Array.isArray(children) ? [...children] : children}
    </Center>
  )
}

export default CenterLayout

const styles = StyleSheet.create({
  container: {},
})
