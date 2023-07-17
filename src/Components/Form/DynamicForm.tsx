/* eslint-disable no-lone-blocks */
/* eslint-disable react/require-default-props */
import React, {
  useState,
  useEffect,
  FunctionComponent,
  ReactElement,
} from 'react'
import { FlatList, View, StyleSheet, ViewStyle, Text } from 'react-native'

// components
import TextBase from '../Text'
import ItemInput from './Item/ItemInput'

// config
import R from '@/Assets/R'
import { HEIGHT, WIDTH, DVMC_TYPE, getHeight } from '@/Config'
import { translate } from '@/i18n'

// interface
import { ELementInput } from '@/Interfaces'
import ButtonBase from '../Button'

interface Props {
  formInput: any
  onChangeValue: (valueInput: any, titleInput: string) => void
  title?: string
  ListHeaderComponent?: ReactElement
  formContainer?: ViewStyle
  disabled?: boolean
  onSubmitForm?: () => void
}

const ItemInputAndInfo = ({
  item,
  onChangeValue,
  disabled,
  ...props
}: {
  item: ELementInput
  onChangeValue: (valueInput: any, titleInput: string) => void
  disabled?: boolean
}) => {
  const valueInfor = item?.value
  if (item.type !== DVMC_TYPE.TEXT_BLOCK) {
    const pickerData =
      item?.dataSource?.map(source => source?.label ?? '') ?? []
    const dataSourceElement =
      item?.dataSource?.map(source => source?.relatedElement ?? []) ?? []
    return (
      <ItemInput
        placeholder={disabled ? '' : translate('Default_place_holder')}
        onChangeValue={onChangeValue}
        pickerData={pickerData}
        dataSourceElement={dataSourceElement}
        disabled={disabled || item?.disabled}
        defaultValue={valueInfor}
        itemData={item}
        {...props}
      />
    )
  } else {
    return (
      <TextBase
        textContent={item?.label ?? ''}
        flex={1}
        marginTop={HEIGHT(10)}
        fontWeight={'bold'}
      />
    )
  }
}

const FormDV1Cua: FunctionComponent<Props> = (props: Props) => {
  const {
    formInput,
    onChangeValue,
    title,
    ListHeaderComponent,
    onSubmitForm,
    disabled,
    formContainer,
  } = props
  const [dataInfor, setDataInfor] = useState<ELementInput[]>([])

  useEffect(() => {
    setDataInfor(formInput)
  }, [formInput])

  const onChangeValueInput = (valueInput: any, titleInput: string) => {
    onChangeValue && onChangeValue(valueInput, titleInput)
  }

  if (!dataInfor?.length) {
    return <View />
  }

  return (
    <View style={[styles.subContainer, formContainer]}>
      <View style={styles.form}>
        {dataInfor?.map(itemInfo => {
          return (
            <ItemInputAndInfo
              onChangeValue={onChangeValueInput}
              item={itemInfo}
              disabled={disabled}
              {...props}
            />
          )
        })}
        {onSubmitForm && (
          <ButtonBase
            style={[styles.button]}
            textColor={R.colors.white}
            onPress={onSubmitForm}
            title="Gửi"
          />
        )}
      </View>
    </View>
  )
}

export default FormDV1Cua
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2d88dd',
    width: WIDTH(100),
    alignSelf: 'center',
    marginTop: HEIGHT(12),
  },
  subContainer: {
    backgroundColor: R.colors.white,
    borderRadius: WIDTH(8),
    width: WIDTH(343),
    alignSelf: 'center',
    paddingTop: HEIGHT(10),
    paddingBottom: HEIGHT(16),
  },
  form: {
    paddingHorizontal: WIDTH(12),
    paddingBottom: HEIGHT(2),
  },
})

{
  /* <FlatList
  scrollEnabled={false}
  listKey={title}
  showsVerticalScrollIndicator={false}
  numColumns={1}
  data={dataInfor}
  extraData={dataInfor}
  renderItem={({ item }) => (
    <ItemInputAndInfo
      onChangeValue={onChangeValueInput}
      item={item}
      disabled={disabled}
    />
  )}
  style={styles.form}
  ListHeaderComponent={ListHeaderComponent}
/> */
}
