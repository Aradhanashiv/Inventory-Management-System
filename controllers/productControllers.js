import productModel from "../models/produceModel.js"

export const handleCreateProduct = async(req,res) => {
    try {
        const {name, description, stock_quantity} = req.body
        if(!name || !description || !stock_quantity){
            return res.status(400).json({success: false, message: "All fields are Required"})
        }
       const product = await productModel.create({
        name,
        description,
        stock_quantity
       }) 
       return res.status(201).json({success: true, message: 'Product Added in a WareHouse Successfully'})

    } catch (error) {
        console.log("Error" ,error)
        return res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const handleUpdateProduct = async(req,res) =>{
    try {
       const productId = req.params.id
       if(!productId){
        return res.status(400).json({success: false, message: "ProductId is Invalid or Wrong"}) 
       }
       const product = await productModel.findById(productId) 
       if(!product){
        return res.status(404).json({success: false, message: "Product not Found"})
       }
     
       const updatedFields = {}
        if(req.body.name !== undefined) updatedFields.name = req.body.name;
        if(req.body.description !== undefined) updatedFields.description = req.body.description;
        if(req.body.stock_quantity !== undefined){
        if(req.body.stock_quantity <= 0){
            return res.status(400).json({success: false, message: "Product Quantity cannot be less then 0."}) 
        }   
        updatedFields.stock_quantity = req.body.stock_quantity
        }
        const updateProduct = await productModel.findByIdAndUpdate(productId, updatedFields,{new: true, runValidators: true})
        
        if(!updateProduct){
          return res.status(404).json({success: false, message: "Product not Found"})   
        }
        return res.status(200).json({success: true, message: "Product Updated Successfully", data: updateProduct})
    } catch (error) {
        console.log("Error" ,error)
        return res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const handleDeleteProduct = async(req,res) => {
    try {
       const productId = req.params.id
       if(!productId) {
        return res.status(400).json({success: false, message: "Product Not Find"})
       }
       const deletedProduct = await productModel.findByIdAndDelete(productId)
        
        if(!deletedProduct){
        return res.status(404).json({success: false, message: "Product Not Find"})        
        }
        return res.status(200).json({success: true, message: "Product Deleted Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"})    
    }
}

export const handleIncreaseStockQunatity = async(req,res) => {
    try {
        const productId = req.params.id
        const product = await productModel.findById(productId)
        if(!product){
          return res.status(404).json({success: false, message: "Product Not Found"})        
        }
       const {amount} = req.body
       if(amount === undefined || amount === null){
         return res.status(400).json({success: false, message: "quantity can't be Empty"})   
       }
       if(typeof amount !== 'number' || amount <= 0){
        return res.status(400).json({success: false, message: "quantity Must be More than previous value"})  
       }
       const updatedProduct = await productModel.findByIdAndUpdate(productId, {
        $inc : { stock_quantity : amount}} , {new: true})
       if(!updatedProduct){
          return res.status(400).json({success: false, message: "Product Not Found", data: updatedProduct})    
       }
       return res.status(200).json({success: true, message: "Stock Quantity Updated"}) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"})    
    }
}

export const handleDecreaseStockQunatity = async(req,res) => {
   try {
        const productId = req.params.id
        const product = await productModel.findById(productId)
        if(!product){
          return res.status(404).json({success: false, message: "Product Not Found"})        
        }
       const {amount} = req.body
       if(amount === undefined || amount === num){
         return res.status(400).json({success: false, message: "quantity can't be Empty"})   
       }
       if(typeof amount !== 'number' || amount <= 0){
        return res.status(400).json({success: false, message: "quantity Must be More than 0"})  
       }
        if(product.stock_quantity < amount){
         return res.status(400).json({success: false, message: "Stock Quantity is not Sufficient to Decrease by that amount"})   
        }
       const updatedProduct = await productModel.findByIdAndUpdate(productId, {
        $inc : { stock_quantity : -amount}} , {new: true})
       if(!updatedProduct){
          return res.status(400).json({success: false, message: "Product Not Found", data: updatedProduct})    
       }
       return res.status(200).json({success: true, message: "Stock Quantity Updated"}) 
    } catch (error) {
       console.log(error);
       return res.status(500).json({success: false, message: "Internal Server Error"})    
    }
}
