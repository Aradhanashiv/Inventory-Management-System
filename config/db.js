import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

export const connectMONGODB = async () =>{
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Atlas Database Connected Successfully');
    } catch (error) {
        console.log("Error Connecting Database" , error);
    }
}