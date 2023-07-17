import { DVMC_TYPE } from '@/Config'
export const getFormFilterGoiThau = () => {
  return [
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tỉnh / thành phố',
      isRequired: false,
      _id: 'canBo',
      placeHolder: 'Text',
      dataSource: [
        {
          value: 'Tỉnh 1',
          label: 'hihihihi',
        },
        {
          value: 'Tỉnh 2',
          label: 'Ogun',
        },
        {
          value: 'Tỉnh 3',
          label: 'Calabar',
        },
      ],
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Bộ / ban ngành',
      isRequired: false,
      _id: 'canBo',
      dataSource: [
        {
          value: 'Tỉnh 1',
          label: 'hihihihi',
        },
        {
          value: 'Tỉnh 2',
          label: 'Ogun',
        },
        {
          value: 'Tỉnh 3',
          label: 'Calabar',
        },
      ],
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tạp đoàn / TCT',
      isRequired: false,
      _id: 'canBo',
      dataSource: [
        {
          value: 'Tỉnh 1',
          label: 'hihihihi',
        },
        {
          value: 'Tỉnh 2',
          label: 'Ogun',
        },
        {
          value: 'Tỉnh 3',
          label: 'Calabar',
        },
      ],
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Mã định danh',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày hiệu lực (Từ ngày)',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày hiệu lực (Đến ngày)',
      isRequired: false,
      _id: 'canBo',
    },
  ]
}
