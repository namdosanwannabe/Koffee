import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Tabs from '../components/Tabs'
import ProductCard from '../components/ProductCard'
import { fetchProductByCategory } from '../services/productService'

import HeroMain from '../assets/hero/hero-section-image.png'
import FloatingLeft from '../assets/hero/floating-left-element.png'
import FloatingRight from '../assets/hero/floating-right-element.png'

const Home = () => {

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
        const fetchData = async () => {
            try {
                const data = await fetchProductByCategory(tab);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, [tab]);

    return (
        <>
            <section className='bg-light relative'>
                <motion.img
                    initial={{ opacity: 0, x: -180, filter: 'blur(15px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut', }}
                    src={FloatingLeft} className='absolute left-0 top-3' />
                <div className='mx-auto max-w-6xl py-16 px-4 flex gap-20'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <motion.h1
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className='font-extrabold text-black text-7xl leading-tight'>Sip Happens, Make It Coffee</motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className='text-lg font-medium mt-2'>Whatever life throws at you, tackle it with a fresh, hot cup of the good stuff.</motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            className='flex gap-8 mt-8'>
                            <Button className='flex items-center gap-3'>
                                Shop Beans & Brews

                                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 12.8334L5.83061 7.78099C6.2158 7.3316 6.2158 6.66848 5.83061 6.21909L1.5 1.16671" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>

                            </Button>
                            <Button variant='outlined'>Learn More</Button>
                        </motion.div>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <motion.img
                            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                            src={HeroMain} className='max-w-lg w-full' />
                    </div>
                </div>
            </section>
            <section className='bg-white relative overflow-hidden pb-9'>
                <motion.img
                    initial={{ opacity: 0, x: 180, filter: 'blur(15px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true }}
                    src={FloatingRight}
                    className='absolute right-0 top-12' />
                <div className='mx-auto max-w-6xl py-16 px-4 text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-[40px] text-black font-bold'>
                        Discover Your Perfect Brew
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                        viewport={{ once: true }}
                        className='mt-8'>
                        <Tabs tabs={TabContent} />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Home

const ProductContainer = ({ products }) => {

    if (!products || products.length === 0) {
        return <p>No products found.</p>;
    }

    const limitedProducts = products.slice(0, 3);

    return (
        <motion.div
            className='grid grid-cols-2 md:grid-cols-3 gap-6'
            initial="hidden"
            whileInView="visible"
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
                        price={product?.price} />
                ))
            }
        </motion.div>
    )
}