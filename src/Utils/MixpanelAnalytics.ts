import { Mixpanel, MixpanelType } from 'mixpanel-react-native'
import { MixpanelProjectToken } from '@/Config'

let mixpanelInstance: MixpanelType

export const initMixpanel = async () => {
  mixpanelInstance = await Mixpanel.init(MixpanelProjectToken) // token project
}
/**
 * To track an event to sent it to server
 * @param eventTag String: Tag for event. Like "User press Login"
 * @param trackBody Object: Body to tracking
 */
export const trackEvent = (eventTag: string, trackBody: any) => {
  mixpanelInstance?.track(eventTag, trackBody)
}
/**
 * To identify user. Tips: use user id to identify
 * @param USER_ID string
 */
export const identifyUser = (USER_ID: string) => {
  mixpanelInstance?.identify(USER_ID)
}
/**
 * Set property for user (Acount infomation)
 * @param userProperty Object {key: value}: user property
 */
export const setUserProperty = (userProperty: any) => {
  Object.keys(userProperty).map(key => {
    userProperty[key] &&
      mixpanelInstance.people.set(key, userProperty[key].toString())
    return userProperty[key]
  })
}

/**
 * Reset instance. Call when user logout
 */
export const resetMixpanel = () => mixpanelInstance?.reset()
