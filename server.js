import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { UserController } from './controllers/userRoutes.js'
import authRoutes from './controllers/authRoutes.js'
import productRoutes from './controllers/productRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js'
import 'express-async-errors'

const app = express()

dotenv.config()

app.use(cookieParser())
app.use(express.json())

app.use('/api', [
  new UserController().router,
  authRoutes,
  productRoutes,
])

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
