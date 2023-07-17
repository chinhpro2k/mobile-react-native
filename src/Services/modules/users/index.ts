import {
  delData,
  getData,
  postData,
  postFormData,
  putData,
  putFormData,
} from '@/Services/helpers'
import URL from '@/Services/url'
import { api } from '../../api'
import fetchOne from './fetchOne'
import { IResponseLogin, Login } from './interface/login'

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: fetchOne(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery } = userApi

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
export const getTinhTP = () =>
  getData<any, any>({
    endpoint: URL.TINH_THANH_PHO,
  }).then(res => {
    return res
  })
export const getQuanHuyen = (maTinh: string) =>
  getData<any, any>({
    endpoint: `${URL.QUAN_HUYEN}/${maTinh}`,
  }).then(res => {
    return res
  })

export const getPhuongXa = (maQuanHuyen: string) =>
  getData<any, any>({
    endpoint: `${URL.XA_PHUONG}/${maQuanHuyen}`,
  }).then(res => {
    return res
  })
export const getInfo = () =>
  getData<any, any>({
    endpoint: `${URL.GET_INFO}`,
  }).then(res => {
    return res
  })
export const quenMatKhau = (body: any) =>
  getData<any, any>({
    endpoint: `${URL.QUEN_MAT_KHAU}`,
    params: body,
  }).then(res => {
    return res
  })
export const postDoiMatKhau = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.DOI_MAT_KHAU}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const getListNgonNgu = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.NGON_NGU}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const getListTheLoai = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.THE_LOAI_SACH}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const getListLinhVuc = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.LINH_VUC}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const getListNXB = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.TEN_NHA_XUAT_BAN}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const getListNhaKhoaHoc = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.NHA_KHOA_HOC}`,
    params: body,
  }).then(res => {
    return res?.data
  })
//HanhChinh
export const getListLoaiVanBan = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.LOAI_VAN_BAN}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const loginMuaSamCong = (body: Login) =>
  postData<Login, { data?: { data?: IResponseLogin; statusCode?: number } }>({
    endpoint: `${URL.LOGIN}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const logOut = () =>
  postData<any, any>({
    endpoint: `${URL.LOGOUT}`,
  }).then(res => {
    return res?.data
  })
export const getDanhSachChuDauTu = (body: any, page: number) =>
  postData<any, any>({
    endpoint: `${URL.DANH_SACH_CHU_DAU_TU}?page=${page}&limit=10`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const getDanhSachChuDauTuQuanTam = (body: any) =>
  getData<any, any>({
    endpoint: `${URL.DANH_SACH_CHU_DAU_TU_QUAN_TAM}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const quanTamChuDauTu = (id: string) =>
  putData<any, any>({
    endpoint: `${URL.THEO_DOI_CHU_DAU_TU}/${id}`,
  }).then(res => {
    return res?.data
  })
export const boQuanTamChuDauTu = (id: string) =>
  delData<any, any>({
    endpoint: `${URL.THEO_DOI_CHU_DAU_TU}/${id}`,
  }).then(res => {
    return res?.data
  })
export const chiTietChuDauTu = (id: string) =>
  getData<any, any>({
    endpoint: `${URL.CHI_TIET_CHU_DAU_TU}/${id}`,
  }).then(res => {
    return res?.data
  })
export const getDanhSachGoiThau = (body: any, page: number) =>
  postData<any, any>({
    endpoint: `${URL.DANH_SACH_GOI_THAU}?page=${page}&limit=10`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const getDanhSachGoiThauTheoChuDauTu = (body: any, code: any) =>
  getData<any, any>({
    endpoint: `${URL.DANH_SACH_GOI_THAU_THEO_CHU_DAU_TU}/${code}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const quanTamChuGoiThau = (id: string) =>
  putData<any, any>({
    endpoint: `${URL.THEO_DOI_GOI_THAU}/${id}`,
  }).then(res => {
    return res?.data
  })
export const getDanhSachGoiThauQuanTam = (body: any) =>
  getData<any, any>({
    endpoint: `${URL.DANH_SACH_GOI_THAU_QUAN_TAM}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const boQuanTamAllGoiThau = () =>
  putData<any, any>({
    endpoint: `${URL.BO_QUAN_TAM_TAT_CA_GOI_THAU}`,
  }).then(res => {
    return res?.data
  })
export const boQuanTamNhieuGoiThau = (body: any) =>
  putData<any, any>({
    endpoint: `${URL.BO_QUAN_TAM_NHIEU_GOI_THAU}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const quanTamNhieuGoiThau = (body: any) =>
  putData<any, any>({
    endpoint: `${URL.QUAN_TAM_NHIEU_GOI_THAU}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const boQuanTamAllChuDauTu = () =>
  putData<any, any>({
    endpoint: `${URL.BO_QUAN_TAM_TAT_CA_CHU_DAU_TU}`,
  }).then(res => {
    return res?.data
  })
export const boQuanTamNhieuChuDauTu = (body: any) =>
  putData<any, any>({
    endpoint: `${URL.BO_QUAN_TAM_NHIEU_CHU_DAU_TU}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const quanTamNhieuChuDauTu = (body: any) =>
  putData<any, any>({
    endpoint: `${URL.QUAN_TAM_NHIEU_CHU_DAU_TU}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const boQuanTamGoiThau = (id: string) =>
  delData<any, any>({
    endpoint: `${URL.THEO_DOI_GOI_THAU}/${id}`,
  }).then(res => {
    return res?.data
  })
export const chiTietGoiThau = (id: string, cat: string) =>
  getData<any, any>({
    endpoint: `${URL.CHI_TIET_GOI_THAU}/${id}`,
    params: {
      cat: cat,
    },
  }).then(res => {
    return res?.data
  })
export const duongDanGoiThau = (id: string) =>
  getData<any, any>({
    endpoint: `${URL.QUAN_TAM_GOI_THAU}/${id}/direct-url`,
  }).then(res => {
    return res?.data
  })
export const danhSachThongBaoCuaToi = (body: any) =>
  getData<any, any>({
    endpoint: `${URL.DANH_SACH_THONG_BAO_CUA_TOI}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const chiTietThongBao = (id: string) =>
  getData<any, any>({
    endpoint: `${URL.CHI_TIET_THONG_BAO}/${id}/me`,
  }).then(res => {
    return res?.data
  })
export const postReadOneNotification = (body: any) =>
  postData<any, any>({
    endpoint: `${URL.DOC_THONG_BAO_ONE}`,
    params: body,
  }).then(res => {
    return res?.data
  })
export const loaiHinhPhapLy = () =>
  getData<any, any>({
    endpoint: `${URL.LOAI_HINH_PHAP_LY}`,
  }).then(res => {
    return res?.data
  })
export const quocGia = () =>
  getData<any, any>({
    endpoint: `${URL.QUOC_GIA}`,
  }).then(res => {
    return res?.data
  })
export const tinhThanhPho = (code: any) =>
  getData<any, any>({
    endpoint: `${URL.TINH_THANH_PHO_INVESTOR}/${code}`,
  }).then(res => {
    return res?.data
  })
export const coQuan = (code: any) =>
  getData<any, any>({
    endpoint: `${URL.CO_QUAN}/${code}`,
  }).then(res => {
    return res?.data
  })
export const coQuanChuQuan = (code: any) =>
  getData<any, any>({
    endpoint: `${URL.CO_QUAN_CHU_QUAN}/${code}`,
  }).then(res => {
    return res?.data
  })
export const trangThaiHoatDong = () =>
  getData<any, any>({
    endpoint: `${URL.TRANG_THAI}`,
  }).then(res => {
    return res?.data
  })
export const danhSachVersion = (id: string, cat: string) =>
  getData<any, any>({
    endpoint: `${URL.LIST_VERSION}/${id}`,
    params: {
      cat: cat,
    },
  }).then(res => {
    return res?.data
  })
export const chiTietVersion = (versionId: string, cat: string) =>
  getData<any, any>({
    endpoint: `${URL.CHI_TIET_VERSION}/${versionId}`,
    params: {
      cat: cat,
    },
  }).then(res => {
    return res?.data
  })
export const getTinhThanh = () =>
  getData<any, any>({
    endpoint: `${URL.FILTER_TINH_THANH}`,
  }).then(res => {
    return res?.data
  })
export const getBoBanNganh = () =>
  getData<any, any>({
    endpoint: `${URL.FILTER_BO_BAN_NGANH}`,
  }).then(res => {
    return res?.data
  })
export const getTapDoan = () =>
  getData<any, any>({
    endpoint: `${URL.FILTER_TAP_DOAN}`,
  }).then(res => {
    return res?.data
  })
export const guiFileExcelChuDauTu = (body: any) =>
  putFormData<any, any>({
    endpoint: `${URL.CHON_FILE_DON}`,
    params: body,
  }).then(res => {
    return res?.data
  })
