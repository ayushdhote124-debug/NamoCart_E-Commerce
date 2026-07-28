import productModel from "../model/productModel.js"
import cloudinary from "../config/cloudinary.js"

export const getProducts = async (req,res)=>{
    try{
        const products = await productModel.find({});
        res.json(products);
    }catch(error){
        res.status(500).json({
            message : "server Error"
        })
    }
};

export const createProduct = async (req,res)=>{
    try{
        const { name,description,price,category,stock} = req.body;
        let imageUrl ="";
        if(req.file){
            const result = await cloudinary.uploader.upload(req.file.path);
    
            imageUrl = result.secure_url;
        }
        const product= new productModel({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });
        const saveProduct = await product.save();
         res.status(201).json(saveProduct);
    }catch(error){

        res.status(500).json({
            message:"Server error"
        })

    }
}

export const getProductById =  async (req,res)=>{
    try{
        const product = await productModel.findById(req.params.id);
        if(product){
            res.json({product});
        }else{
            res.status(404).json({
                message:"Product not found"
            });
        }
    }catch(error){
        res.status(500).json({
            message:"Server error"
        })

    }
}

export const productUpload = async (req,res)=>{
    try{
        const {name,description,price,category,stock}= req.body;
        let imageUrl = '';
        const product =await productModel.findById(req.params.id);
        if(product){
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;
            if(req.file){
                const result = await cloudinary.uploader.upload(req.file.path);
                product.imageUrl = result.secure_url;
            }
            const updatedProduct =  await product.save();
            res.json(updatedProduct);
        }else{
            res.status(404).json({
                message: "Product not found"
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server error"
        })

    }
}

export const deleteProduct = async (req,res)=>{

    try{
        const product = await productModel.findById(req.params.id);
        if(product){
            await product.deleteOne();
            res.json({message: "Product Remove Successfully.."})
        }else{
            res.status(404).json({
                message:"product not found"
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server error"
        })

    }
}