import nodemailer, { Transporter } from 'nodemailer'

import { MailMessage } from '@core/common'

import { IMailProvider } from '../../models/IMailProvider'

export class MailtrapProvider implements IMailProvider {
  private transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Outlook365',
      host: 'smtp.office365.com',
      port: 587,
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      requireTLS: true,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })
  }

  async sendEmail(message: MailMessage): Promise<void> {
    const recipients = message.to.map(recipient =>
      recipient.name ? `${recipient.name} <${recipient.email}>` : recipient.email,
    )

    const recipientsBcc =
      message.bcc?.map(recipient => (recipient.name ? `${recipient.name} <${recipient.email}>` : recipient.email)) || []

    await this.transporter.sendMail({
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      to: recipients,
      bcc: recipientsBcc,
      subject: message.subject,
      html: message.body,
    })
  }
}
