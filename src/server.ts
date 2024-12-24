import app from './app'
import { Config } from './config'
import logger from './config/logger'

const startServer = () => {
    const PORT = Config.PORT || 3000
    try {
        app.listen(PORT, () => {
            logger.info(`Server is running on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

startServer()
