import jwt from "jsonwebtoken"
import { userModel } from "../model/user.js";
import"dotenv/config"
import { json } from "express";


// export const protect = async(req,res,next)=>{
//     let token;

//     if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
//         try{
//             token = req.headers.authorization.split(" ")[1];
//             const decode = jwt.verify(token, process.env.JWT_SECRET);

//             req.user = await userModel.findById(decode.id).select("-password");
//             next();

//         }catch(error){
//             res.status(401).json({
//                 message: "Not authorized, Token Failed"
//             });
//         }
//     }
//     if(!token){
//         res.status(401),json({
//             message:"Not authorized, no Token"
//         });
//     }
// }

export const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Not authorized, No Token",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({
            message: "Not authorized",
        });
    }
};