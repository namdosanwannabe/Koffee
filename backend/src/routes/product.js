import express from 'express';
import { getAllProducts, getProductById, getProductByCategory } from '../controllers/productController.js';

const router = express.Router();

router.get('/get-all', getAllProducts);
router.get('/category/:category', getProductByCategory);
router.get('/:id', getProductById);


export default router;