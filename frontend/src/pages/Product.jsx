import React, { useEffect, useState } from 'react'
import { replace, useLocation, useNavigate } from 'react-router-dom'
import { fetchProductById } from '../services/productService';

import { ChevronLeft } from 'lucide-react';

const Product = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProductDetails = async (id) => {
        try {
            const data = await fetchProductById(id);
            setProduct(data);
            setProductId(id);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching product details:", error);
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

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
                    <div className="animate-pulse mt-6">
                        <div className="h-64 bg-gray-200 rounded w-full mb-4" />
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                        <div className="h-6 bg-gray-200 rounded w-1/2 mb-2" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                ) : (
                    <div className='flex gap-6 mt-6'>
                        <div className='flex-1'>
                            <img src={product?.image_url} />
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-[32px] font-bold text-primary-dark'>{product?.name}</p>
                                <p className='text-5xl font-bold leading-none text-black'>₱{product?.price}.00</p>
                                <p className='text-sm leading-normal text-gray-light'>{product?.description}</p>
                            </div>
                            <hr className='mt-6' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product