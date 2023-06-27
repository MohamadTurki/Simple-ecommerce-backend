import prisma from '../utils/db.js'
import { HTTP_CODE } from '../utils/statusCodes.js'

async function getUsers (req, res) {
    let users = await prisma.user.findMany()
    res.json(users)
}

async function deleteUsers (req, res) {
    await prisma.user.deleteMany()
    await prisma.$queryRaw`DELETE FROM sqlite_sequence WHERE name = 'User'`
    res.json('All users have been deleted, and the primary key sequence has been reset.');
}

async function deleteUser (req, res) {
    try {
        const userId = parseInt(req.params.id)
        await prisma.user.delete({where: { id: userId }})
        res.json("User deleted successfully")
    } catch {
        res.status(HTTP_CODE.NOT_FOUND).json("User not found")
    }
}

async function updateUser (req, res) {
    try {
        const userId = parseInt(req.params.id)
        const username = parseInt(req.params.id)
        await prisma.user.update({where: { id: userId }})
        res.json("User updated successfully")
    } catch {
        res.status(HTTP_CODE.NOT_FOUND).json("User not found")
    }
}

export { getUsers, deleteUsers, deleteUser, updateUser};
