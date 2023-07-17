import AsyncStorage from '@react-native-async-storage/async-storage'
const KEY = {
  ACCOUNT: 'ACCOUNT',
  CURRENTTOKEN: 'CURRENTTOKEN',
  TIME_CAN_LOGIN: 'TIME_CAN_LOGIN',
  TAI_KHOAN: 'TAI_KHOAN',
}
async function saveObject(key: string, value: unknown): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
async function removeObject(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}
/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
async function getObject(key: string): Promise<null> {
  try {
    const almostThere = await AsyncStorage.getItem(key)
    return typeof almostThere === 'string' ? JSON.parse(almostThere) : null
  } catch {
    return null
  }
}

export default {
  saveObject,
  getObject,
  removeObject,
  KEY,
}
