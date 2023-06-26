import express from 'express'
import { getUsers, deleteUsers, deleteUser } from './controllers/userController.js'
import { login, register } from './controllers/authController.js'
import authValidator from './middlewares/validators/authValidator.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()
const router = express.Router()


router.post('/login', authValidator, login)
router.post('/register', authValidator, register)

router.get('/api/getusers', getUsers)
router.delete('/api/deleteusers', deleteUsers)
router.delete('/api/deleteuser/:id', deleteUser)

app.use(errorHandler);
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
