export const getFormHanhChinh = ({ loaiVanBan }: any) => {
  return [
    {
      type: 'TEXT_AREA',
      label: 'Trích yếu',
      isRequired: true,
      _id: 'trichYeu',
    },
    {
      type: 'DROP_LIST_SINGLE',
      label: 'Loại văn bản',
      isRequired: false,
      dataSource: [
        {
          value: 'Thông báo',
          label: 'Thông báo',
        },
        {
          value: 'Công văn',
          label: 'Công văn',
        },
        {
          value: 'Quyết định',
          label: 'Quyết định',
        },
        {
          value: 'Kế hoạch',
          label: 'Kế hoạch',
        },
      ],
      _id: 'loaiVanBan',
    },
    {
      type: 'INPUT_NUMBER',
      label: 'Số trang',
      isRequired: false,
      _id: 'trichYeu',
    },
    {
      type: 'DROP_LIST_SINGLE',
      label: 'Đơn vị ban hành',
      isRequired: false,
      dataSource: [
        {
          value: 'Thông báo',
          label: 'Thông báo',
        },
        {
          value: 'Công văn',
          label: 'Công văn',
        },
        {
          value: 'Quyết định',
          label: 'Quyết định',
        },
        {
          value: 'Kế hoạch',
          label: 'Kế hoạch',
        },
      ],
      _id: 'DonViBanHanh',
    },
    ,
    {
      type: 'DROP_LIST_SINGLE',
      label: 'Độ khẩn',
      isRequired: false,
      dataSource: [
        {
          value: 'Thông báo',
          label: 'Thông báo',
        },
        {
          value: 'Công văn',
          label: 'Công văn',
        },
        {
          value: 'Quyết định',
          label: 'Quyết định',
        },
        {
          value: 'Kế hoạch',
          label: 'Kế hoạch',
        },
      ],
      _id: 'DonViBanHanh',
    },
    ,
    {
      type: 'DROP_LIST_SINGLE',
      label: 'Độ mật',
      isRequired: false,
      dataSource: [
        {
          value: 'Thông báo',
          label: 'Thông báo',
        },
        {
          value: 'Công văn',
          label: 'Công văn',
        },
        {
          value: 'Quyết định',
          label: 'Quyết định',
        },
        {
          value: 'Kế hoạch',
          label: 'Kế hoạch',
        },
      ],
      _id: 'DonViBanHanh',
    },
    {
      type: 'TEXT_AREA',
      label: 'Nơi nhận',
      isRequired: false,
      _id: 'trichYeu',
    },
    {
      type: 'TEXT_INPUT',
      label: 'Nhãn, từ khóa',
      isRequired: false,
      _id: 'trichYeu',
    },
    {
      type: 'DROP_LIST_SINGLE',
      label: 'Hành động',
      isRequired: false,
      dataSource: [
        {
          value: 'Thông báo',
          label: 'Thông báo',
        },
        {
          value: 'Công văn',
          label: 'Công văn',
        },
        {
          value: 'Quyết định',
          label: 'Quyết định',
        },
        {
          value: 'Kế hoạch',
          label: 'Kế hoạch',
        },
      ],
      _id: 'DonViBanHanh',
    },
    {
      type: 'HTML',
      label: 'Nội dung nhắn/Ý kiến',
      isRequired: false,
      _id: 'noiDugNhan_yKien',
    },
  ]
}
