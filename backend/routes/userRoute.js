import express from 'express'
import { isUserAuthenticate } from '../middlewares/auth.js'
import getCurrentUser from '../controllers/userController.js'
const route = express.Router()

route.get('/current' , isUserAuthenticate, getCurrentUser)

export default route