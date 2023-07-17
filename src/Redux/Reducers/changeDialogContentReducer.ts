import { CHANGE_CONTENT } from '../Actions/actionTypes'

const defaultState = {
  isVisible: false,
  title: '',
  content: '',
  onPress: null,
}
export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_CONTENT: {
      return action.payload
    }
    default:
      return state
  }
}
