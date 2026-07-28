
import express from "express"
import { protect } from "../middlewares/authMiddleware.js";
import admin from "../middlewares/adminMiddleware.js";
import multer from "multer";
// import productUpload from "../controllers/productController.js";
import { getProducts,createProduct,productUpload,getProductById,deleteProduct} from "../controllers/productController.js";
const upload = multer({dest:"uploads/"})
const productRoute = express.Router();

productRoute.route("/").get(getProducts).post(protect,admin,upload.single('imageUrl'), createProduct);

productRoute.route("/:id").get(getProductById).put( protect, admin, upload.single('imageUrl'), productUpload).delete(protect,admin, deleteProduct);




export default productRoute  