import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Tabs from '../components/Tabs'
import ProductContainer from '../components/ProductContainer'
import { fetchProductByCategory } from '../services/productService'

import HeroMain from '../assets/hero/hero-section-image.png'
import FloatingLeft from '../assets/hero/floating-left-element.png'
import FloatingRight from '../assets/hero/floating-right-element.png'
import { ChevronRight } from 'lucide-react';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [tab, setTab] = useState('Hot Coffee');

    const TabContent = [
        {
            label: 'Hot Coffee',
            content: <ProductContainer products={products} count={3} />,
            onClick: () => setTab('Hot Coffee')
        },
        {
            label: 'Cold Coffee',
            content: <ProductContainer products={products} count={3} />,
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
                    transition={{ duration: 1, ease: 'easeOut' }}
                    src={FloatingLeft}
                    className='absolute left-0 top-3 w-48 md:w-64'
                />
                <div className='mx-auto max-w-6xl py-16 pb-12 px-4 flex flex-col-reverse md:flex-row gap-4 md:gap-8'>
                    <div className='flex-1 flex flex-col justify-center text-center md:text-left'>
                        <motion.h1
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className='font-extrabold text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
                        >
                            Sip Happens, Make It Coffee
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className='text-base sm:text-lg font-medium mt-4'
                        >
                            Whatever life throws at you, tackle it with a fresh, hot cup of the good stuff.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            className='flex sm:flex-row gap-4 sm:gap-8 mt-8 justify-center md:justify-start'
                        >
                            <Link to='/store'>
                                <Button className='h-full flex items-center justify-center gap-3'>
                                    Shop Beans & Brews
                                    <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 12.8334L5.83061 7.78099C6.2158 7.3316 6.2158 6.66848 5.83061 6.21909L1.5 1.16671" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Button>
                            </Link>

                            <Link to='/about'>
                                <Button variant='outlined'>Learn More</Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className='flex-1 flex justify-center'>
                        <motion.img
                            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                            src={HeroMain}
                            className='max-w-xs sm:max-w-md md:max-w-lg w-full'
                        />
                    </div>
                </div>
            </section>

            <section id='explore' className='bg-white relative overflow-hidden pb-9'>
                <motion.img
                    initial={{ opacity: 0, x: 180, filter: 'blur(15px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true }}
                    src={FloatingRight}
                    className='absolute right-0 top-12 hidden xs:block w-32 sm:w-48 md:w-64'
                />
                <div className='mx-auto max-w-6xl py-8 md:py-12 lg:py-16 px-4 text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-3xl sm:text-4xl md:text-5xl text-black font-bold'
                    >
                        Discover Your Perfect Brew
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
                        viewport={{ once: true }}
                        className='mt-8'
                    >
                        <Tabs tabs={TabContent} />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                        className=' mt-8 text-lg font-medium text-primary-dark hover:text-primary duration-300 ease-out transition-all'>
                        <Link to='/store' className='flex items-center justify-center'>
                            See More
                            <ChevronRight />
                        </Link>
                    </motion.p>
                </div>
            </section>
        </>
    )
}

export default Home