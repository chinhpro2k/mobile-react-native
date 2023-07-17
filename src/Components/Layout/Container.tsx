import { StyleSheet } from 'react-native'
import React, { FunctionComponent, ReactChild } from 'react'
import { Container, IContainerProps } from 'native-base'

interface Props extends IContainerProps {
  children: ReactChild | ReactChild[]
}

const ContainerBase: FunctionComponent<Props> = (props: Props) => {
  const { children, ...otherProps } = props
  return (
    <Container style={styles.container} {...otherProps}>
      {Array.isArray(children) ? [...children] : children}
    </Container>
  )
}

export default ContainerBase

const styles = StyleSheet.create({
  container: {},
})
