export type SignedTokenModel = {
  token: string
  expirationDate: Date
}

export interface JwtToken {
  signAccessToken(userUid: string): SignedTokenModel
  signRefreshToken(userUid: string): SignedTokenModel
  verify(jwtToken: string, isAccessToken?: boolean): string
  encodePayload(payload: object): SignedTokenModel
}
