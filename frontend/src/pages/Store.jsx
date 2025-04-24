import React from 'react'
import { motion } from 'framer-motion'

const Store = () => {
    return (
        <div className='mx-auto max-w-5xl pt-8'>
            <motion.h1
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className='font-bold text-black text-[32px]'
            >
                All our products
            </motion.h1>
        </div>
    )
}

export default Store