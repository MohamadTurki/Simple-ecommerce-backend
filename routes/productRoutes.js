import express from "express"

import { getProducts, deleteProducts, deleteProduct, addProduct } from '../controllers/productController.js'
import productValidator from '../middlewares/validators/productValidator.js'

const router = express.Router()

router.post('/api/products/addproduct', productValidator, addProduct)
router.get('/api/products/getproducts', getProducts)
router.delete('/api/products/deleteproducts', deleteProducts)
router.delete('/api/products/deleteproduct/:id', deleteProduct)


export default router