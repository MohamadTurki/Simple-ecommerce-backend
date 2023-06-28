import express from 'express'

import { login, logout, register } from '../controllers/authController.js'
import secret from './secretRoutes.js'

import authValidator from '../middlewares/validators/authValidator.js'
import jwtMiddleware from '../middlewares/jwtMiddleware.js';

const router = express.Router()

router.post('/api/login', authValidator, login)
router.post('/api/logout', logout)
router.post('/api/register', authValidator, register)
router.get('/api/secret', jwtMiddleware, secret)

export default router