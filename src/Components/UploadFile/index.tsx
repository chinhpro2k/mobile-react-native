import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Linking,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import DocumentPicker from './DocumentPicker'
import {
  checkTypeFile,
  FILE_TYPE,
  getAllowFileType,
  getFileType,
  getFontSize,
  getLineHeight,
  getNameAllowFileType,
  HEIGHT,
  MAX_AMOUNT_FILE,
  MAX_SIZE_FILE_UPLOAD,
  popupOk,
  REGEX_FILE_NAME_URL,
  REGEX_FILE_TYPE_URL,
  showToast,
  WIDTH,
} from '@/Config'
import R from '@/Assets/R'
import ModalImage from './ModalImage'
import { navigate } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'

const UploadFile = props => {
  const {
    changeListFile,
    hideButton,
    arrayFile,
    disableDelete,
    customStyle,
    isRequired,
    descriptionText,
    fileTypeAllow,
    hideNotice,
    testID,
    singleType,
    title,
    customTitle,
    noteUploadFile,
    maxFilesAllow,
    imageOnly,
    backgroundColorItemFile,
  } = props

  const [listFile, setListFile] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [uri, setUri] = useState('')
  const totalSize = useRef(0)

  useEffect(() => {
    if (arrayFile) {
      setListFile(arrayFile)
    }
  }, [arrayFile])

  const handleSeeDocument = (item: any) => {
    const fileType = item?.type
      ? item?.type
      : item?.mimetype
      ? getFileType(item?.mimetype)
      : item?.uri?.replace(REGEX_FILE_TYPE_URL, '')
    if (
      fileType.includes(FILE_TYPE.PDF) ||
      fileType.includes(FILE_TYPE.APPLICATION_PDF)
    ) {
      navigate(ScreenName.SeePDF, {
        content: {
          title: 'Xem chi tiết',
          sourcePDF: item?.uri ?? item?.url ?? '',
        },
      })
    } else if (
      fileType.includes(FILE_TYPE.JPEG) ||
      fileType.includes(FILE_TYPE.JPG) ||
      fileType.includes(FILE_TYPE.PNG)
    ) {
      setModalVisible(true)
      setUri(item?.uri ?? item?.url ?? '')
    } else {
      Linking.canOpenURL(item?.uri ?? item?.url)
        .then(supported => {
          if (supported) {
            console.log('item', item)
            Linking.openURL(item?.uri ?? item?.url)
          } else {
            popupOk('Thông báo', 'Không thể mở file')
          }
        })
        .catch(() => {
          popupOk('Thông báo', 'Không thể mở file')
        })
    }
  }

  const handleDelete = (index?: any) => {
    const fileList = [...listFile]
    totalSize.current -= fileList[index]?.size
    fileList.splice(index, 1)
    setListFile(fileList)
    changeListFile && changeListFile(fileList)
  }

  const handlePickFile = async () => {
    let [allSize, fileList]: [any, any] = [0, []]
    if (listFile.length === maxFilesAllow) {
      popupOk('Thông báo', 'Chọn file quá giới hạn')
    } else if (!maxFilesAllow && listFile.length === MAX_AMOUNT_FILE) {
      popupOk('Thông báo', 'Chọn file quá giới hạn')
    } else if (totalSize.current > MAX_SIZE_FILE_UPLOAD) {
      popupOk('Thông báo', 'Quá dung lượng file cho phép')
    } else {
      console.log('đã vào đây')
      try {
        const onPickFile = singleType
          ? DocumentPicker.pick
          : DocumentPicker.pickMultiple
        const results = await onPickFile({
          type: getAllowFileType(fileTypeAllow),
        })
        const listFileSelected: any = singleType ? [results] : results
        const result: any = []
        listFileSelected.map((item: any) => {
          if (checkTypeFile(item?.type)) {
            result.push({
              uri: item?.uri || '',
              type: item?.type || 'application/pdf',
              name: item?.name || item?.uri,
              size: item?.size || 0,
            })
          } else {
            popupOk('Thông báo', 'File không hợp lệ')
          }
          return null
        })
        fileList = singleType ? result : [...listFile, ...result]
        allSize = listFileSelected.reduce(
          (total: any, item: any) => total + item?.size,
          totalSize.current,
        )
        if (allSize > MAX_SIZE_FILE_UPLOAD) {
          popupOk('Thông báo', 'Quá dung lượng file cho phép')
        } else if (fileList.length > maxFilesAllow) {
          popupOk('Thông báo', 'Quá dung lượng file cho phép')
        } else if (!maxFilesAllow && fileList.length > MAX_AMOUNT_FILE) {
          popupOk('Thông báo', 'Quá dung lượng file cho phép')
        } else {
          totalSize.current = allSize
          setListFile(fileList)
          changeListFile && changeListFile(fileList)
        }
      } catch (err) {}
    }
  }

  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.viewTitle}>
        <Text style={[styles.text, customTitle]}>
          {title || (imageOnly ? 'Ảnh đính kèm' : 'Tệp đính kèm')}
          <DotRequired isRequired={isRequired} />
        </Text>
      </View>
      <ListFile
        disableDelete={disableDelete}
        data={listFile}
        handleDelete={handleDelete}
        handleSeeDocument={handleSeeDocument}
        customStyle={customStyle}
        imageOnly={imageOnly}
        backgroundColorItemFile={backgroundColorItemFile}
        title={title}
      />
      <UploadPart
        hideButton={hideButton}
        handlePickFile={handlePickFile}
        testID={testID}
      />
      <Description descriptionText={descriptionText} />
      <Notice
        visible={!hideNotice}
        fileTypeAllow={fileTypeAllow}
        singleType={singleType}
        noteUploadFile={noteUploadFile}
        maxFilesAllow={maxFilesAllow}
        imageOnly={imageOnly}
      />
      <ModalImage
        uri={uri}
        modalVisible={modalVisible}
        turnOffModel={() => setModalVisible(false)}
      />
    </View>
  )
}
export default UploadFile
const Notice = ({
  visible,
  fileTypeAllow,
  singleType,
  noteUploadFile,
  maxFilesAllow,
  imageOnly,
}: {
  visible: any
  fileTypeAllow: any
  singleType: any
  noteUploadFile: any
  maxFilesAllow: any
  imageOnly: any
}) => {
  if (visible) {
    const allowTyeList = getNameAllowFileType(fileTypeAllow)
    return (
      <Text style={styles.note}>
        {noteUploadFile ||
          (imageOnly
            ? 'Tổng dung lượng tất cả các ảnh không vượt quá 20MB'
            : 'Tổng dung lượng tất cả các ảnh không vượt quá 20MB')}
      </Text>
    )
  } else {
    return null
  }
}

const UploadPart = ({
  hideButton,
  handlePickFile,
  testID,
}: {
  hideButton: any
  handlePickFile: any
  testID: any
}) => {
  if (hideButton) {
    return null
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btn}
        onPress={handlePickFile}
        testID={testID}
      >
        <Icon name="upload" color={R.colors.blurColorTitle} size={WIDTH(20)} />
        <Text style={styles.title}>Tải lên</Text>
      </TouchableOpacity>
    )
  }
}
const DeleteIcon = ({
  handleDelete,
  disableDelete,
}: {
  handleDelete: any
  disableDelete: any
}) => {
  if (disableDelete) {
    return <View />
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.iconDelete}
        onPress={handleDelete}
        hitSlop={styles.hitSlop}
      >
        <Entypo
          name="circle-with-cross"
          size={WIDTH(18)}
          color={R.colors.primaryColor}
        />
      </TouchableOpacity>
    )
  }
}

const ItemFile = ({
  index,
  item,
  handleDelete,
  handleSeeDocument,
  customStyle,
  disableDelete,
  backgroundColorItemFile,
}: {
  index: any
  item: any
  handleDelete: any
  handleSeeDocument: any
  customStyle: any
  disableDelete: any
  backgroundColorItemFile: any
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.containerFileView,
        customStyle,
        backgroundColorItemFile && { backgroundColor: backgroundColorItemFile },
      ]}
      activeOpacity={0.6}
      onPress={handleSeeDocument}
    >
      <MaterialIcons
        name="attach-file"
        color={R.colors.grey800}
        size={WIDTH(20)}
      />
      <Text style={styles.fileName}>
        {`${
          item?.name
            ? item?.name
            : item?.filename ??
              item?.url?.replace(REGEX_FILE_NAME_URL, '') ??
              index + 1
        }`}
      </Text>
      <DeleteIcon disableDelete={disableDelete} handleDelete={handleDelete} />
    </TouchableOpacity>
  )
}
const ListFile = ({
  customStyle,
  data,
  handleDelete,
  handleSeeDocument,
  disableDelete,
  imageOnly,
  backgroundColorItemFile,
  title,
}: {
  customStyle: any
  data: any
  handleDelete: any
  handleSeeDocument: any
  disableDelete: any
  imageOnly: any
  backgroundColorItemFile: any
  title: any
}) => {
  if (data.length === 0) {
    return (
      <View style={{ marginBottom: HEIGHT(20) }}>
        <Text style={styles.text}>
          {imageOnly ? 'Không có ảnh' : 'Không có tài liệu'}
        </Text>
      </View>
    )
  } else {
    return (
      <FlatList
        data={data}
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        listKey={title}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.flatList}
        renderItem={({ item, index }) => (
          <ItemFile
            index={index}
            item={item}
            handleDelete={() => handleDelete(index)}
            handleSeeDocument={() => handleSeeDocument(item)}
            disableDelete={disableDelete}
            customStyle={customStyle}
            backgroundColorItemFile={backgroundColorItemFile}
          />
        )}
      />
    )
  }
}
const Description = ({ descriptionText }: { descriptionText: string }) => {
  if (!descriptionText) {
    return null
  } else {
    return <Text style={styles.note}>{descriptionText || ''}</Text>
  }
}
const DotRequired = ({ isRequired }: { isRequired: boolean }) => (
  <Text style={styles.colorRequire}>{isRequired ? '*' : ''}</Text>
)

const styles = StyleSheet.create({
  colorRequire: {
    color: R.colors.redC81,
  },
  btn: {
    alignItems: 'center',
    borderColor: R.colors.black0,
    borderRadius: WIDTH(8),
    borderWidth: WIDTH(1),
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: HEIGHT(10),
    width: WIDTH(120),
  },
  container: {
    alignItems: 'center',
  },
  containerFileView: {
    alignItems: 'center',
    backgroundColor: R.colors.colorf3f5f9,
    borderRadius: WIDTH(20),
    flexDirection: 'row',
    marginBottom: HEIGHT(10),
    paddingHorizontal: WIDTH(12),
    paddingVertical: HEIGHT(10),
  },
  contentContainerStyle: {
    paddingTop: HEIGHT(10),
  },
  fileName: {
    color: R.colors.black3,
    // fontFamily: R.fonts.Roboto,
    fontSize: getFontSize(15),
    lineHeight: getLineHeight(24),
    marginLeft: WIDTH(10),
    flex: 1,
  },
  flatList: {
    marginBottom: HEIGHT(5),
    flexGrow: 0,
  },
  hitSlop: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 20,
  },
  iconDelete: {
    position: 'absolute',
    right: 0,
    top: -HEIGHT(10),
  },
  note: {
    color: R.colors.blue500,
    // fontFamily: R.fonts.Roboto,
    fontSize: getFontSize(14),
    fontStyle: 'italic',
    lineHeight: getLineHeight(18),
    marginTop: HEIGHT(10),
    textAlign: 'center',
    width: WIDTH(320),
  },
  text: {
    fontSize: getFontSize(14),
    color: R.colors.grey800,
    fontWeight: 'normal',
    marginBottom: HEIGHT(4),
  },
  title: {
    color: R.colors.blurColorTitle,
    // fontFamily: R.fonts.Roboto,
    fontSize: getFontSize(16),
    lineHeight: getLineHeight(24),
    marginLeft: WIDTH(10),
  },
  viewTitle: {
    alignSelf: 'flex-start',
    marginBottom: HEIGHT(7),
  },
})
