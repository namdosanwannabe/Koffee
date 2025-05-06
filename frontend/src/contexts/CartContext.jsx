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

    const findProductInCart = (product) => products?.find((p) => p._id === product._id);

    const addProduct = (product) => {
        setProducts((prev) => [...prev, product]);
    };

    const getProductQuantity = (product) => {
        return findProductInCart(product)?.quantity ?? 0;
    };

    const updatePrice = (product, value) => {
        const updatedProducts = products.map((p) =>
            p._id === product._id ? { ...p, quantity: value, total: value * p.price } : p
        );

        setProducts(updatedProducts);
    };

    const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

    return (
        <CartContext.Provider value={{ products, addProduct, updatePrice, totalPrice, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}