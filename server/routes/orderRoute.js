import express from "express"
import { protect } from "../middlewares/authMiddleware.js";
import admin from "../middlewares/adminMiddleware.js";
import multer from "multer";
// import productUpload from "../controllers/productController.js";
import { createOrder,getOrders,getMyOrder,updateOrderStatus} from "../controllers/OrderController.js";
const upload = multer({dest:"uploads/"})
const orderRoute = express.Router();

orderRoute.route("/").post(protect, createOrder).get(protect,admin,getOrders);

orderRoute.route("/myorders").get(protect,getMyOrder)

orderRoute.route("/:id/status").put( protect, admin,updateOrderStatus)




export default orderRoute  