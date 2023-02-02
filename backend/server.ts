import express from 'express'
import * as httpBase from 'http'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import { loggerService } from "./services/logger.service"
import { setupAsyncLocalStorage } from "./middlewares/setupAls"
import { userRouter } from "./api/user/user.routes"


const app = express()
const http = httpBase.createServer(app)

// Express App Config
app.use(cookieParser())
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}


app.all('*', setupAsyncLocalStorage)

app.use('/api/user', userRouter)


app.get('/**', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})



const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log('Server is running on port: ' + port)
    loggerService.info('Server is running on port: ' + port)
})