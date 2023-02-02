import { Request, Response, NextFunction } from 'express'

import { logger } from '@core/infra/logger/winston'
import { Middleware } from '@core/infra/Middleware'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const requestData = {
      userUid: request.userUid,
      accessToken: request.headers?.['x-access-token'],
      refreshToken: request.headers?.['x-refresh-token'],
      ...(request.headers || {}),
    }

    const httpResponse = await middleware.handle(requestData, request.body)

    if (httpResponse === false) {
      logger.info('Response: ', {
        ok: false,
        ...requestData,
      })

      return response.status(200).send()
    }

    if (httpResponse.statusCode === 200) {
      Object.assign(request, httpResponse.body)

      return next()
    } else {
      await Binnacle.getInstance()
        .client()
        .store({
          user: request.userUid,
          url: request.originalUrl,
          message: JSON.stringify(httpResponse),
          method: request.method,
          token: requestData?.accessToken as string,
        })

      logger.info('Response: ', {
        ok: false,
        ...httpResponse,
      })

      return response.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
