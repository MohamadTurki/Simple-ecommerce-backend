import express from 'express'

import { login, logout, register } from '../services/authController.js'
import { validationHandler } from '../middlewares/validationHandler.js'
import { userLoginSchema } from '../validators/authValidator.js'

const router = express.Router()

router.post('/users/login', validationHandler(userLoginSchema), login)
router.post('/users/logout', logout)
router.post('/users/register', validationHandler(userLoginSchema), register)

export default router
