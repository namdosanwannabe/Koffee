import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../assets/logo/koffee-logo.png'
import { Github, Instagram } from 'lucide-react';

function Footer() {
    return (
        <>
            <footer
                className='py-12 sm:py-16 w-full flex bg-primary-dark text-white' >
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='sm:mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-32 px-6'>

                    {/* Left */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <img src={Logo} alt='Koffee Logo' className='w-12 h-12' />
                            <p className='text-2xl font-bold'>Koffee</p>
                        </div>
                        <p className='font-normal text-base'>
                            Good Vibes & Great Coffee, Always!
                        </p>
                        <div className='flex gap-3'>
                            <a href='https://github.com/namdosanwannabe' target='_blank'>
                                <Github />
                            </a>
                            <a href='https://www.instagram.com/achikochi_/' target='_blank'>
                                <Instagram />
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='flex flex-col sm:flex-row gap-10 md:gap-20'>
                        <div className='flex flex-col gap-5'>
                            <p className='font-semibold text-lg'>About</p>
                            <div className='flex flex-col gap-3 font-light text-base'>
                                <a href='#'>Menu</a>
                                <a href='#'>Features</a>
                                <a href='#'>News & Blog</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='font-semibold text-lg'>Company</p>
                            <div className='flex flex-col gap-3 font-light text-base'>
                                <a href='#'>How we work</a>
                                <a href='#'>Terms of service</a>
                                <a href='#'>Pricing</a>
                                <a href='#'>FAQ</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='font-semibold text-lg'>Address</p>
                            <div className='flex flex-col gap-3 font-light text-base'>
                                <a href='#'>Bataan, Philippines</a>
                                <a href='#'>+123 456 789</a>
                                <a href='#'>koffee@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </footer>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='w-full flex bg-light py-3'
            >
                <p className='mx-auto text-black font-medium text-sm'>
                    Developed by <span className='font-bold text-primary'>@achikochi_</span>
                </p>
            </motion.div>
        </>
    )
}

export default Footer