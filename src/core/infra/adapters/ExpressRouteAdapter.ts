import { Request, Response } from 'express'

import { Controller } from '@core/infra/Controller'
import { logger } from '@core/infra/logger/winston'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const requestData = {
      ...request.body,
      ...request.params,
      ...request.query,
      userUid: request.userUid,
      accessToken: request.headers?.['x-access-token'],
      refreshToken: request.headers?.['x-refresh-token'],
    }

    const httpResponse = await controller.handle(requestData)
    const ok = httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299

    logger.info('Response: ', {
      ok,
      ...httpResponse,
    })

    return response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
