import { DVMC_TYPE } from '@/Config'
export const getFormMucI = () => {
  return [
    {
      type: DVMC_TYPE.IMAGE_PROFILE,
      label: 'Mã cán bộ ',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Mã cán bộ ',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Họ đệm ',
      isRequired: true,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Tên ',
      isRequired: true,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Tên gọi khác',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Tài khoản ',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Bí danh',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Email',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Trạng thái ',
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
      type: DVMC_TYPE.RADIO_BUTTON,
      label: 'Giới tính ',
      isRequired: true,
      _id: 'canBo',
      dataSource: [
        {
          value: '1111',
          label: 'Nam',
        },
        {
          value: '222',
          label: 'Nữ',
        },
      ],
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày sinh',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.CHECKLIST,
      label: 'Tuỳ chọn ',
      isRequired: true,
      _id: 'canBo',
      dataSource: [
        {
          value: '1111',
          label: 'Tùy chọn',
        },
      ],
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Loại hình làm việc',
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
    // {
    //   type: DVMC_TYPE.TEXT_BLOCK,
    //   label: 'Nơi sinh',
    //   isRequired: false,
    //   _id: 'canBo',
    // },
    {
      type: DVMC_TYPE.DON_VI_HANH_CHINH,
      label: 'Nơi sinh',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DON_VI_HANH_CHINH,
      label: 'Quê quán',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DON_VI_HANH_CHINH,
      label: 'Hộ khẩu thường trú',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.DON_VI_HANH_CHINH,
      label: 'Nơi ở hiện nay',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.TEXT_BLOCK,
      label: 'Điện thoại liên lạc',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Cá nhân',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Nhà riêng',
      isRequired: false,
      _id: 'canBo',
    },
    {
      type: DVMC_TYPE.INPUT_NUMBER,
      label: 'Cơ quan',
      isRequired: false,
      _id: 'canBo',
    },
  ]
}
