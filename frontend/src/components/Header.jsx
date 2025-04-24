import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import Logo from '../assets/logo/koffee-logo.png'
import { ShoppingCart } from 'lucide-react';

const Header = () => {
    const location = useLocation();

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
            className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50'>
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
                    <nav className='flex gap-8 font-medium text-based text-black leading-relaxed'>
                        <a href='/#explore'>Explore</a>
                        <a href='store'>Store</a>
                        <a href='#'>About Us</a>
                        <button>
                            <ShoppingCart size={24} fill='#006241' className='text-primary' />
                        </button>
                    </nav>
                </div>
            </motion.div>
        </header>
    )
}

export default Header