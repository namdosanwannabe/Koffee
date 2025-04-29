import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const ProductContainer = ({ products, count = 0 }) => {

    const navigate = useNavigate();

    if (!products || products.length === 0) {
        return <p>No products found.</p>;
    }

    const limitedProducts = count > 0 ? products.slice(0, count) : products;

    const handleViewProduct = (id) => {
        navigate("/product", { state: { product_id: id } });
    }

    return (
        <motion.div
            className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6'
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}>
            {
                limitedProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product?.name}
                        image={product?.image_url}
                        price={product?.price}
                        onClick={() => handleViewProduct(product?._id)} />
                ))
            }
        </motion.div>
    )
}

export default ProductContainer
