import { DVMC_TYPE } from '@/Config'
export const getFormNghiOmDau = () => {
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
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Chế độ nghỉ',
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
      type: DVMC_TYPE.CHECKLIST,
      label: 'Có thanh toán bảo hiểm',
      isRequired: true,
      _id: 'thanhToan',
      disabled: false,
      dataSource: [
        {
          value: 'sang',
          label: 'Có thanh toán bảo hiểm',
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
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Đến ngày',
      isRequired: false,
      _id: 'denNgay',
      disabled: false,
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày gửi đơn',
      isRequired: false,
      _id: 'ngayGui',
      disabled: false,
    },

    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Nghỉ sau phẫu thuật',
      isRequired: false,
      _id: 'nghiPhauThuat',
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
      label: 'Tài liệu liên quan',
      isRequired: false,
      _id: 'minhChung',
    },
  ]
}
