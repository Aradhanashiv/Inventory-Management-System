import User from "../models/authModel.js"
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

export const handleSignup = async (req,res) => {
    try {
       const {fullname, email, password,mobile} = req.body
       if(!fullname || !email || !password || !mobile){
        return res.status(400).json({message: 'All Fields are Required'})
       } 
       const isExistingUser = await User.findOne({email})
       if(isExistingUser){
         return res.status(400).json({message: 'User Already Exists'})
       }
       const hashedPassword = await bcrypt.hash(password, 10)            
       const user = await User.create({
        fullname, email, password: hashedPassword, mobile
       })
        const token = JWT.sign({id: user._id} , process.env.SECRET_KEY, {expiresIn: "7d"})
        res.cookie("token" , token, {
            secure: false,
            httpOnly: true,
            maxAge: 7*24*60*60*1000
        })
        return res.status(201).json({message: 'User Created Successfully', user})
       
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"})
        
    }
}

export const handleSignin = async (req,res) => {
    try {
       const {email, password} = req.body
       if(!email || !password){
        return res.status(400).json({message: 'All Fields are Required'})
       } 
       const user = await User.findOne({email})
       if(!user){
         return res.status(404).json({status: false, message: 'User Not Exists'}) 
       }
       const isHashedPass =await bcrypt.compare(password, user.password)
       if(!isHashedPass) {
        return res.status(400).json({message: "Password is Wrong"})
       }
       const token = JWT.sign({id: user._id} , process.env.SECRET_KEY, {expiresIn: "7d"})
       res.cookie('token' , token, {
        httpOnly: true,
        maxAge: 7*24*60*60*1000
       })
       return res.status(200).json({message: "User Signin Successfully" , user})
    } catch (error) { 
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
        
    }
}

export const handleSignOut = async (req,res) => {
    try {  
      res.clearCookie('token')
      return res.status(200).json({message: "User SignOut Successfuly"})
    } catch (error) {
      console.log(error);
      res.status(500).json({message: "Internal Server Error"})
    }
}