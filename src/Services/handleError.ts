/* eslint-disable @typescript-eslint/no-unused-vars */
import STATUS from './status'
import { IResponse } from './helpers'

import { ApiResponse } from 'apisauce'
import { ErrorCode } from './errorType'
import { popupOk } from '@/Config'
import { translate } from '@/i18n'

type IResponseError = IResponse<unknown> & {
  customMessage?: string
}

export const showMessageError = (responseError: Partial<IResponseError>) => {
  //
}

function handleData<R>(
  responseError: IResponse<R>,
  showToast?: boolean,
  message?: string,
): IResponse<R> {
  if (showToast) {
    showMessageError({ ...responseError, customMessage: message })
  }
  return responseError
}

export function handleErrorApi<R>(
  response: ApiResponse<R & ErrorCode>,
  showToast?: boolean,
): ApiResponse<R> {
  switch (response.status) {
    case STATUS.FAILED:
      return handleData(response, showToast, 'Bad request')
    case STATUS.TOKEN_EXPIRED:
      return handleData(response, showToast, 'Token expired')
    case STATUS.FORBIDDEN:
      return handleData(response, showToast, 'Forbidden')
    case STATUS.NOT_FOUND:
      return handleData(response, showToast, 'Page not found')
    case STATUS.UNAUTHORIZED:
      return handleData(response, showToast, 'Unauthorized')
  }
  return handleData<R>(response, showToast)
}

export const handleErrorApiWithStatusCode = (
  responsecode: string,
  onChangeAlert?: (value: string) => void,
) => {
  switch (responsecode) {
    default:
      popupOk(translate('notice_t'), translate('something_wentwrong'))
      break
  }
}
