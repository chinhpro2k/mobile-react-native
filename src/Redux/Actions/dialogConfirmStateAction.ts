import { CHANGE_CONTENT_CONFIRM } from './actionTypes'

export const changeDialogConfirmContent = (payload: any) => {
  return {
    type: CHANGE_CONTENT_CONFIRM,
    payload,
  }
}
