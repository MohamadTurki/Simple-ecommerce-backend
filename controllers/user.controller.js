import { Router } from "express"
import { UserService } from "../services/user.service.js"

export class UserController {
  router = Router()

  constructor() {
    this.setRoutes()
  }

  setRoutes() {
    this.router.get('/users', async (req, res) => {
      res.json(await UserService.getAll())
    })

    this.router.get('/users/:id', async (req, res) => {
      res.json(await UserService.getById(req.params.id))
    })

    this.router.delete('/users', async (req, res) => {
      await UserService.deleteAll()
      res.json('All users have been deleted, and the primary key sequence has been reset.')
    })

    this.router.delete('/users/:id', async (req, res) => {
      await UserService.deleteById(req.params.id)
      res.json("User deleted successfully")
    })

  }
}
