import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import Button from '../components/Button';

const Cart = () => {

    const { products } = useCart();

    return (
        <div className='mx-auto max-w-4xl pt-8 xs:pt-12'>
            <div className='mx-8 pb-24'>
                <motion.h1
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='font-bold text-black text-2xl xs:text-[32px]'
                >
                    Your Cart
                </motion.h1>
                {
                    products?.length > 0
                        ? (
                            <motion.div
                                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                                viewport={{ once: true }}
                                className='mt-8 mb-16 xs:mt-12 xs:mb-24'
                            >
                                {products.map((product) => (
                                    <div>{product?.name}</div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                                viewport={{ once: true }}
                                className='mt-4 mb-16 xs:mt-6 xs:mb-24 flex flex-col justify-center items-center gap-8 py-12 border-dashed border-2 rounded-md'
                            >
                                <div className='text-gray-light flex flex-col gap-2 items-center'>
                                    <ShoppingCart size={75} />
                                    <p className='text-xl font-bold'>Your cart is empty</p>
                                </div>
                                <Link to='/store'>
                                    <Button type='squared'>Go to the store</Button>
                                </Link>
                            </motion.div>
                        )

                }
            </div>
        </div >
    )
}

export default Cart