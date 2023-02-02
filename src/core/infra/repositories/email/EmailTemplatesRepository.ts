import { MailMessage } from '@core/common'
import { OrderDetails } from '@core/dtos/OrderDetails'
import { IEmailTemplatesRepository } from '@core/infra/repositories/IEmailTemplateRepository'

import { CreateOrderHtml } from './templates/create-order'

export class EmailTemplateRepository implements IEmailTemplatesRepository {
  constructor() {}

  createOrderEmail(order: OrderDetails): MailMessage {
    const { CREATE_ORDER_EMAIL_BCC, NODE_ENV } = process.env
    const to = [{ email: order.investor.email }]
    const bcc = (CREATE_ORDER_EMAIL_BCC || '').split(',').map(email => ({ email }))
    const body = CreateOrderHtml({ order })
    return {
      from: {
        name: 'Sabbi.la',
        email: process.env.EMAIL_USERNAME,
      },
      to,
      bcc,
      subject: `${NODE_ENV !== 'production' ? '(TEST) ' : ''}Orden de compra ${order.code} a nombre de ${
        order.investor.names
      } ${order.investor.lastname}`,
      body,
    }
  }
}
