import prisma from '../utils/db.js'
import { HTTP_CODE } from '../utils/statusCodes.js'


async function addProduct(req, res) {
    const {title, price, description} = req.body
    const newProduct = await prisma.product.create({data: {name: title, price: price, description: description}})
    res.status(HTTP_CODE.CREATED).json(newProduct)
}

async function getProducts (req, res) {
    const products = await prisma.product.findMany()
    res.json(products)
}

async function deleteProducts (req, res) {
    await prisma.product.deleteMany()
    await prisma.$queryRaw`DELETE FROM sqlite_sequence WHERE name = 'Product'`
    res.json('All products have been deleted, and the primary key sequence has been reset.');
}

async function deleteProduct (req, res) {
    try {
        const productId = parseInt(req.params.id)
        await prisma.product.delete({where: { id: productId }})
        res.json("product deleted successfully")
    } catch {
        res.status(HTTP_CODE.NOT_FOUND).json("product not found")
    }
}

export { getProducts, deleteProducts, deleteProduct, addProduct };
