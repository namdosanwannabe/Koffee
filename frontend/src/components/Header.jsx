import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Logo from '../assets/logo/koffee-logo.png'
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
    const location = useLocation();
    const { products } = useCart();

    useEffect(() => {
        const hash = location.hash;

        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;

                setTimeout(() => {
                    window.scrollTo({
                        top: elementPosition - 80,
                        behavior: "smooth",
                    });
                }, 300);
            }
        }
    }, [location]);

    return (
        <header
            className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b border-gray-100'>
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='mx-auto max-w-7xl h-24'>
                <div className='h-full flex justify-between items-center mx-8'>
                    <a href='/' className='flex items-center gap-3'>
                        <img src={Logo} alt='Koffee Logo' className='w-12 h-12' />
                        <p className='text-black text-2xl font-bold '>Koffee</p>
                    </a>
                    <nav className='flex gap-8 items-center font-medium text-based text-black leading-relaxed'>
                        <a href='/#explore'>Explore</a>
                        <Link to='/store'>Store</Link>
                        <Link to='/about'>About Us</Link>
                        <Link
                            to='/cart'
                            className='py-3 px-5 flex items-center justify-center gap-3 rounded-full transition-all duration-300 ease hover:bg-gray-light/15'>
                            <ShoppingCart size={24} fill='#006241' className='text-primary' />
                            {
                                products?.length > 0 && (
                                    <span className='py-1 px-[6px] text-sm text-white bg-primary rounded-sm'>{products?.length}</span>
                                )
                            }
                        </Link>
                    </nav>
                </div>
            </motion.div>
        </header>
    )
}

export default Header