import express from "express"
import { createdOrder, verifyPayments } from "../controllers/paymentController.js";

const paymentRoute=express.Router();

paymentRoute.post("/order",createdOrder);

paymentRoute.post("/verify",verifyPayments)

export default paymentRoute