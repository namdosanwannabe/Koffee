import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a StoreProvider");
    }

    return context;
}

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);

    const addProduct = (newItem) => {
        setProducts((prev) => [...prev, newItem]);
    };

    return (
        <CartContext.Provider value={{ products, addProduct }}>
            {children}
        </CartContext.Provider>
    )
}