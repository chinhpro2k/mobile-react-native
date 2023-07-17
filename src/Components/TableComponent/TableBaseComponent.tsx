import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native'
import React from 'react'
import { Table, Row } from 'react-native-table-component'
import AntDesign from 'react-native-vector-icons/AntDesign'

// config
import R from '@/Assets/R'
import { getFontSize, HEIGHT, WIDTH } from '@/Config'
import DotRequired from '../DotRequired'

export const PRESS_TYPE = {
  HEADER: 'HEADER',
  CELL: 'CELL',
}

const TableBaseComponent = (props: any) => {
  const {
    tableHead,
    widthArr,
    tableData,
    customBorderStyle,
    customTextStyle,
    customRowStyle,
    label,
    isRequired,
    errorColor,
    errorContent,
    children,
  } = props
  return (
    <View>
      {label && (
        <Text style={styles.label}>
          {label}
          <DotRequired isNotRequired={!isRequired} />
        </Text>
      )}
      <ScrollView bounces={false} nestedScrollEnabled>
        <ScrollView horizontal bounces={false}>
          <View>
            <Table
              borderStyle={{
                ...styles.borderStyle,
                ...customBorderStyle,
              }}
            >
              <Row
                data={tableHead}
                widthArr={widthArr}
                style={[
                  styles.header,
                  {
                    width:
                      tableHead.length <= 3
                        ? WIDTH(343)
                        : WIDTH(170 * tableHead.length),
                  },
                ]}
                textStyle={[styles.text, customTextStyle]}
              />
            </Table>
            {tableData?.length > 0 && (
              <Table
                borderStyle={{ ...styles.borderStyle, ...customBorderStyle }}
              >
                {tableData.map((rowData: any, index: number) => {
                  return (
                    <Row
                      data={rowData}
                      key={index}
                      widthArr={widthArr}
                      style={{ ...styles.row, ...customRowStyle }}
                      textStyle={[styles.text, customTextStyle]}
                    />
                  )
                })}
              </Table>
            )}
          </View>
        </ScrollView>
      </ScrollView>
      {children}
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

export default TableBaseComponent

const styles = StyleSheet.create({
  header: { minHeight: HEIGHT(40), backgroundColor: R.colors.MAIN_APP_COLOR },
  text: {
    textAlign: 'center',
    color: R.colors.white,
  },
  row: { minHeight: WIDTH(100), backgroundColor: R.colors.white },
  borderStyle: {
    borderWidth: WIDTH(2),
    borderColor: R.colors.white,
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
  viewError: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HEIGHT(4),
  },
})
