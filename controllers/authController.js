import bcrypt from 'bcrypt'
import prisma from '../utils/db.js'
import generateToken from '../utils/generateJwt.js'
import { HTTP_CODE } from '../utils/statusCodes.js'

async function hashPassword(password) {
  const saltRounds = parseInt(process.env.SALT_ROUNDS)
  const pepper = process.env.PEPPER
  const peppered_password = pepper + password
  const hashed_password = bcrypt.hash(peppered_password, saltRounds)

  return hashed_password
}

async function login (req, res) {
  const { username, password } = req.body
  const user = await prisma.user.findUnique({where: { username: username }})
  let matched_password = false

  if (user) {
    const pepper = process.env.PEPPER
    const peppered_password = pepper + password
    matched_password = await bcrypt.compare(peppered_password, user.password)
  }
  
  if (!user) {
    res.status(HTTP_CODE.NOT_FOUND).json("User not found")
  } else if (!matched_password) {
    res.status(HTTP_CODE.UNAUTHORIZED).json("Wrong Password")
  } else {
    const token = generateToken(user.id)
    res.cookie('JWT_TOKEN', token, { httpOnly: true, sameSite: 'strict', maxAge: 30 * 24 * 60 * 60 * 1000 }).json("User logged in successfully")
  }
}

async function register(req, res) {
  const {username, password} = req.body
  const hashed_password = await hashPassword(password)
  const user = await prisma.user.findUnique({where: { username: username }})


  if (user) {
    res.status(HTTP_CODE.CONFLICT).json("User already exists")
  } else {
    const newUser = await prisma.user.create({data: {username: username, password: hashed_password}})
    res.status(HTTP_CODE.CREATED).json(newUser)
  }
}

async function logout(req, res) {
  res.cookie('JWT_TOKEN', '', {httpOnly: true, expires: new Date(0)})
  res.status(HTTP_CODE.OK).json({ message: 'Logged out successfully'})
}

export { login, logout, register }
