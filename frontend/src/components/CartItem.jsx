import React from 'react'
import { X } from 'lucide-react';
import CounterInput from './CounterInput'
import { useCart } from '../contexts/CartContext';

const CartItem = ({ product }) => {

    const { updatePrice, getProductQuantity, removeProduct } = useCart();

    return (
        <div className='relative p-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 bg-white hover:bg-gray-100 transition-all duration-300 ease-out rounded select-none'>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <img src={product?.image_url} alt={`${product?.name}'s Image`} className='w-52 h-52 sm:w-20 sm:h-20' />
                <div className='flex flex-col items-center sm:items-start justify-center gap-1'>
                    <p className='font-normal block sm:hidden text-black leading-relaxed'>{`₱${product?.price}.00`}</p>
                    <p className='font-bold text-black leading-relaxed'>{product?.name}</p>
                    <p className='font-normal text-sm text-gray-light'>{product?.size}</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 items-center'>
                <p className='font-normal hidden sm:block text-black leading-relaxed'>{`₱${product?.price}.00`}</p>
                <CounterInput className='-order-1' value={getProductQuantity(product)} onChange={(value) => updatePrice(product, value)} />
                <p className='font-bold text-lg text-black leading-relaxed'>{`₱${product?.total}.00`}</p>
                <button className='absolute top-3 right-3 sm:static' type='button' onClick={() => removeProduct(product)}>
                    <X size={24} className='text-gray-light cursor-pointer sm:mr-3' />
                </button>
            </div>
        </div>
    )
}

export default CartItem