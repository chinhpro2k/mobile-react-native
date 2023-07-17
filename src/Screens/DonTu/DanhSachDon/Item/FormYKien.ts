import { DVMC_TYPE } from '@/Config'
export const getFormYKien = () => {
  return [
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
    {
      type: DVMC_TYPE.TEXT_BLOCK,
      label: 'Người nhận',
      isRequired: false,
      _id: 'minhChung',
    },
    {
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Người nhận xử lý ',
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
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Đơn vị nhận xử lý',
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
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Nhóm người nhận xử lý',
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
      type: DVMC_TYPE.TEXT_BLOCK,
      label: 'Người theo dõi',
      isRequired: false,
      _id: 'minhChung',
    },
    {
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Người theo dõi ',
      isRequired: true,
      _id: 'canBo',
      dataSource: [
        {
          value: 'Phòng 1',
          label: 'hihihihi',
        },
        {
          value: 'Phòng 2',
          label: 'Ogun',
        },
        {
          value: 'Phòng 3',
          label: 'Calabar',
        },
      ],
    },
    {
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Đơn vị theo dõi',
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
      type: DVMC_TYPE.CAN_BO_PICKER,
      label: 'Nhóm người theo dõi',
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
  ]
}
