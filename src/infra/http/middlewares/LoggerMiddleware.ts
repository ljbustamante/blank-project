import { Request, Response, NextFunction } from 'express'

import { logger } from '@core/infra/logger/winston'

export const requestLogger = (request: Request, response: Response, next: NextFunction) => {
  logger.info('Request: ', {
    body: request.body,
    baseUrl: request.baseUrl,
    method: request.method,
    originalUrl: request.originalUrl,
    params: request.params,
    query: request.query,
    headers: request.headers,
    url: request.url,
    hostname: request.hostname,
    ip: request.ip,
    path: request.path,
  })

  next()
}

export const errorLogger = (error: Error, request: Request, response: Response, next: NextFunction) => {
  logger.info('Error logger: ', error)

  response.status(500)
  response.send('Oops, something went wrong.')

  next()
}
