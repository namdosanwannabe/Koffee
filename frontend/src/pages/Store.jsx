import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { fetchProductByCategory } from '../services/productService';

import ProductContainer from '../components/ProductContainer'
import Tabs from '../components/Tabs'

const Store = () => {

    const [products, setProducts] = useState([]);
    const [tab, setTab] = useState('Hot Coffee');

    const TabContent = [
        {
            label: 'Hot Coffee',
            content: <ProductContainer products={products} />,
            onClick: () => setTab('Hot Coffee')
        },
        {
            label: 'Cold Coffee',
            content: <ProductContainer products={products} />,
            onClick: () => setTab('Cold Coffee')
        },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchProductByCategory(tab);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, [tab])

    return (
        <div className='mx-auto max-w-5xl pt-8 xs:pt-12'>
            <div className='mx-8'>
                <motion.h1
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='font-bold text-black text-2xl xs:text-[32px]'
                >
                    All our products
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                    viewport={{ once: true }}
                    className='mt-8 mb-16 xs:mt-12 xs:mb-24'
                >
                    <Tabs tabs={TabContent} />
                </motion.div>
            </div>
        </div>
    )
}

export default Store