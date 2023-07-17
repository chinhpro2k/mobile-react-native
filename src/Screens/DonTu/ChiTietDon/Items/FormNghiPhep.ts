import { DVMC_TYPE } from '@/Config'
export const getFormNghiPhep = () => {
  return [
    {
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Cán bộ',
      isRequired: true,
      _id: 'canBo',
      dataSource: [
        {
          value: '1111',
          label: 'hihihihi',
        },
        {
          value: '222',
          label: 'Ogun',
        },
        {
          value: '333',
          label: 'Calabar',
        },
      ],
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Tổng',
      isRequired: false,
      _id: 'tong',
      disabled: true,
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Đã nghỉ',
      isRequired: false,
      _id: 'daNghi',
      disabled: true,
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Còn lại',
      isRequired: false,
      _id: 'conLai',
      disabled: true,
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Buổi',
      isRequired: true,
      _id: 'buoiTuNgay',
      disabled: false,
      dataSource: [
        {
          value: 'sang',
          label: 'Sáng',
        },
        {
          value: 'chieu',
          label: 'Chiều',
        },
      ],
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Từ ngày',
      isRequired: true,
      _id: 'tuNgay',
      disabled: false,
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Buổi',
      isRequired: true,
      _id: 'buoiDenNgay',
      disabled: false,
      dataSource: [
        {
          value: 'sang',
          label: 'Sáng',
        },
        {
          value: 'chieu',
          label: 'Chiều',
        },
      ],
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Đến ngày',
      isRequired: true,
      _id: 'denNgay',
      disabled: false,
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Địa điểm',
      isRequired: false,
      _id: 'diaDiem',
      disabled: false,
      dataSource: [
        {
          value: '1111',
          label: 'hihihihi',
        },
        {
          value: '222',
          label: 'Ogun',
        },
        {
          value: '333',
          label: 'Calabar',
        },
      ],
    },
    {
      type: DVMC_TYPE.CHECKLIST,
      label: 'Không tính ngày',
      dataSource: [
        {
          label: 'Thứ 7',
        },
        {
          label: 'Chủ nhật',
        },
        {
          label: 'Ngày lễ',
        },
      ],
      isRequired: true,
      _id: 'khongTinhNgay',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Số ngày nghỉ',
      isRequired: true,
      _id: 'soNgayNghi',
      disabled: false,
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Ngày còn lại',
      isRequired: false,
      _id: 'ngayConLai',
      disabled: true,
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày làm đơn',
      isRequired: true,
      _id: 'ngayLamDon',
      disabled: false,
    },
    {
      type: DVMC_TYPE.HTML,
      label: 'Lý do',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.UPLOAD_MULTI,
      label: 'Minh chứng',
      isRequired: false,
      _id: 'minhChung',
    },
  ]
}
