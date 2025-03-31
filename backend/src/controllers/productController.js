import Product from '../models/Product.js';
import mongoose from 'mongoose';

export const getAllProducts = async (req, res) => {
    try {
        const results = await Product.find({});

        if (results.length === 0) {
            console.warn('No products found. Check if data exists in the database.');

            return res.status(404).json({
                message: 'Products not found',
                error: `Products not found.`
            });
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
            console.error(`Product with ID ${id} not found.`);
            return res.status(404).json({
                message: 'Product not found',
                error: `Product with ${id} not found.`
            });
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

export const getProductByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const results = await Product.find({
            category: { $regex: new RegExp('^' + category + '$', 'i') }
        });

        if (results.length === 0) {
            console.error('No products found. Check if data exists in the database.');

            return res.status(404).json({
                message: 'No products found',
                error: `No products found in category: ${category}`
            });
        }

        res.json(results);
    } catch (error) {
        console.error("Comprehensive Database Error", {
            message: error.message,
            name: error.name,
            stack: error.stack
        });
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        })
    }
}