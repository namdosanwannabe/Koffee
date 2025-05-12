import React, { useEffect } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { CircleCheckBig, ShoppingCart } from 'lucide-react'
import Logo from '../assets/logo/koffee-logo.png'
import Button from '../components/Button'

const Checkout = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const id = location.state?.amount ?? "";

        //add loading
        if (!id) navigate('/');

    }, [location.state?.amount, navigate]);

    return (
        <div className='mx-auto max-w-2xl pt-8 xs:pt-16 pb-16'>
            <div className='mx-8 flex flex-col items-center justify-center gap-7'>
                <div className='w-full flex flex-col items-center justify-center gap-4 px-8 py-8 bg-primary rounded-2xl text-white'>
                    <CircleCheckBig size={48} />
                    <h1 className='text-xl xs:text-3xl font-bold text-center'>Order successfully registered!</h1>
                    <p className='text-sm text-center'>The order confirmation has been sent to your email address.</p>
                </div>
                <div className='w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-3 p-4 rounded-lg bg-gray-lighter'>
                    <p className='text-sm text-center font-medium text-black'>
                        Sit back and relax while we prepare your fresh coffee selection.
                    </p>
                    <img src={Logo} alt='Koffee Logo' className='w-6 h-6' />
                </div>
                <Button className='w-full max-w-56 flex items-center justify-center gap-3 font-medium' type='squared' variant='outlined' onClick={() => navigate('/store')}>
                    Back to the store
                    <ShoppingCart size={24} />
                </Button>
            </div>
        </div>
    )
}

export default Checkout