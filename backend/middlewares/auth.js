import JWT from 'jsonwebtoken'


export const isUserAuthenticate = async(req,res,next) => {
    try {
      const tokenAccess = req.cookies.token
      if(!tokenAccess){
        return res.status(401).json({message: 'User Not Authenticated'})
      } 
       const decode = JWT.verify(tokenAccess, process.env.SECRET_KEY)
       if(!decode){
        return res.status(400).json({success:false, message: "Invalid Cookie"})
       }
       req.user = decode.id
       next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
}