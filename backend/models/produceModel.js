import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    stock_quantity: {
        type: Number,
        require: true
    },
    low_stock_threshold: {
        type: Number,
        default: 10,
        min: 10
    } 
}, {timestamps: true})

const Product = model("Product", productSchema)
export default Product