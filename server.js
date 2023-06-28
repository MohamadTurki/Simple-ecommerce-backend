import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

dotenv.config()

app.use(cookieParser())
app.use(express.json())

app.use(authRoutes)
app.use(userRoutes)
app.use(productRoutes)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
