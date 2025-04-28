import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const ProductCard = ({ title, price, image, onClick }) => {
    const imageControls = useAnimation();

    const imageVariants = {
        hidden: { opacity: 0, y: -30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };
    return (
        <motion.div
            className='w-full bg-light text-black hover:bg-primary hover:text-white transition-all ease-out duration-300 cursor-pointer flex flex-col gap-4 justify-center py-12'
            onClick={onClick}
            variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
            }}
            onAnimationComplete={() => {
                imageControls.start("visible");
            }}
            onMouseEnter={() => imageControls.start({ y: -20 })}
            onMouseLeave={() => imageControls.start("visible")}>

            <motion.img
                src={image}
                alt={`${title}'s Image`}
                initial="hidden"
                variants={imageVariants}
                animate={imageControls}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
            />

            <div className='flex flex-col gap-2 text-center'>
                <p className='uppercase text-sm font-medium leading-normal'>{title}</p>
                <p className='text-[32px] font-bold leading-normal'>₱{price}.00</p>
            </div>
        </motion.div>
    )
}


export default ProductCard