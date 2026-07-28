import express from "express"
import"dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js"
import Route from "./routes/authRoute.js"
import productRoute from "./routes/productRoute.js"
import orderRoute from "./routes/orderRoute.js"
import paymentRoute from "./routes/paymentRoute.js"
import analyticsRoute from "./routes/analyticsRoute.js"

const PORT = process.env.PORT  || 3001

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome to Express Server')
})
app.use("/api/auth",Route)

app.use("/api/products",productRoute)

app.use("/api/orders",orderRoute)

app.use("/api/payment",paymentRoute)

app.use("/api/analytics",analyticsRoute)

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: err.message || "Internal Server Error"
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})