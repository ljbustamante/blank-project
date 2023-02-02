import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'

import { requestLogger, errorLogger } from '@infra/http/middlewares/LoggerMiddleware'
import {router} from "@infra/http/routes";

config()

const app = express()

app.use(
  cors({
    exposedHeaders: ['x-total-count', 'Content-Type', 'Content-Length'],
  }),
)

app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  }),
)

app.use(requestLogger)
app.use(router)
//
// app.use(routerSabbipro.router)

app.use(errorLogger)

export { app }
