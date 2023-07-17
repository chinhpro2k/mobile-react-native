import { DVMC_TYPE } from '@/Config'
export const getFormMucIV = () => {
  return [
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Chiều cao (cm)',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Cân nặng (kg)',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Nhóm máu',
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
      label: 'Tình trạng',
      isRequired: false,
      _id: 'canBo',
    },
  ]
}
