import express from 'express'
import {handleCreateProduct, handleUpdateProduct, handleDeleteProduct, handleIncreaseStockQunatity, handleDecreaseStockQunatity} from '../controllers/productControllers.js'
import productModel from '../models/produceModel.js'
import {isUserAuthenticate} from '../middlewares/auth.js'
import mongoose from 'mongoose'

const route = express.Router()

route.get('/all-products' , isUserAuthenticate , async(req,res)=>{
    try {
        const all_products = await productModel.find().sort({createdAt: -1})
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

route.get('/details/:id' , async(req,res)=>{
    try {
      const productId = req.params.id
      if(!mongoose.Types.ObjectId.isValid(productId)){
      return res.status(404).json({success: false, message: 'Invalid ProductId Format'})  
      }  
      const product = await productModel.findById(productId)
      if(!product){
        return res.status(404).json({success: false, message: 'Product Not Found'})        
      }
      return res.status(200).send({success: true, message: "Product Details", data: product})
    } catch (error) {
      console.log("Error", error);
      return res.status(500).json({success: false, message: 'Internal Server Error'})  
    }
})

route.post('/create-product' , handleCreateProduct)
 
route.patch('/update-product/:id' , handleUpdateProduct)

route.delete('/delete-product/:id' , handleDeleteProduct)

route.post('/:id/increase-stock' , handleIncreaseStockQunatity)

route.post('/:id/decrease-stock' , handleDecreaseStockQunatity)


export default route
