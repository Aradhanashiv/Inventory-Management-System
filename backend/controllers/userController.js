import User from "../models/authModel.js"

const getCurrentUser = async (req,res) => {
    try {
      const userId =  req.user
      if(!userId){
        return res.status(404).json({message: 'User Not Found'})
      }
      const user = await User.findById(userId) 
      if(!user){
        return res.status(404).json({message: 'User Not Exists'})
      }
       return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal Server Error'})
    }
}

export default getCurrentUser