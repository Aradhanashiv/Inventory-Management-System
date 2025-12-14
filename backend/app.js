import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {connectMONGODB} from './config/db.js'
import productRoute from './routes/productRoutes.js'
import authRoute from './routes/authRoute.js'
import userInfoRoute from './routes/userRoute.js'



const app = express()
const port = process.env.PORT || 8000

app.use(cors({
    origin: process.env.FRONTEND_URL,
     credentials: true
    }))

app.use(express.json())
app.use(cookieParser())  
app.use('/product' , productRoute)
app.use('/user' , authRoute)
app.use('/user-info' , userInfoRoute)



connectMONGODB()
app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`);
})