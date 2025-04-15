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
                <img src={FloatingLeft} className='absolute left-0 top-3' />
                <div className='mx-auto max-w-6xl py-16 flex'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <h1 className='font-extrabold text-black text-7xl leading-tight'>Sip Happens, Make It Coffee</h1>
                        <p className='text-lg font-medium mt-4'>Whatever life throws at you, tackle it with a fresh, hot cup of the good stuff.</p>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <img src={HeroMain} className='max-w-lg w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home