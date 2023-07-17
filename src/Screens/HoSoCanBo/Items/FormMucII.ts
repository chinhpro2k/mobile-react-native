import { DVMC_TYPE } from '@/Config'
export const getFormMucII = () => {
  return [
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Quốc tịch',
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
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Dân tộc',
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
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tôn giáo',
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
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'CCCD/CMND',
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
      label: 'Nơi cấp',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tình trạng hôn nhân',
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
  ]
}
