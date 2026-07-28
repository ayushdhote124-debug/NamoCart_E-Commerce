import jwt from "jsonwebtoken"
import "dotenv/config"

const JWT_SECRET = process.env.JWT_SECRET

const genrateToken = (id)=>{
   return jwt.sign({id},JWT_SECRET, {expiresIn :"30d"})

}

export default genrateToken
