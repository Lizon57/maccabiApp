import express from 'express'
import * as httpBase from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'
import { loggerService } from "./services/logger-service"
import { setupAsyncLocalStorage } from "./middlewares/setupAls"
import { authRouter } from "./api/auth/auth-routes"
import { userRouter } from "./api/user/user-routes"
import { signatureRouter } from "./api/signature/signature-routes"
import { crowdOrganizationRouter } from "./api/crowd-organization/crowd-organization-routes"
import { libraryRouter } from "./api/library/library-routes"
import { profileRouter } from "./api/profile/profile-routes"
import { imageRouter } from "./api/image/image-routes"
import { pageCategoryRouter } from "./api/page-category/page-category-routes"
import { entutyItemInfoUpdateRouter } from "./api/entity-item-info-update/entity-item-info-update-routes"


dotenv.config()

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


const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 30 })
app.use(limiter)


app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/signature', signatureRouter)
app.use('/api/crowd-organization', crowdOrganizationRouter)
app.use('/api/library', libraryRouter)
app.use('/api/profile', profileRouter)
app.use('/api/image', imageRouter)
app.use('/api/page-category', pageCategoryRouter)
app.use('/api/entity-item-info-update', entutyItemInfoUpdateRouter)


app.get('/**', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})



const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log('Server is running on port: ' + port)
    loggerService.info('Server is running on port: ' + port)
})