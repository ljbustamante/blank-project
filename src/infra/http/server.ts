import { logger } from '@core/infra/logger/winston'

import { app } from './app'

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`)
})
