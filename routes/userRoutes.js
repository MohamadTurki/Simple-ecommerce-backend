import express from "express"
import { getUsers, deleteUsers, deleteUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/api/getusers', getUsers)
router.delete('/api/deleteusers', deleteUsers)
router.delete('/api/deleteuser/:id', deleteUser)
router.delete('/api/updateuser/:id', updateUser)


export default router