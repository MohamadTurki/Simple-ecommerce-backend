import { Router } from "express"
import { UserService } from "../services/userController.js"

export class UserController {
  router

  constructor() {
    this.router = Router()
    this.setRoutes()
  }

  setRoutes() {
    this.router.get('/users', (req, res) => {
      res.json(UserService.getAll())
    })

    this.router.get('/users/:id', (req, res) => {
      res.json(UserService.getById(req.params.id))
    })

    this.router.delete('/users', (req, res) => {
      UserService.deleteAll()
      res.json('All users have been deleted, and the primary key sequence has been reset.')
    })

    this.router.delete('/users/:id', (req, res) => {
      UserService.deleteById(req.params.id)
      res.json("User deleted successfully")
    })

  }
}
