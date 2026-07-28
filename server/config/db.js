import mongoose from "mongoose";
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import "dotenv/config"

const  connectDB = async ()=>{
    try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connection Succesfully.....!!!")

    }catch(error){
        console.error("Error from DB connection ",error)
        process.exit(1)
    }
}

export default connectDB