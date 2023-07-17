import { DVMC_TYPE } from '@/Config'
export const getFormCapQuyetDinh = () => {
  return [
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Lý do',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Số quyết định',
      isRequired: true,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày ra quyết định',
      isRequired: true,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày có hiệu lực',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.DATE_PICKER,
      label: 'Ngày thực hiện',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Người ký',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Chức vụ người ký',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Cá nhân/Tổ chức ra quyết định',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.TEXT_BLOCK,
      label: 'Tài liệu liên quan',
      isRequired: false,
      _id: 'lyDo',
    },
    {
      type: DVMC_TYPE.UPLOAD_MULTI,
      label: ' ',
      isRequired: false,
      _id: 'minhChung',
    },

    {
      type: DVMC_TYPE.TABLE,
      label: 'Danh sách văn bản',
      _id: '2',
      chuThich: true ? 'Thêm mới' : 'Xem chi tiết',
      onGoTo: () => console.log('hehe'),
      tableHead: [
        'TT',
        'Số đến/đi',
        'Số ký hiệu',
        'Trích yếu',
        'Ngày ban hành',
        'Chức năng',
      ],
    },
  ]
}
