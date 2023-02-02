import { MailMessage } from '@core/common'

export interface IMailProvider {
  sendEmail(message: MailMessage, meta?: Record<string, unknown>): Promise<void>
}
