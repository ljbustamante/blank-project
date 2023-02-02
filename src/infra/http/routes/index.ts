import { Router } from 'express'

import { fileClientRouter } from '@infra/http/routes/fileClient.routes'

const router = Router()

router.use('/file-client', fileClientRouter)

export { router }
