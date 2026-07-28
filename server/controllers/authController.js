
import { userModel } from "../model/user.js"
import bcrypt from "bcryptjs"
import sendEmail from "../utils/sendEmail.js";
import genrateToken from "../utils/genrateToken.js"
import createError from "http-errors";


export const registeruser = async (req, res,next) => {
    
    try {

        const { name, email, password,role } = req.body;
        if(!name || !email || !password ){
            return next(createError(400,"Missing Fileds - one of thr Required Field Is Empty"))

        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
           return next(createError(400,"User Already Exiest....!"))
        }
       
        const hashedPassword = bcrypt.hashSync(password,10)

        const user = await userModel.create({
            name, 
            email,
            password: hashedPassword,
            role: role|| "user"
            });
        if (user) {
            const token = genrateToken(user._id)
            
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const message = `
            Welcome to namocart, ${name}
            Your OTP for namoCart Regidtration is :${otp} Please enter this code on the screen to verify your account.`

            await sendEmail(email, "Welcome to namoCart - Your OTP for regisstration", message);
            
            console.log(token)
            res.status(201).json({
                name:user.name,
                _id : user._id,
                email : user.email,
                role : user.role,
                token : token,
            });
        } else {
            res.status(400).json({
                message: "Invalid user Data"
            })
        }
    } catch (error) {
        console.error(error);
    
        res.status(500).json({
            message: error.message
        });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await userModel.findOne({ email });
        console.log(user);
        console.log(user.name);
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: genrateToken(user._id)
            });
        }else{
            res.status(400).json({
                message:"Invalid email or Password"
            });
        }
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        });
    }
};


export const getUsers = async (req, res) => {
    try{
        const users = await userModel.find({}).select("-password");
        res.json({
            users
        })

    }catch(error){
        res.status(500).json({
            message:"server Error"
        })
    }


}