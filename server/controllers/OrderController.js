import orderModel from "../model/orderModel.js";
import sendEmail from "../utils/sendEmail.js"

export const createOrder = async (req,res)=>{

    try{
        const {items,totalAmount,address, paymentId}= req.body;

        if(!items || items.length === 0 || !totalAmount || !address){
            return  res.status(400).json({
                message: "Invalid order data"
            })

        }else{
            const order = new orderModel({
                user : req.user._id,
                items,
                totalAmount,
                address,
                paymentId
            });
            // console.log(order)
            await order.save();
            const message = `Dear ${req.user.name},\n\n Thank you for your order! Your order has been siccessfully created with the following details:\n\nOrder ID : ${order._id}\nTotal Amount : ${totalAmount}\nShipping Address : ${address} \n\nWe will notify you once your order is shipped.\n\nBest regards,\nNamoCart Team`;

            try {
                await sendEmail(req.user.email, 'order created', message);
            } catch (emailErr) {
                console.error("Failed to send order confirmation email:", emailErr);
            }
            
            res.status(201).json({
                success: true,
                message: "order  created Successfully"
            })
        }
    }catch (error) {
        console.error("Create Order Error:", error);
    
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
            stack: error.stack
        });
    }
} 

export const getMyOrder = async (req,res)=>{
    try{
        const orders = await orderModel.find({user: req.user._id}).populate('items.productId','name price');
        res.json(orders);      

    }catch(error){

        res.status(500).json({
            message:"Server error"
        })

    }

} 

// export const getMyOrder = async (req, res) => {
//     try {

//         const orders = await orderModel.find({
//             user: req.user._id
//         });
//         return res.json(orders);

//     } catch (error) {
//         console.log(error);

//         return res.status(500).json({
//             message: "Server Error"
//         });
//     }
// };

export const getOrders = async (req,res)=>{
    try{
        const orders = await orderModel.find({}).populate('user','id name')
        res.json(orders)

    }catch(error){

        res.status(500).json({
            message:"Server error"
        })
    }

} 


export const updateOrderStatus = async (req,res)=>{
    try{
        const {status}= req.body;
        const orders = await orderModel.findById(req.params.id);
        if(orders){
            orders.status = status;
            await orders.save();
            res.json({message: "order status updated", orders})
        }else{
            res.status(404).json({
                message: 'Order note found'
            })
        }
    }catch(error){

        res.status(500).json({
            message:"Server error"
        })
    }
    


} 