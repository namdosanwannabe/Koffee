import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import Button from '../components/Button';
import CartItem from '../components/CartItem';

const Cart = () => {

    const { products, totalPrice, totalQuantity } = useCart();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleCheckout = () => {

        setLoading(true);
        const cartData = { totalPrice, totalQuantity };

        setTimeout(() => {
            setLoading(false);
            navigate('/checkout', { state: cartData });
        }, 2500);
    }

    return (
        <div className='mx-auto max-w-4xl pt-8 xs:pt-12'>
            <div className='mx-8 flex flex-col gap-6 pb-24'>
                <motion.h1
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className='font-bold text-black text-2xl xs:text-[32px]'
                >
                    Your Cart
                </motion.h1>

                {/* Product Items */}
                {
                    products?.length > 0
                        ? (
                            <div className='flex flex-col gap-6'>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 1, ease: 'easeOut', }}
                                >
                                    {products.map((product, index) => (
                                        <CartItem key={product?._id + index} product={product} />
                                    ))}
                                </motion.div>

                                <hr className='my-3' />

                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 1, ease: 'easeOut', }} className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <p className='font-normal text-sm text-black'>Total:</p>
                                        <p className='font-bold text-2xl text-black leading-relaxed'>
                                            {`₱${totalPrice}.00`}
                                        </p>
                                    </div>
                                    <Button className='min-w-44 flex items-center justify-center gap-3 font-bold' variant='filled' type='squared' onClick={() => handleCheckout()}>
                                        {loading ? (
                                            <div className="w-6 h-6 border-[3px] border-t-transparent border-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                Checkout
                                                <ShoppingBag />
                                            </>
                                        )}
                                    </Button>
                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: 'easeOut', }}
                                viewport={{ once: true }}
                                className='flex flex-col justify-center items-center gap-8 py-12 border-dashed border-2 rounded-md'
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