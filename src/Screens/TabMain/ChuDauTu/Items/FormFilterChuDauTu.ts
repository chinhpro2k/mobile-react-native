import { DVMC_TYPE } from '@/Config'
export const getFormFilterChuDauTu = (dataFilter: any) => {
  const tinhTP =
    dataFilter?.tinhTP?.map((item: any) => {
      return {
        value: item?.code,
        label: item?.name,
      }
    }) ?? []
  const boBanNganh =
    dataFilter?.boBanNganh?.map((item: any) => {
      return {
        value: item?.code,
        label: item?.name,
      }
    }) ?? []
  const tapDoan =
    dataFilter?.tapDoan?.map((item: any) => {
      return {
        value: item?.code,
        label: item?.name,
      }
    }) ?? []
  return [
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tỉnh / thành phố',
      isRequired: false,
      _id: 'canBo',
      placeHolder: 'Text',
      dataSource: tinhTP,
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Bộ / ban ngành',
      isRequired: false,
      _id: 'canBo',
      dataSource: boBanNganh,
    },
    {
      type: DVMC_TYPE.DROP_LIST_SINGLE,
      label: 'Tập đoàn / TCT',
      isRequired: false,
      _id: 'canBo',
      dataSource: tapDoan,
    },
    {
      type: DVMC_TYPE.TEXT_INPUT,
      label: 'Mã định danh',
      isRequired: false,
      _id: 'canBo',
    },
    // {
    //   type: DVMC_TYPE.DATE_PICKER,
    //   label: 'Ngày hiệu lực (Từ ngày)',
    //   isRequired: false,
    //   _id: 'canBo',
    // },
    // {
    //   type: DVMC_TYPE.DATE_PICKER,
    //   label: 'Ngày hiệu lực (Đến ngày)',
    //   isRequired: false,
    //   _id: 'canBo',
    // },
  ]
}
