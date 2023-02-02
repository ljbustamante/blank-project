import { Request, Response } from 'express'
import multiparty from 'multiparty'

import { Controller } from '@core/infra/Controller'
import { logger } from '@core/infra/logger/winston'

export const adaptMultipartRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const form = new multiparty.Form()
    const formData: any = await new Promise((success, failure) => {
      return form.parse(request, (err, fields, files) => {
        if (err) return failure(err)

        return success({ fields, files })
      })
    })
    const requestData = {
      ...formData.fields,
      ...formData.files,
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
