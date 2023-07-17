import { DVMC_TYPE } from '@/Config'
export const getFormCongTacTrongNuoc = () => {
  return [
    {
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Cán bộ ',
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
      label: 'Mã cán bộ',
      isRequired: false,
      _id: 'donVi',
      disabled: true,
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Đơn vị',
      isRequired: true,
      _id: 'ngaySinh',
      disabled: false,
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày nộp HS',
      isRequired: true,
      _id: 'ngayNopHS',
      disabled: false,
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày sinh con',
      isRequired: false,
      _id: 'ngaySinhCon',
      disabled: false,
    },
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Sinh con thứ',
      isRequired: true,
      _id: 'sinhConThu',
      disabled: false,
    },
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Số con sinh',
      isRequired: true,
      _id: 'soConSinh',
      disabled: false,
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
      isRequired: true,
      _id: 'denNgay',
      disabled: false,
    },
    {
      type: DVMC_TYPE.TEXT_AREA,
      label: 'Ghi chú',
      isRequired: false,
      _id: 'ghiChu',
      disabled: false,
    },
    {
      type: DVMC_TYPE.UPLOAD_MULTI,
      label: 'Tài liệu liên quan',
      isRequired: false,
      _id: 'minhChung',
    },
  ]
}
