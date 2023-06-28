import express from 'express'

import { login, logout, register } from '../controllers/authController.js'
import secret from './secretRoutes.js'

import authValidator from '../middlewares/validators/authValidator.js'
import jwtMiddleware from '../middlewares/jwtMiddleware.js';

const router = express.Router()

router.post('/api/users/login', authValidator, login)
router.post('/api/users/logout', logout)
router.post('/api/users/register', authValidator, register)
router.get('/api/users/secret', jwtMiddleware, secret)

export default router