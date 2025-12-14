// import dotenv from "dotenv"
// dotenv.config()
import mongoose from "mongoose";

let isConnected = false;

export const connectMONGODB = async () =>{
    if(isConnected) {
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "inventories"
        });
        isConnected = true
        console.log('MongoDB Atlas Database Connected Successfully');
    } catch (error) {
        console.log("Error Connecting Database" , error);
        throw error
    }
}