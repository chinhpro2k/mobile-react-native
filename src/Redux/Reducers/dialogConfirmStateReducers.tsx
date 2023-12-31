import { CHANGE_CONTENT_CONFIRM } from '../Actions/actionTypes'

export type uploadAction = {
  type: string
  payload: {
    isVisible: boolean
    title: string
    content: string
    onPress?: (value?: any) => void
    onPressCancel?: (value?: any) => void
    onCancelPressCallback?: () => void
    cancelTitle?: string
  }
}

const defaultState = {
  isVisible: false,
  title: '',
  content: '',
  onPress: null,
  onPressCancel: null,
  onCancelPressCallback: null,
  cancelTitle: '',
}

export default (state = defaultState, action: uploadAction) => {
  switch (action.type) {
    case CHANGE_CONTENT_CONFIRM: {
      return action.payload
    }
    default:
      return state
  }
}
