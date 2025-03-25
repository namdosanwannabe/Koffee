import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.get('/get-all', getAllProducts);
router.get('/:id', getProductById);


export default router;