import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import R from '@/Assets/R'
const DotRequired = ({ isNotRequired }: { isNotRequired: boolean }) => (
  <Text style={styles.colorRequire}>{isNotRequired ? '' : '*'}</Text>
)

export default DotRequired

const styles = StyleSheet.create({
  colorRequire: {
    color: R.colors.redC81,
  },
})
