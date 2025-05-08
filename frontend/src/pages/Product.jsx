import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchProductById } from '../services/productService'

import { ChevronLeft, ChevronDown, ShoppingBasket, CircleCheck } from 'lucide-react';

import CounterInput from '../components/CounterInput';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';

const Product = () => {

    const { addProduct } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const [product, setProduct] = useState(null);

    const [size, setSize] = useState("Grande");
    const [quantity, setQuantity] = useState(1);

    const fetchProductDetails = async (id) => {
        try {
            const data = await fetchProductById(id);
            setProduct(data);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching product details:", error);
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    };

    const handleAddToCart = () => {

        const calculatedPrice = size === "Grande" ? (product?.price * 1.2) : (product?.price ?? 0);

        const newProduct = {
            ...product,
            size,
            quantity,
            price: calculatedPrice,
            total: calculatedPrice * quantity
        };
        addProduct(newProduct);
        setIsAddingToCart(true);

        const timer = setTimeout(() => {
            setIsAddingToCart(false);
        }, 1000);

        return () => clearTimeout(timer);
    }

    useEffect(() => {
        const id = location.state?.product_id ?? "";
        if (id) {
            setLoading(true);
            fetchProductDetails(id);
        }
    }, [location.state?.product_id]);

    return (
        <div className='mx-auto max-w-4xl pt-8 xs:pt-12'>
            <div className='mx-8 pb-24'>
                <button
                    className='flex items-center text-black font-medium text-base'
                    type='button'
                    onClick={() => navigate(-1) || navigate('/products')}>
                    <ChevronLeft />
                    Go Back
                </button>

                {loading ? (
                    <>
                        <div className="flex animate-pulse gap-6 mt-6">
                            <div className='flex-1'>
                                <div className="h-80 bg-gray-200 rounded w-full mb-4" />
                            </div>
                            <div className='flex-1'>
                                <div className="h-8 bg-gray-200 rounded w-3/4 mb-2" />
                                <div className="h-8 bg-gray-200 rounded w-1/2 mb-2" />
                                <div className="h-6 bg-gray-200 rounded w-full mb-2" />
                                <div className="h-6 bg-gray-200 rounded w-full" />

                                <div className="h-6 bg-gray-200 rounded w-1/4 mt-8 mb-2" />
                                <div className="h-6 bg-gray-200 rounded w-1/4 mb-2" />
                                <div className="h-8 bg-gray-200 rounded w-full" />
                            </div>
                        </div>
                        <div className="flex flex-col animate-pulse gap-4 mt-8">
                            <div className="h-8 bg-gray-200 rounded w-full" />
                            <div className="h-8 bg-gray-200 rounded w-full" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex gap-6 mt-6'>
                            <div className='flex-1'>
                                <img src={product?.image_url} alt={product?.name || "Product image"} />
                            </div>
                            <div className='flex-1 flex flex-col'>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-3xl font-bold text-primary-dark'>{product?.name}</p>
                                    <p className='text-5xl font-bold leading-none text-black'>₱{product?.price}.00</p>
                                    <p className='text-sm leading-normal text-gray-light'>{product?.description}</p>
                                </div>

                                <hr className='mt-6' />

                                <div className='flex flex-col gap-4'>
                                    {/* Size */}
                                    <div className='flex flex-col gap-2 mt-6'>
                                        <p className='text-black text-base font-normal'>Size:</p>
                                        <div className="relative w-28">
                                            <select
                                                className="w-full border border-gray-300 py-2 px-3 rounded-md appearance-none bg-white text-gray-light outline-primary"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                            >
                                                {["Grande", "Tall"].map((s, i) => (
                                                    <option key={i}>{s}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                                                <ChevronDown size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantity */}
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-black text-base font-normal'>Quantity:</p>
                                        <CounterInput value={quantity} onChange={setQuantity} />
                                    </div>
                                </div>

                                <Button
                                    className='w-full font-bold flex items-center justify-center gap-4 mt-8'
                                    type='squared'
                                    onClick={() => handleAddToCart()} >
                                    {
                                        <AnimatePresence mode="wait">
                                            {isAddingToCart ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <CircleCheck />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    className='flex items-center justify-center gap-3'
                                                    key="add-to-cart"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <>
                                                        Add to cart
                                                        <ShoppingBasket />
                                                    </>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    }
                                </Button>
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className='flex flex-col gap-6'>
                            <p className='font-bold mt-24 text-black text-2xl xs:text-[32px]'>
                                Ingredients
                            </p>
                            <div className='border border-gray rounded-md'>
                                <table className="w-full overflow-hidden text-black">
                                    <tbody>
                                        {product?.ingredients.length > 0 ? (
                                            product.ingredients.map((ingredient, index) => (
                                                <tr key={index} className="border-b border-gray last-of-type:border-b-0">
                                                    <td className="px-4 py-2 border-r border-gray font-bold w-32">
                                                        Step {index + 1}
                                                    </td>
                                                    <td className="px-4 py-2">{ingredient}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="2" className="px-4 py-2 text-center text-gray-500 italic">
                                                    No Ingredients
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Product