import mongoose from 'mongoose';
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import connectDB from './config/db.js';
import { userModel } from './model/user.js';
import productModel from './model/productModel.js';

const seedData = async () => {
    try {
        await connectDB();
        
        console.log("Clearing existing data...");
        await userModel.deleteMany();
        await productModel.deleteMany();

        console.log("Generating Users...");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("password123", salt);

        const users = [];

        // 2 Admins
        for (let i = 1; i <= 2; i++) {
            users.push({
                name: `Admin ${i}`,
                email: `admin${i}@example.com`,
                password: hashedPassword,
                role: "admin",
                verified: true
            });
        }

        // 5 Users
        for (let i = 1; i <= 5; i++) {
            users.push({
                name: `User ${i}`,
                email: `user${i}@example.com`,
                password: hashedPassword,
                role: "user",
                verified: true
            });
        }

        await userModel.insertMany(users);
        console.log("Users generated successfully!");

        console.log("Generating Products...");
        const products = [];
        const categories = ["Electronics", "Clothing", "Books", "Home & Kitchen", "Sports"];
        
        for (let i = 1; i <= 50; i++) {
            const category = categories[i % categories.length];
            products.push({
                name: `Product ${i} - ${category}`,
                description: `This is a great description for Product ${i}. It is a highly rated product in the ${category} category.`,
                price: Math.floor(Math.random() * 900) + 100, // Price between 100 and 1000
                category: category,
                stock: Math.floor(Math.random() * 100) + 10, // Stock between 10 and 110
                imageUrl: `https://picsum.photos/seed/${i}/400/400`, // Random dummy image
                rating: (Math.random() * 2 + 3).toFixed(1), // Rating between 3.0 and 5.0
                numReviews: Math.floor(Math.random() * 100)
            });
        }

        await productModel.insertMany(products);
        console.log("50 Products generated successfully!");

        console.log("Data seeding completed!");
        process.exit();
    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedData();
