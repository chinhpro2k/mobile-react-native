// const ROOT_API = 'https://ais.aisenote.com/cong-thong-tin-viec-lam' //Đơn vị hành chính
const ROOT_API = 'https://api.biddingtracker.top' //API chính

const URL = {
  ROOT_API,
  TINH_THANH_PHO: '/don-vi-hanh-chinh/tinh',
  QUAN_HUYEN: '/don-vi-hanh-chinh/quan-huyen/maTinh',
  XA_PHUONG: '/don-vi-hanh-chinh/xa-phuong/ma-quan-huyen',

  GET_INFO: '/gwdevv5/userorg/v5/user/ForLogin',
  QUEN_MAT_KHAU:
    'https://u2212-dev.dttt.vn/gwdevv5/userorg/v5/user/ForgotPassword',
  DOI_MAT_KHAU: '/gwdevv5/userorg/v5/user/ChangePassword',
  NGON_NGU: '/gwdevv5/nckh/v5/KH_NgonNgu/GetAllByFilter',
  THE_LOAI_SACH: '/gwdevv5/nckh/v5/KH_TheLoaiSach/GetAllByFilter',
  LINH_VUC: '/gwdevv5/nckh/v5/KH_LinhVuc/GetAllByFilter',
  TEN_NHA_XUAT_BAN: '/gwdevv5/nckh/v5/KH_NhaXuatBan/GetAllByFilter',
  NHA_KHOA_HOC: '/gwdevv5/nckh/v5/KH_NhaKhoaHoc/GetAllByFilter',
  // Hanh chinh
  LOAI_VAN_BAN: '/gwdevv5/vanban/v5/DM_LoaiVanBan/GetAllByFilter',
  LOGIN: '/auth/login/mobile',
  LOGOUT: '/auth/logout/mobile',
  DANH_SACH_CHU_DAU_TU: '/investor/pageable',
  DANH_SACH_CHU_DAU_TU_QUAN_TAM: '/investor/pageable/favorite',
  BO_QUAN_TAM_TAT_CA_CHU_DAU_TU: 'investor/all/unsubscribe',
  BO_QUAN_TAM_NHIEU_CHU_DAU_TU: '/investor/favorite/list/unset',
  QUAN_TAM_NHIEU_CHU_DAU_TU: '/investor/favorite/list',
  QUAN_TAM: '/investor',
  THEO_DOI_CHU_DAU_TU: 'investor/favorite',
  CHI_TIET_CHU_DAU_TU: '/investor/info',
  DANH_SACH_GOI_THAU: '/bid/pageable',
  DANH_SACH_GOI_THAU_THEO_CHU_DAU_TU: '/bid/pageable/investor',
  DANH_SACH_GOI_THAU_QUAN_TAM: '/bid/pageable/favorite',
  BO_QUAN_TAM_TAT_CA_GOI_THAU: 'bid/all/unsubscribe',
  BO_QUAN_TAM_NHIEU_GOI_THAU: '/bid/favorite/list/unset',
  QUAN_TAM_NHIEU_GOI_THAU: '/bid/favorite/list',
  QUAN_TAM_GOI_THAU: '/bid',
  THEO_DOI_GOI_THAU: '/bid/favorite',
  CHI_TIET_GOI_THAU: '/bid/info',
  DANH_SACH_THONG_BAO_CUA_TOI: '/notification/me',
  CHI_TIET_THONG_BAO: 'notification',
  DOC_THONG_BAO_ONE: '/notification/me/read/one',
  LOAI_HINH_PHAP_LY: '/category/business-type/all',
  QUOC_GIA: '/category/country/all',
  TINH_THANH_PHO_INVESTOR: '/category/area',
  CO_QUAN: '/investor/info',
  CO_QUAN_CHU_QUAN: '/category/co-quan-chu-quan',
  TRANG_THAI: '/category/status/all',
  LIST_VERSION: '/bid/version',
  CHI_TIET_VERSION: '/bid/info',
  FILTER_TINH_THANH: '/category/uy-ban-nhan-dan/all',
  FILTER_BO_BAN_NGANH: '/category/bo-ban-nganh/all',
  FILTER_TAP_DOAN: '/category/tap-doan/all',
  CHON_FILE_DON: '/investor/import',
}

export default URL
