import express from 'express'
import {handleSignin, handleSignup, handleSignOut} from '../controllers/authController.js'

const route = express.Router()

route.post("/signup", handleSignup)
route.post("/signin", handleSignin)
route.get("/signout", handleSignOut)


export default route

