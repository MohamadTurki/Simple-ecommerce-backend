import { Router } from "express"
import { ProductService } from '../services/product.service.js'
import { validationHandler } from "../middlewares/validationHandler.js"
import { prodAddSchema } from "../validators/product.schema.js"

export class ProductController {
    router = Router()
    
    constructor() {
        this.setRoutes()
    }

    setRoutes() {
        this.router.post('/products', validationHandler(prodAddSchema), async (req, res) =>
            res.json(await ProductService.addProduct(req, res))
        )
        this.router.get('/products', async (req, res) =>
            res.json(await ProductService.getProducts(req, res))
        )
        this.router.delete('/products', async (req, res) =>
            res.json(await ProductService.deleteProducts(req, res))
        )
        this.router.delete('/products/:id', async (req, res) =>
            res.json(await ProductService.deleteProduct(req, res))
        )
    }
}



