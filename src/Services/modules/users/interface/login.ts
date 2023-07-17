export interface Login {
  username: string
  password: string
  deviceId: string
  oneSignalId: string
}
export interface IResponseLogin {
  user: {
    _id: string
    username: string
    systemRole: string
    email: string
    profile: {
      _id: string
      firstname: string
      lastname: string
      dateOfBirth: string
      gender: string
    }
    authorizationVersion: {
      props: Array<string>
      version: number
      _id: string
    }
    createdAt: string
    updatedAt: string
    __v: number
  }
  accessToken: string
}
