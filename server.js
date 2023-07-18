import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { UserController } from './controllers/user.controller.js'
import authController from './controllers/auth.controller.js'
import { ProductController } from './controllers/product.controller.js'
import { errorHandler } from './middlewares/errorHandler.js'
import 'express-async-errors'

const app = express()

dotenv.config()

app.use(cookieParser())
app.use(express.json())

app.use('/api', [
  new UserController().router,
  authController,
  new ProductController().router,
])

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
