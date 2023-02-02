import jwt from 'jsonwebtoken'

import { JwtToken } from '@infra/providers/models/IJwtToken'

const createFutureDate = (date: Date, secondsToAdd: number): Date => {
  const secondsToMilliseconds = secondsToAdd * 1000

  return new Date(date.getTime() + secondsToMilliseconds)
}

export class JwtAdapter implements JwtToken {
  constructor(
    private readonly secret: string,
    private readonly refreshSecret: string,
    private readonly accessTokenExpirationInSeconds = 3600, // 60 minutes default
    private readonly refreshTokenExpirationInSeconds = 691200, // 8 days default
  ) {}

  signAccessToken(userUid: string) {
    const expirationDate = createFutureDate(new Date(), this.accessTokenExpirationInSeconds)
    const token = jwt.sign({ userUid }, this.secret, {
      expiresIn: this.accessTokenExpirationInSeconds,
    })

    return { token, expirationDate }
  }

  signRefreshToken(userUid: string) {
    const expirationDate = createFutureDate(new Date(), this.refreshTokenExpirationInSeconds)
    const token = jwt.sign({ userUid }, this.refreshSecret, {
      expiresIn: this.refreshTokenExpirationInSeconds,
    })

    return { token, expirationDate }
  }

  verify(token: string, isAccessToken = true) {
    const secret = isAccessToken ? this.secret : this.refreshSecret
    const userData = jwt.verify(token, secret) as { userUid: string }

    return userData.userUid
  }

  encodePayload(payload: object) {
    const expirationDate = createFutureDate(new Date(), this.accessTokenExpirationInSeconds)
    const token = jwt.sign(payload, this.secret, { expiresIn: this.accessTokenExpirationInSeconds })

    return { token, expirationDate }
  }
}

const secret = process.env.JWT_SECRET as string
const refreshSecret = process.env.JWT_SECRET_REFRESH as string
const secretExpiration = parseInt(process.env.JWT_SECRET_EXPIRATION_SECS as string)
const refreshSecretExpiration = parseInt(process.env.JWT_SECRET_REFRESH_EXPIRATION_SECS as string)

export const jwtAdapterSingleton = new JwtAdapter(secret, refreshSecret, secretExpiration, refreshSecretExpiration)
