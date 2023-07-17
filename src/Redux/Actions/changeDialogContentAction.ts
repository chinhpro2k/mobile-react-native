import { CHANGE_CONTENT } from './actionTypes'

export function changeDialogContent(payload: any) {
  return { type: CHANGE_CONTENT, payload }
}
