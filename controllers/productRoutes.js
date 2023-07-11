import express from "express"

import { getProducts, deleteProducts, deleteProduct, addProduct } from '../services/productController.js'
import { validationHandler } from "../middlewares/validationHandler.js"
import { prodAddSchema } from "../validators/productValidator.js"

const router = express.Router()

router.post('/products', validationHandler(prodAddSchema), addProduct)
router.get('/products', getProducts)
router.delete('/products', deleteProducts)
router.delete('/products/:id', deleteProduct)

export default router
