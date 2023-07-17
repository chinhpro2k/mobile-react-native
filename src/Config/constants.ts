export const STORE = {
  ANDROID: 'CH Play',
  IOS: 'App Store',
}
export const CAP_DON_VI_HANH_CHINH = {
  TINH: 1,
  HUYEN: 2,
  XA: 3,
  SO_NHA: 4,
}
export const FORM_FILE_TYPE = {
  IMAGE: 'image',
  pdf: 'pdf',
}
export const FILE_TYPE_ALLOW = {
  IMAGE: '.jpg, .png, .jpeg',
  DOCUMENT: '.pdf',
  ALL: '.pdf, .docx, .xlsx, .pptx, .jpg, .png, .jpeg',
}
// lay ten file upload tu url
export const REGEX_FILE_NAME_URL = /^.*[\\\\/-]/
export const ARRAY_DAY = [
  'Chủ Nhật',
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
]

export const ARRAY_SHORT_DAY = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']

export const ARRAY_MONTH = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
]
// lay duoi file tu url
export const REGEX_FILE_TYPE_URL = /^.*[\\\\/.-]/

export const FILE_TYPE = {
  PDF: 'pdf',
  APPLICATION_PDF: 'application/pdf',
  PNG: 'png',
  JPG: 'jpg',
  JPEG: 'jpeg',
  DOCX: 'document',
  EXCEL: 'sheet',
  POWERPOINT: 'presentation',
}
export const MAX_SIZE_FILE_UPLOAD = 20000000 // 20MB

export const MAX_AMOUNT_FILE = 5

export const DVMC_TYPE = {
  IMAGE_PROFILE: 'IMAGE_PROFILE',
  TEXT_BLOCK: 'TEXT_BLOCK',
  TABLE: 'TABLE',
  TEXT_INPUT: 'TEXT_INPUT',
  TEXT_AREA: 'TEXT_AREA',
  INPUT_NUMBER: 'INPUT_NUMBER',
  DATE_PICKER: 'DATE_PICKER',
  DATE_TIME_PICKER: 'DATE_TIME_PICKER',
  UPLOAD_SINGLE: 'UPLOAD_SINGLE',
  UPLOAD_MULTI: 'UPLOAD_MULTI',
  DROP_LIST_SINGLE: 'DROP_LIST_SINGLE',
  DROP_LIST_MULTI: 'DROP_LIST_MULTI',
  RADIO_BUTTON: 'RADIO_BUTTON',
  CHECKLIST: 'CHECKLIST',
  DON_VI_HANH_CHINH: 'DON_VI_HANH_CHINH',
  MY_SEMESTER: 'MY_SEMESTER',
  MY_YEAR: 'MY_YEAR',
  MY_CREDIT: 'MY_CREDIT',
  MY_COURSE: 'MY_COURSE',
  DAN_TOC: 'DAN_TOC',
  TON_GIAO: 'TON_GIAO',
  HOC_PHAN_CO_DIEM: 'HOC_PHAN_CO_DIEM',
  HTML: 'HTML',
  CAN_BO_PICKER: 'CAN_BO_PICKER',
}
export const KE_KHAI_ENUM = {
  GIAI_THUONG_KHOA_HOC: 'Kê khai giải thưởng khoa học',
  SACH_TAP_CHI: 'Kê khai sách, tạp chí',
  BAI_BAO_BAO_CAO: 'Kê khai bài báo, báo cáo',
}
export const QUAN_LY_DON_TU = {
  CAP_GIAY_NGHI_PHEP: 'Cấp giấy nghỉ phép',
  NGHI_KHONG_LUONG: 'Cấp giấy nghỉ không lương',
  GIAI_QUYET_CHE_DO_OM_DAU: 'Cấp giấy nghỉ ốm/ đau',
  GIAI_QUYET_CHE_DO_THAI_SAN: 'Cấp giấy nghỉ thai sản',
  QUAN_LY_CONG_TAC_TRONG_NUOC: 'Quản lí quyết định đi công tác trong nước',
}
export const INDEX_TYPE_QUAN_LY_DON_TU = {
  CAP_GIAY_NGHI_PHEP: 0,
  NGHI_KHONG_LUONG: 1,
  GIAI_QUYET_CHE_DO_OM_DAU: 2,
  GIAI_QUYET_CHE_DO_THAI_SAN: 3,
  QUAN_LY_CONG_TAC_TRONG_NUOC: 4,
}
export const INDEX_TYPE_BY_NAME_QUAN_LY_DON_TU = {
  [`${QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP}`]: 0,
  [`${QUAN_LY_DON_TU.NGHI_KHONG_LUONG}`]: 1,
  [`${QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU}`]: 2,
  [`${QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN}`]: 3,
  [`${QUAN_LY_DON_TU.QUAN_LY_CONG_TAC_TRONG_NUOC}`]: 4,
}
export const LIST_THE_LOAI_CHUC_NANG_DON = {
  TONG_HOP: 0,
  DANH_SACH: 1,
}
export const DANH_SACH_CHUC_NANG_DON = {
  [`${QUAN_LY_DON_TU.CAP_GIAY_NGHI_PHEP}`]: {
    TONG_HOP: 'Tổng hợp nghỉ phép',
    DANH_SACH: 'Danh sách nghỉ phép',
  },
  [`${QUAN_LY_DON_TU.NGHI_KHONG_LUONG}`]: {
    TONG_HOP: 'Tổng hợp nghỉ không lương',
    DANH_SACH: 'Danh sách nghỉ không lương',
  },
  [`${QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_OM_DAU}`]: {
    TONG_HOP: 'Tổng hợp nghỉ ốm/ đau',
    DANH_SACH: 'Danh sách nghỉ ốm/ đau',
  },
  [`${QUAN_LY_DON_TU.GIAI_QUYET_CHE_DO_THAI_SAN}`]: {
    TONG_HOP: 'Tổng hợp nghỉ thai sản',
    DANH_SACH: 'Danh sách nghỉ thai sản',
  },
  [`${QUAN_LY_DON_TU.QUAN_LY_CONG_TAC_TRONG_NUOC}`]: {
    TONG_HOP: 'Tổng hợp đăng ký đi công tác trong nước',
    DANH_SACH: 'Danh sách đăng ký đi công tác trong nước',
  },
}
export const DANH_SACH_THAO_TAC_DON = {
  XEM: 'Xem thông tin đơn',
  CAP_NHAT_NGHI_PHEP: 'Cập nhật đơn',
  PHE_DUYET: 'Phê duyệt đơn',
  Y_KIEN: 'Cho ý kiến',
  THEM: 'Thêm',
  DUYET: 'Duyệt đơn',
  KHONG_DUYET: 'Không duyệt đơn',
  CAP_QUYET_DINH: 'Cấp quyết định',
}
export const DANH_SACH_KIEU_LOC_DON = {
  NULL: 0,
  TEXT_INPUT: 1,
  DATE: 2,
  PICKER: 3,
  MIN_MAX_DATE: 4,
  MIN_MAX_NUMBER: 5,
}
export const DANH_SACH_BO_LOC_NGHI_KHONG_LUONG = [
  {
    name: 'Ngày gửi đơn',
    type: {
      _id: 'ngayGui',
      name: 'Ngày gửi đơn',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Từ ngày',
    type: {
      _id: 'tuNgay',
      name: 'Từ ngày',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Đến ngày',
    type: {
      _id: 'denNgay',
      name: 'Đến ngày',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Thời gian nghỉ',
    type: {
      _id: 'thoiGianNghi',
      name: 'Thời gian nghỉ',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
  {
    name: 'Ngày quay lại làm việc',
    type: {
      _id: 'ngayQuayLai',
      name: 'Ngày quay lại làm việc',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Ghi chú',
    type: {
      _id: 'ghiChu',
      name: 'Ghi chú',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
]
export const DANH_SACH_BO_LOC_NGHI_OM_DAU = [
  {
    name: 'Số sổ BHXH',
    type: {
      _id: 'bhxh',
      name: 'Số sổ BHXH',
      type: DANH_SACH_KIEU_LOC_DON.PICKER,
    },
  },
  {
    name: 'Chế độ nghỉ',
    type: {
      _id: 'cheDoNghi',
      name: 'Chế độ nghỉ',
      type: DANH_SACH_KIEU_LOC_DON.PICKER,
    },
  },
  {
    name: 'Thanh toán BH',
    type: {
      _id: 'bhxh',
      name: 'Thanh toán BH',
      type: DANH_SACH_KIEU_LOC_DON.PICKER,
    },
  },
  {
    name: 'Ngày gửi đơn',
    type: {
      _id: 'ngayGui',
      name: 'Ngày gửi đơn',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Từ ngày',
    type: {
      _id: 'tuNgay',
      name: 'Từ ngày',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Đến ngày',
    type: {
      _id: 'denNgay',
      name: 'Đến ngày',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Nghỉ sau phẫu thuật',
    type: {
      _id: 'nghiPhauThuat',
      name: 'Nghỉ sau phẫu thuật',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Ghi chú',
    type: {
      _id: 'ghiChu',
      name: 'Ghi chú',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
]
export const DANH_SACH_BO_LOC_NGHI_THAI_SAN = [
  {
    name: 'Số sổ BH',
    type: {
      _id: 'soBH',
      name: 'Số sổ BH',
      type: DANH_SACH_KIEU_LOC_DON.DATE,
    },
  },
  {
    name: 'Ngày sinh',
    type: {
      _id: 'ngaySinh',
      name: 'Ngày sinh',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
  {
    name: 'HS lương',
    type: {
      _id: 'hsLuong',
      name: 'HS lương',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
  {
    name: 'PCCV',
    type: {
      _id: 'pccv',
      name: 'PCCV',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
  {
    name: 'TNNG',
    type: {
      _id: 'tnng',
      name: 'TNNG',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
  {
    name: 'Ngày nộp HS',
    type: {
      _id: 'tnng',
      name: 'Ngày nộp HS',
      type: DANH_SACH_KIEU_LOC_DON.MIN_MAX_DATE,
    },
  },
  {
    name: 'Từ ngày',
    type: {
      _id: 'tuNgay',
      name: 'Từ ngày',
      type: DANH_SACH_KIEU_LOC_DON.MIN_MAX_DATE,
    },
  },
  {
    name: 'Đến ngày',
    type: {
      _id: 'denNgay',
      name: 'Đến ngày',
      type: DANH_SACH_KIEU_LOC_DON.MIN_MAX_DATE,
    },
  },
  {
    name: 'Ngày sinh con',
    type: {
      _id: 'ngaySinh',
      name: 'Ngày sinh con',
      type: DANH_SACH_KIEU_LOC_DON.MIN_MAX_DATE,
    },
  },
  {
    name: 'Con thứ',
    type: {
      _id: 'conThu',
      name: 'Con thứ',
      type: DANH_SACH_KIEU_LOC_DON.MIN_MAX_NUMBER,
    },
  },
  {
    name: 'Số con',
    type: {
      _id: 'soCon',
      name: 'Số con',
      type: DANH_SACH_KIEU_LOC_DON.MIN_MAX_NUMBER,
    },
  },
  {
    name: 'Ngày quay lại làm việc',
    type: {
      _id: 'ngayQuayLai',
      name: 'Ngày quay lại làm việc',
      type: DANH_SACH_KIEU_LOC_DON.MIN_MAX_DATE,
    },
  },
  {
    name: 'Ghi chú',
    type: {
      _id: 'ghiChu',
      name: 'Ghi chú',
      type: DANH_SACH_KIEU_LOC_DON.TEXT_INPUT,
    },
  },
]
export const LOAI_LOC_THEO_THOI_GIAN = [
  {
    title: 'Tăng dần',
    value: 1,
  },
  {
    title: 'Giảm dần',
    value: -1,
  },
  {
    title: 'Không',
    value: 0,
  },
]
