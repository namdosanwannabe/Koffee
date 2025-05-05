import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Instagram } from 'lucide-react';
import Image from '../assets/about/about-element.png'

const About = () => {
    return (
        <>
            <div className='mx-auto max-w-2xl pt-8 xs:pt-12'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
                        visible: {
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            transition: {
                                staggerChildren: 0.3,
                                ease: "easeOut",
                                duration: 1,
                            },
                        },
                    }}
                    className='flex flex-col gap-4 xs:gap-6 mx-8'
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } },
                        }}
                        className='font-bold text-black text-2xl xs:text-[32px]'
                    >
                        About
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } },
                        }}
                        className='text-sm xs:text-base font-medium'
                    >
                        While this may look like a real coffee shop, it’s actually a project built to explore the MERN Stack, Tailwind, and Framer Motion, focusing on page routing, state management, and modern web development.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                            visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } },
                        }}
                        className='flex gap-6'
                    >
                        <a
                            href='https://www.linkedin.com/in/archiecayabyabconnects/'
                            className='flex items-center gap-[6px] text-sm/relaxed font-normal text-black hover:text-primary-light duration-300 ease-out transition-all'
                            target='_blank'
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a
                            href='https://github.com/namdosanwannabe'
                            className='flex items-center gap-[6px] text-sm/relaxed font-normal text-black hover:text-primary-light duration-300 ease-out transition-all'
                            target='_blank'
                        >
                            <Github size={20} />
                            GitHub
                        </a>
                        <a
                            href='https://www.instagram.com/achikochi_/'
                            className='flex items-center gap-[6px] text-sm/relaxed font-normal text-black hover:text-primary-light duration-300 ease-out transition-all'
                            target='_blank'
                        >
                            <Instagram size={20} />
                            Instagram
                        </a>
                    </motion.div>
                </motion.div>
            </div>
            <motion.img
                src={Image}
                alt='Coffee Beans'
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            />
        </>
    )
}

export default About