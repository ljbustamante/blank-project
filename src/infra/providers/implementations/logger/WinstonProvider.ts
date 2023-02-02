import { HttpResponse } from '@core/infra/HttpResponse'
import { logger } from '@core/infra/logger/winston'
import { ISummaryLogger, Response } from '@infra/providers/models/ILoggerProvider'

export class SummaryLogger implements ISummaryLogger {
  timestamp: Date
  serviceName: string
  customData: Record<string, unknown>
  extraData: Record<string, unknown>
  processData: Record<string, unknown>
  response: Response

  constructor() {}

  private buildSummary() {
    return {
      timestamp: new Date(),
      serviceName: this.serviceName,
      data: this.customData,
      extraData: this.extraData,
      processData: this.processData,
      response: this.response,
    }
  }

  setServiceName(name: string) {
    this.serviceName = name
    return this
  }

  setCustomData(data: Record<string, unknown>) {
    this.customData = data
    return this
  }

  setExtraData(data: Record<string, unknown>) {
    this.extraData = data
    return this
  }

  setProcessData(data: Record<string, unknown>) {
    this.processData = {
      ...(this.processData || {}),
      ...data,
    }

    return this
  }

  setResponse(response: HttpResponse) {
    this.response = {
      ok: response.statusCode >= 200 && response.statusCode < 300,
      status: response.statusCode,
      data: response.body,
    }

    return this
  }

  log() {
    logger.debug('Request Summary: ', this.buildSummary())
  }
}
