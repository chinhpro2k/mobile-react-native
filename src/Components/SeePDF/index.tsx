/**
 * This component to show account
 * @huanhtm
 */
// @flow
import { getHeight, getWidth } from '@/Config'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Pdf from 'react-native-pdf'
import HeaderBase from '../Header/HeaderBase'
// import config

// import common

// type Props = {
//   navigation: Object
// };
const SeePDF = props => {
  const title = props?.route?.params?.content?.title ?? ''
  const sourcePDF = props?.route?.params?.content?.sourcePDF ?? ''

  return (
    <View style={styles.cntViewPDF}>
      <HeaderBase title={title} />
      <View style={styles.cntPDF} testID="SeePDF">
        <Pdf source={{ uri: sourcePDF }} style={styles.pdf} />
      </View>
    </View>
  )
}

export default SeePDF

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: (20 * getHeight()) / 640,
  },
  cntViewPDF: {
    flex: 1,
  },
  cntMain: {
    flex: 1,
    alignItems: 'center',
  },
  cntPDF: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: getWidth(),
  },
})
