import { userModel } from "../model/user.js";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";
import genrateToken from "../utils/genrateToken.js";
import createError from "http-errors";

export const registeruser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return next(createError(400, "Missing Fields - All fields are required"));
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return next(createError(400, "User Already Exists!"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user"
    });

    const token = genrateToken(user._id);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Isolate email errors so they don't break the HTTP cycle
    try {
      const message = `Welcome to namocart, ${name}\nYour OTP for registration is: ${otp}`;
      await sendEmail(email, "Welcome to namoCart - Your OTP", message);
    } catch (emailErr) {
      console.error("Warning: Failed to send OTP email:", emailErr.message);
    }

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token,
    });
  } catch (error) {
    console.error("Register Error:", error);
    next(error);
  }
};

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