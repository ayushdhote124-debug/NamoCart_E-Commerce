import express from "express"

import { registeruser,loginUser,getUsers } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import admin from "../middlewares/adminMiddleware.js";

const Route = express.Router();

Route.post("/register",registeruser);

Route.post("/login",loginUser);

Route.get("/users", protect,admin ,getUsers);


export default Route  