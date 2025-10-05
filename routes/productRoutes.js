import express from 'express'
import {handleCreateProduct, handleUpdateProduct, handleDeleteProduct, handleIncreaseStockQunatity} from '../controllers/productControllers.js'
import productModel from '../models/produceModel.js'

const route = express.Router()

route.get('/all-products' , async(req,res)=>{
    try {
        const all_products = await productModel.find()
        return res.status(200).json({success: true, message: "Products Available in a Warehouse", data: all_products})
    } catch (error) {
        console.log("Error" ,error)
        return res.status(500).json({success: false, message: "Internal Server Error"}) 
    }
})

route.get('/get-threshold-products' , async(req,res)=> {
    try { 
       const low_stock_product = await productModel.find({
        $expr: {$lt : ["$stock_quantity", "$low_stock_threshold"]}
       })
       .sort({stock_quantity: 1})
       if(low_stock_product.length === 0){
        return res.status(200).json({success: true, message: "Currently No products are Below the threshold limit in Stock"})
       }
       return res.status(200).json({success: true, data: low_stock_product})
    } catch (error) {
        console.log("Error" ,error)
        return res.status(500).json({success: false, message: "Internal Server Error"})
    }
})

route.post('/create-product' , handleCreateProduct)
 
route.patch('/update-product/:id' , handleUpdateProduct)

route.delete('/delete-product/:id' , handleDeleteProduct)

route.delete('/increase-stock_quantity/:id' , handleIncreaseStockQunatity)




export default route
