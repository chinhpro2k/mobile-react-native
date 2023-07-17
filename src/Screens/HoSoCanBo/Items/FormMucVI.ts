import { DVMC_TYPE } from '@/Config'
export const getFormMucVI = () => {
  return [
    {
      type: DVMC_TYPE.TABLE,
      label: ' ',
      _id: '2',
      chuThich: true ? 'Thêm mới' : 'Xem chi tiết',
      onGoTo: () => console.log('hehe'),
      tableHead: [
        'TT',
        'Từ tháng năm',
        'Đến tháng năm',
        'Đơn vị công tác',
        'Chức danh',
        'Chức vụ',
        'Nội dung',
        'Chức năng',
      ],
    },
  ]
}
