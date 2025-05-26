import React, { useState, useEffect } from 'react'
import { Minus, Plus } from 'lucide-react';

const CounterInput = ({ value = 1, onChange, className }) => {

    const handleDecrease = () => {
        const newValue = value > 1 ? value - 1 : 1;
        onChange?.(newValue);
    };

    const handleIncrease = () => {
        const newValue = value + 1;
        onChange?.(newValue);
    };

    return (
        <div className={`w-28 flex justify-between gap-2 border border-gray-300 py-2 px-3 rounded-md bg-white outline-primary ${className}`}>
            <button className={`flex justify-center items-center flex-1 ${value === 1 && 'cursor-not-allowed'}`} onClick={handleDecrease}>
                <Minus size={18} className='text-black' />
            </button>
            <input className='w-full text-center text-gray-light outline-none' type="text" value={value} onChange={(e) => e.target.value = value} readOnly />
            <button className='flex justify-center items-center flex-1' onClick={handleIncrease}>
                <Plus size={18} className='text-black' />
            </button>
        </div>
    )
}

export default CounterInput
