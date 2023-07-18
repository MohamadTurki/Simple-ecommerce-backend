import prisma from '../utils/db.js'
import { HTTP_CODE } from '../utils/statusCodes.js'

export class ProductService {
    
    static async addProduct(req, res) {
        const {title, price, description} = req.body
        const newProduct = await prisma.product.create({data: {name: title, price: price, description: description}})
        res.status(HTTP_CODE.CREATED).json(newProduct)
    }
    
    static async getProducts (req, res) {
        return await prisma.product.findMany()
    }
    
    static async deleteProducts (req, res) {
        await prisma.product.deleteMany()
        await prisma.$queryRaw`DELETE FROM sqlite_sequence WHERE name = 'Product'`
        return 'All products have been deleted, and the primary key sequence has been reset.'
    }
    
    static async deleteProduct (req, res) {
        const productId = parseInt(req.params.id)
        return await prisma.product.delete({where: { id: productId }})
    }
}

