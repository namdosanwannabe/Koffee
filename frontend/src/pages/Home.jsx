import { motion } from 'framer-motion'
import React from 'react'
import Button from '../components/Button'

import HeroMain from '../assets/hero/hero-section-image.png'
import FloatingLeft from '../assets/hero/floating-left-element.png'
import FloatingRight from '../assets/hero/floating-right-element.png'

const Home = () => {
    return (
        <>
            <div className='bg-light relative'>
                <motion.img
                    initial={{ opacity: 0, x: -150, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: 'easeOut', }}
                    src={FloatingLeft} className='absolute left-0 top-3' />
                <div className='mx-auto max-w-6xl py-16 flex gap-20'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <motion.h1
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className='font-extrabold text-black text-7xl leading-tight'>Sip Happens, Make It Coffee</motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className='text-lg font-medium mt-2'>Whatever life throws at you, tackle it with a fresh, hot cup of the good stuff.</motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            className='flex gap-8 mt-8'>
                            <Button className='flex items-center gap-3'>
                                Shop Beans & Brews

                                <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 12.8334L5.83061 7.78099C6.2158 7.3316 6.2158 6.66848 5.83061 6.21909L1.5 1.16671" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>

                            </Button>
                            <Button variant='outlined'>Learn More</Button>
                        </motion.div>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <motion.img
                            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                            src={HeroMain} className='max-w-lg w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home