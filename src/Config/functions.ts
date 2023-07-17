/* eslint-disable @typescript-eslint/no-unused-vars */
import { ViewStyle, Dimensions } from 'react-native'
import React, { ReactNode } from 'react'
import { Box, useToast } from 'native-base'
import ContentToast from '../Components/Toast'
import {
  FILE_TYPE,
  FILE_TYPE_ALLOW,
  FORM_FILE_TYPE,
  REGEX_FILE_TYPE_URL,
} from './constants'
import DocumentPicker from 'react-native-document-picker'
import { changeDialogContent } from '@/Redux/Actions/changeDialogContentAction'
import { store } from '@/Store'
import { changeDialogConfirmContent } from '@/Redux/Actions/dialogConfirmStateAction'

const { width, height } = Dimensions.get('window')

export const WIDTH = (w: number) => width * (w / 375)
export const HEIGHT = (h: number) => height * (h / 812)
export const getHeight = () => height
export const getWidth = () => width
export const getFontSize = (fontSize: number) => fontSize
export const getLineHeight = (lineHeight: number) => lineHeight
export const formatVND = (price: number) => {
  console.log('🚀 ~ file: functions.ts:26 ~ formatVND ~ price:', price)
  let vnd = price?.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1.')
  return `${vnd} VNĐ`
}
export const showToast = (
  toast: ReturnType<typeof useToast>,
  Content: ReactNode,
  position?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right',
) => {
  toast.show({
    render: () => {
      return Content
    },
    placement: position || 'bottom',
  })
}

export const popupOk = (title: string, msg: string, onPress?: () => void) => {
  store?.dispatch(
    changeDialogContent({ isVisible: true, title, content: msg, onPress }),
  )
}
export const popupCancel = (
  title: string,
  msg: string,
  onPress: () => void = () => null,
  onPressCancel: () => void = () => null,
  otherOptions?: any,
) => {
  store?.dispatch(
    changeDialogConfirmContent({
      ...otherOptions,
      isVisible: true,
      title,
      content: msg,
      onPress,
      onPressCancel,
    }),
  )
}
export function numToVND() {
  let t = [
      'không',
      'một',
      'hai',
      'ba',
      'bốn',
      'năm',
      'sáu',
      'bảy',
      'tám',
      'chín',
    ],
    r = function (r: any, n: any) {
      let o = '',
        a = Math.floor(r / 10),
        e = r % 10
      return (
        a > 1
          ? ((o = ' ' + t[a] + ' mươi'), 1 == e && (o += ' mốt'))
          : 1 == a
          ? ((o = ' mười'), 1 == e && (o += ' một'))
          : n && e > 0 && (o = ' lẻ'),
        5 == e && a >= 1
          ? (o += ' lăm')
          : 4 == e && a >= 1
          ? (o += ' bốn')
          : (e > 1 || (1 == e && 0 == a)) && (o += ' ' + t[e]),
        o
      )
    },
    n = function (n: any, o: any) {
      let a = '',
        e = Math.floor(n / 100)
      n = n % 100
      return (
        o || e > 0
          ? ((a = ' ' + t[e] + ' trăm'), (a += r(n, !0)))
          : (a = r(n, !1)),
        a
      )
    },
    o = function (t: any, r: any) {
      let o = '',
        a = Math.floor(t / 1e6)
      t = t % 1e6
      a > 0 && ((o = n(a, r) + ' triệu'), (r = !0))
      let e = Math.floor(t / 1e3)
      t = t % 1e3
      return (
        e > 0 && ((o += n(e, r) + ' ngàn'), (r = !0)),
        t > 0 && (o += n(t, r)),
        o
      )
    }
  return {
    doc: function (r: any) {
      if (0 == r) return t[0]
      let n = '',
        a = ''
      do {
        let ty = r % 1e9
        r = Math.floor(r / 1e9)
        ;(n = r > 0 ? o(ty, !0) + a + n : o(ty, !1) + a + n), (a = ' tỷ')
      } while (r > 0)
      let rs = n.trim()
      return rs.charAt(0).toUpperCase() + rs.slice(1) + ' đồng'
    },
  }
}
export const getNameAllowFileType = (typeList = []) => {
  typeList = typeList?.filter(
    item => item === FORM_FILE_TYPE.IMAGE || item === FORM_FILE_TYPE.pdf,
  )
  if (typeList.length > 0) {
    return typeList.map(type => {
      switch (type) {
        case FORM_FILE_TYPE.IMAGE:
          return FILE_TYPE_ALLOW.IMAGE
        case FORM_FILE_TYPE.pdf:
          return FILE_TYPE_ALLOW.DOCUMENT
        default:
          return FILE_TYPE_ALLOW.ALL
      }
    })
  }
  return FILE_TYPE_ALLOW.ALL
}
export const getFileType = (mimeType: any) => {
  const type = mimeType?.split('/')
  return type?.[1] ?? ''
}
export const getAllowFileType = (typeList = []) => {
  if (typeList.length > 0) {
    return typeList
      .map(type => {
        switch (type) {
          case FORM_FILE_TYPE.IMAGE:
            return DocumentPicker.types.images
          case FORM_FILE_TYPE.pdf:
            return DocumentPicker.types.pdf
          default:
            return [
              DocumentPicker.types.images,
              DocumentPicker.types.pdf,
              DocumentPicker.types.xlsx,
              DocumentPicker.types.pptx,
              DocumentPicker.types.docx,
            ]
        }
      })
      ?.flat()
  }
  return [
    DocumentPicker.types.images,
    DocumentPicker.types.pdf,
    DocumentPicker.types.xlsx,
    DocumentPicker.types.pptx,
    DocumentPicker.types.docx,
  ]
}
export const checkTypeFile = (type: any) => {
  if (
    type.replace(REGEX_FILE_TYPE_URL, '') === FILE_TYPE.JPEG ||
    type.replace(REGEX_FILE_TYPE_URL, '') === FILE_TYPE.PNG ||
    type.replace(REGEX_FILE_TYPE_URL, '') === FILE_TYPE.PDF ||
    type.replace(REGEX_FILE_TYPE_URL, '') === FILE_TYPE.JPG ||
    type.replace(REGEX_FILE_TYPE_URL, '') === FILE_TYPE.DOCX ||
    type.replace(REGEX_FILE_TYPE_URL, '') === FILE_TYPE.EXCEL ||
    type.replace(REGEX_FILE_TYPE_URL, '') === FILE_TYPE.POWERPOINT
  ) {
    return true
  } else {
    return false
  }
}
export const pad2 = (number: number) => String(number).padStart(2, '0') // Pad a number to two digits
export function getMessageByStatusCode(statusCode: number) {
  switch (statusCode) {
    case 200:
      return 'Đăng nhập thành công'
    case 401:
      return 'Tài khoản hoặc mật khẩu không đúng'
    case 404:
      return 'Không tìm thấy trang đăng nhập'
    default:
      return 'Lỗi đăng nhập'
  }
}
export function getLogoutMessage(statusCode: number) {
  let message = ''

  switch (statusCode) {
    case 200:
      message = 'Đăng xuất thành công'
      break
    case 401:
      message = 'Bạn cần đăng nhập để có thể đăng xuất'
      break
    case 500:
      message = 'Đã có lỗi xảy ra khi đăng xuất. Vui lòng thử lại sau'
      break
    default:
      message = 'Đã có lỗi xảy ra khi đăng xuất. Vui lòng thử lại sau'
      break
  }

  return message
}
export const findObject = (
  entireObj?: any,
  keyToFind?: any,
  valToFind?: any,
) => {
  let foundObj: any
  JSON.stringify(entireObj, (_, nestedValue) => {
    if (nestedValue && nestedValue[keyToFind] === valToFind) {
      foundObj = nestedValue
    }
    return nestedValue
  })
  return foundObj
}

export const XoaKyTu = (str = '') => {
  let strResult = str.replace(
    /[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi,
    '',
  )
  return strResult
}
