import express from "express"
import { getUsers, deleteUsers, deleteUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/api/users/getusers', getUsers)
router.delete('/api/users/deleteusers', deleteUsers)
router.delete('/api/users/deleteuser/:id', deleteUser)
router.delete('/api/users/updateuser/:id', updateUser)


export default router