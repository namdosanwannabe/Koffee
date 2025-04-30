import React, { useState, useEffect } from 'react'

const CounterInput = ({ value = 1, onChange }) => {

    const handleDecrease = () => {
        const newValue = value > 1 ? value - 1 : 1;
        onChange?.(newValue);
    };

    const handleIncrease = () => {
        const newValue = value + 1;
        onChange?.(newValue);
    };

    return (
        <div className='flex gap-2'>
            <button onClick={handleDecrease}>-</button>
            <div>{value}</div>
            <button onClick={handleIncrease}>+</button>
        </div>
    )
}

export default CounterInput
