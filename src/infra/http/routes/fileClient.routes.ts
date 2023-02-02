import express from 'express'
const fileClientRouter = express.Router()
import { adaptRoute } from '@core/infra/adapters/ExpressRouteAdapter'
import {
  CreateFileClientControllerFactory
} from "@infra/http/factories/controllers/fileClient/CreateFileClientControllerFactory";


fileClientRouter.post('/create', adaptRoute(CreateFileClientControllerFactory()))


export { fileClientRouter }
