import express from 'express'

import { login, logout, register } from '../services/auth.service.js'
import { validationHandler } from '../middlewares/validationHandler.js'
import { userLoginSchema } from '../validators/auth.schema.js'

const router = express.Router()

router.post('/users/login', validationHandler(userLoginSchema), login)
router.post('/users/logout', logout)
router.post('/users/register', validationHandler(userLoginSchema), register)

export default router
