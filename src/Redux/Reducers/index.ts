import { combineReducers } from 'redux'
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'

import userReducer from './userReducer'
import dialogConfirmStateReducers from './dialogConfirmStateReducers'
import changeDialogContentReducer from './changeDialogContentReducer'
const rootReducers = combineReducers({
  dialogConfirmStateReducers,
  changeDialogContentReducer,
  userReducer,
})

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof rootReducers>
> = useReduxSelector
export default rootReducers
