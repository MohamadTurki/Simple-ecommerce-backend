import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import secret from './controllers/secret.js';

import cors from 'cors'
import jwtMiddleware from './middlewares/jwtMiddleware.js';
import { getUsers, deleteUsers, deleteUser, updateUser } from './controllers/userController.js'
import { login, register } from './controllers/authController.js'
import authValidator from './middlewares/validators/authValidator.js'
import errorHandler from './middlewares/errorHandler.js'

dotenv.config()
const app = express()
const router = express.Router()



router.get('/secret', jwtMiddleware, secret)
router.get('/login', authValidator, login)
router.get('/register', authValidator, register)

router.get('/api/getusers', getUsers)
router.delete('/api/deleteusers', deleteUsers)
router.delete('/api/deleteuser/:id', deleteUser)
router.delete('/api/updateuser/:id', updateUser)

app.use(errorHandler)
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
