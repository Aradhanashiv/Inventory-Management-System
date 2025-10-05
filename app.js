import express from 'express'
import {connectMONGODB} from './config/db.js'
import productRoute from './routes/productRoutes.js'
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use('/api' , productRoute)

connectMONGODB()
app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`);
})