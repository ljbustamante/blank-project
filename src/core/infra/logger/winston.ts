import winston, { createLogger, format } from 'winston'

export const logger = createLogger({
  level: 'debug',
  format: format.json(),
  transports: [
    new winston.transports.Console({
      format: format.simple(),
    }),
  ],
})
