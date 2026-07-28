
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,

    },
    description : {
        type : String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    category:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        require:true,
    },
    imageUrl:{
        type:String,
        require:true,

    },
    rating:{
        type: Number,
        default: 0,

    },
    numReviews:{
        type: Number,
        default: 0,
    }
},{timestamps:true})

const productModel = mongoose.model("Product", productSchema) 

export default productModel