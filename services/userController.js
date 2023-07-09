import prisma from '../utils/db.js'
import { HTTP_CODE } from '../utils/statusCodes.js'

export class UserService {
  static async getAll() {
    return await prisma.user.findMany()
  }

  static async getById(id) {
    return await prisma.user.findUniqueOrThrow({ where: { id } })
  }

  static async deleteAll() {
    await prisma.user.deleteMany()
    await prisma.$queryRaw`DELETE FROM sqlite_sequence WHERE name = 'User'`
  }

  static async deleteById(id) {
    const userId = parseInt(id)
    await prisma.user.delete({where: { id: userId }})
  }
}
