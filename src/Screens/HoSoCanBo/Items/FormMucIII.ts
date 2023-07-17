import { DVMC_TYPE } from '@/Config'
export const getFormMucIII = () => {
  return [
    {
      type: DVMC_TYPE.TEXT_BLOCK,
      label: 'Tài khoản ngân hàng',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tên',
      isRequired: false,
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
      label: 'Chi nhánh',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Số tài khoản',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_BLOCK,
      label: 'Bảo hiểm xã hội',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Số sổ',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Nơi cấp',
      isRequired: false,
      _id: 'canBo',
    },

    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày cấp',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày tham gia',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Ghi chú',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_BLOCK,
      label: 'Thuế thu nhập cá nhân',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Mã sổ',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày cấp',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Đơn vị quản lý',
      isRequired: false,
      _id: 'canBo',
    },
  ]
}
