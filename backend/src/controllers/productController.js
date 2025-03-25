import Product from '../models/Product.js';
import mongoose from 'mongoose';

export const getAllProducts = async (req, res) => {
    try {
        const results = await Product.find({});

        if (results.length === 0) {
            console.warn('No products found. Check if data exists in the database.');
        }

        res.json(results);

    } catch (error) {
        console.error("Comprehensive Database Error:", {
            message: error.message,
            name: error.name,
            stack: error.stack
        });
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await Product.findById(id);

        if (!results) {
            console.warn(`Product with ID ${id} not found.`);
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(results);
    } catch (error) {
        console.error("Comprehensive Database Error:", {
            message: error.message,
            name: error.name,
            stack: error.stack
        });
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}