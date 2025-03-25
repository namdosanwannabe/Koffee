import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './src/config/db.js';
import productRoutes from './src/routes/product.js';
import Product from './src/models/Product.js';

const app = express();

//Middleware
app.use(express.json());
app.use(cors({
    origin: [process.env.PORT, `http://localhost:5173`,],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan("dev"));

//Connect to MongoDB
connectDB();

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})