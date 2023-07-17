/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native'

type RootStackParamList = {
  Startup: undefined
  Home: undefined
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(
  name: any,
  //  keyof RootStackParamList
  params?: any,
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

export function replace(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params))
  }
}

export function reset(name: string, params?: any, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name, params }],
      }),
    )
  }
}
