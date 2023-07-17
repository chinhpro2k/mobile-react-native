import { popupOk } from '@/Config'
import { reset } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'
import AsyncStorageUtils from '@/Utils/AsyncStorageUtils'
import APISauce, { ApiResponse } from 'apisauce'
import { ErrorCode } from './errorType'
import { handleErrorApi } from './handleError'
import { logOut } from './modules/users'
import URL from './url'

export type IRequest<P> = {
  endpoint: string
  params?: P
  showToast?: boolean
}

export type IResponse<R> = ApiResponse<R & ErrorCode> & {
  showToast?: boolean
}

export const rootServerInstance = APISauce.create({
  baseURL: URL.ROOT_API,
})

rootServerInstance.axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (error.toString() === 'Error: Request failed with status code 401') {
      // await logOut()
      await AsyncStorageUtils.removeObject(AsyncStorageUtils.KEY.CURRENTTOKEN)
      popupOk(
        'Thông báo',
        'Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại!',
        () => {
          reset(ScreenName.Login)
        },
      )
    }
    return Promise.reject(error)
  },
)

const formdataConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}

export async function getData<P, R>(
  request: IRequest<P>,
): Promise<IResponse<R>> {
  return await rootServerInstance
    .get<R & ErrorCode>(request.endpoint, request.params)
    .then(response => {
      return handleErrorApi<R & ErrorCode>(response, request.showToast)
    })
}
export async function postData<P, R>(
  request: IRequest<P>,
): Promise<IResponse<R>> {
  return await rootServerInstance
    .post<R & ErrorCode>(request.endpoint, request.params)
    .then(response => {
      return handleErrorApi<R & ErrorCode>(response, request.showToast)
    })
}
export async function putData<P, R>(
  request: IRequest<P>,
): Promise<IResponse<R>> {
  return await rootServerInstance
    .put<R & ErrorCode>(request.endpoint, request.params)
    .then(response => {
      return handleErrorApi<R & ErrorCode>(response, request.showToast)
    })
}
export async function delData<P, R>(
  request: IRequest<P>,
): Promise<IResponse<R>> {
  return await rootServerInstance
    .delete<R & ErrorCode>(request.endpoint, request.params)
    .then(response => {
      return handleErrorApi<R & ErrorCode>(response, request.showToast)
    })
}

export async function postFormData<P, R>(
  request: IRequest<P>,
): Promise<IResponse<R>> {
  return await rootServerInstance
    .post<R & ErrorCode>(request.endpoint, request.params, formdataConfig)
    .then(response => {
      return handleErrorApi<R & ErrorCode>(response, request.showToast)
    })
}

export async function putFormData<P, R>(
  request: IRequest<P>,
): Promise<IResponse<R>> {
  return await rootServerInstance
    .put<R & ErrorCode>(request.endpoint, request.params, formdataConfig)
    .then(response => {
      return handleErrorApi<R & ErrorCode>(response, request.showToast)
    })
}
