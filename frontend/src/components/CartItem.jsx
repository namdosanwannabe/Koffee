import React from 'react'
import { X } from 'lucide-react';
import CounterInput from './CounterInput'
import { useCart } from '../contexts/CartContext';

const CartItem = ({ product }) => {

    const { updatePrice, getProductQuantity } = useCart();

    return (
        <div className='p-3 flex justify-between items-center bg-white hover:bg-gray-100 transition-all duration-300 ease-out rounded select-none'>
            <div className='flex gap-4 items-center'>
                <img src={product?.image_url} alt={`${product?.name}'s Image`} className='w-20 h-20' />
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-black leading-relaxed'>{product?.name}</p>
                    <p className='font-normal text-sm text-gray-light'>{product?.size}</p>
                </div>
            </div>
            <div className='flex gap-10 items-center'>
                <p className='font-normal text-black leading-relaxed'>{`₱${product?.price}.00`}</p>
                <CounterInput value={getProductQuantity(product)} onChange={(value) => updatePrice(product, value)} />
                <p className='font-bold text-lg text-black leading-relaxed'>{`₱${product?.total}.00`}</p>
                <X size={24} className='text-gray-light cursor-pointer mr-3' />
            </div>
        </div>
    )
}

export default CartItem