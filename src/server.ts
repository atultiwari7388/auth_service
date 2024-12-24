import app from './app'
import { Config } from './config'

const startServer = () => {
    const PORT = Config.PORT || 3000
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

startServer()
