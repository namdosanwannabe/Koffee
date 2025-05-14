import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext();

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a StoreProvider");
    }

    return context;
}

export function CartProvider({ children }) {
    const [products, setProducts] = useLocalStorage([], 'items');

    const findProductInCart = (product) => {
        return products.find((p) => p._id === product._id && p.size === product.size);
    };

    const getProductQuantity = (product) => {
        return findProductInCart(product)?.quantity ?? 0;
    };

    const addNewProduct = (product) => {
        return [...products, product];
    };

    const updateProductQuantity = (product, existingProduct) => {
        return products.map((p) => {
            if (p._id === existingProduct._id && p.size === existingProduct.size) {
                const newQuantity = p.quantity + product.quantity;
                return {
                    ...p,
                    quantity: newQuantity,
                    total: newQuantity * p.price,
                };
            }
            return p;
        });
    };

    const updatePrice = (product, value) => {
        const updatedProducts = products.map((p) =>
            p._id === product._id && p.size === product.size
                ? { ...p, quantity: value, total: value * p.price }
                : p
        );
        setProducts(updatedProducts);
    };

    const addProduct = (product) => {
        const existingProduct = findProductInCart(product);

        const updatedProducts = existingProduct
            ? updateProductQuantity(product, existingProduct)
            : addNewProduct(product);

        setProducts(updatedProducts);
    };

    const removeProduct = (product) => {
        const updatedProducts = products
            .filter((p) => !(p._id === product._id && p.size === product.size));

        setProducts(updatedProducts);
    }

    const clearCart = () => {
        setProducts([]);
    }

    const totalPrice = products.reduce((acc, product) => acc + product.total, 0);
    const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <CartContext.Provider value={{ products, addProduct, updatePrice, removeProduct, totalPrice, totalQuantity, getProductQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}