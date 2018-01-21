// @flow
type ProviderData = {
  displayName: string,
  email: string,
  phoneNumber: number,
  photoURL: string,
  providerId: string,
  uid: string
}

type TokenManager = {
  accessToken: string,
  apiKey: string,
  expirationTime: number,
  refreshToken: string,
}

type User = {
  apiKey: string,
  appName: string,
  authDomain: string,
  createdAt: number,
  displayName: string,
  email: string,
  emailVerified: boolean,
  isAnonymous: boolean,
  lastLoginAt: number,
  phoneNumber: string,
  photoURL: string,
  providerData: []ProviderData,
  redirectEventId?: number,
  stsTokenManager: TokenManager,
  uid: string,
}
