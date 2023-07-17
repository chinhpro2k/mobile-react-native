/* eslint-disable react/require-default-props */
import { StyleSheet, Text, View, TextStyle } from 'react-native'
import React, { useEffect, useState, FunctionComponent } from 'react'
import MultiSelect from 'react-native-multiple-select'

// config
import R from '@/Assets/R'
import { HEIGHT, getFontSize, WIDTH, getWidth } from '@/Config'
import { translate } from '@/i18n'

interface Props {
  title?: string
  data: any[]
  displayKey: string
  required?: boolean
  selectText?: string
  selectedText?: string
  searchPlaceHolder?: string
  uniqueKey: string
  textTitle?: TextStyle
  hidden?: boolean
  value: any[]
  onChoose: (val: any[]) => void
  single?: boolean
}

const MultipleSelectPicker: FunctionComponent<Props> = (props: Props) => {
  const {
    title,
    data,
    displayKey,
    required,
    selectText,
    selectedText,
    searchPlaceHolder,
    uniqueKey,
    textTitle,
    hidden,
    value,
    onChoose,
    single,
  } = props
  const [selectedItems, setSelectedItems] = useState<any[]>(value)

  useEffect(() => {
    setSelectedItems(value)
  }, [value])

  const onSelectedItemsChange = (val: any[]) => {
    setSelectedItems(val)
    onChoose?.(val)
  }

  if (hidden) {
    return <View />
  }
  return (
    <View style={styles.container}>
      {title && (
        <Text style={[styles.textTitle, textTitle]}>
          {title ?? translate('NO_DATA')}
          {required && (
            <Text style={[styles.textTitle, { color: R.colors.red }]}>*</Text>
          )}
        </Text>
      )}
      <MultiSelect
        items={data ?? []}
        fixedHeight
        uniqueKey={uniqueKey}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText={selectText ?? 'Chọn giá trị'}
        selectedText={selectedText ?? ''}
        noItemsText={translate('NO_DATA')}
        searchInputPlaceholderText={searchPlaceHolder ?? 'Chọn giá trị...'}
        itemTextColor={R.colors.black0}
        single={single}
        displayKey={displayKey ?? ''}
        filterMethod="full"
        hideDropdown={false}
        submitButtonColor={R.colors.primaryColor}
        submitButtonText="Xác nhận"
        styleRowList={styles.styleRowList}
        itemFontSize={getFontSize(15)}
        styleInputGroup={{
          height: HEIGHT(40),
          // backgroundColor: 'red',
        }}
        // styleDropdownMenuSubsection={{}}
        styleDropdownMenu={styles.styleDropdownMenu}
        styleListContainer={styles.styleListContainer}
        styleDropdownMenuSubsection={{
          borderRadius: WIDTH(8),
          paddingLeft: WIDTH(8),
        }}
        // styleTextDropdownSelected={{ marginLeft: WIDTH(8) }}
        selectedItemTextColor={R.colors.MAIN_APP_COLOR}
        selectedItemIconColor={R.colors.MAIN_APP_COLOR}
        tagRemoveIconColor={R.colors.grey400}
        tagBorderColor={R.colors.grey300}
        tagTextColor={R.colors.black0}
      />
    </View>
  )
}

export default MultipleSelectPicker

const styles = StyleSheet.create({
  container: { backgroundColor: 'red' },
  textTitle: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(6),
  },
  styleDropdownMenu: {
    height: HEIGHT(40),
    borderWidth: 1,
    borderColor: R.colors.grey400,
    borderRadius: WIDTH(8),
  },
  styleRowList: { marginVertical: HEIGHT(5) },
  styleListContainer: { backgroundColor: 'white', height: HEIGHT(230) },
})
