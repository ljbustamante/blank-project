import { HttpResponse } from '@core/infra/HttpResponse'

export interface Response {
  ok: boolean
  status: number
  data: Record<string, unknown>
}

export interface ISummaryLogger {
  timestamp: Date
  serviceName: string
  customData: Record<string, unknown>
  extraData: Record<string, unknown>
  processData: Record<string, unknown>
  response: Response

  setServiceName: (name: string) => void
  setProcessData: (data: Record<string, unknown>) => void
  setCustomData: (data: Record<string, unknown>) => void
  setExtraData: (data: Record<string, unknown>) => void
  setResponse: (response: HttpResponse) => void

  log: () => void
}
