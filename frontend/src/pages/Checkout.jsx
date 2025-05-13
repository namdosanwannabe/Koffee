import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { CircleCheckBig, ShoppingCart } from 'lucide-react'
import Logo from '../assets/logo/koffee-logo.png'
import Button from '../components/Button'

const Checkout = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const totalPrice = location.state?.totalPrice;
        const totalQuantity = location.state?.totalQuantity;

        if (!totalPrice && !totalQuantity) {
            navigate('/');
            return;
        }

        setTotalPrice(totalPrice);
        setTotalQuantity(totalQuantity);

    }, [location, navigate]);

    return (
        <div className='mx-auto max-w-2xl pt-8 xs:pt-16 pb-16'>
            <div className='mx-8 flex flex-col items-center justify-center gap-7'>
                <div className='w-full flex flex-col items-center justify-center gap-4 px-8 py-8 bg-primary rounded-2xl text-white'>
                    <CircleCheckBig size={48} />
                    <h1 className='text-xl xs:text-3xl font-bold text-center'>Order successfully registered!</h1>
                    <p className='text-sm text-center'>The order confirmation has been sent to your email address.</p>
                </div>
                <div className='w-full border border-gray rounded-md'>
                    <table className="w-full overflow-hidden text-black">
                        <tbody>
                            <tr className="border-b border-gray last-of-type:border-b-0">
                                <td className="px-4 py-4 border-r border-gray last-of-type:border-r-0 text-center">
                                    <p className='font-bold text-lg text-black'>{`₱${totalPrice}.00`}</p>
                                    <p className='text-gray-light text-sm'>Total Amount</p>
                                </td>
                                <td className="px-4 py-4 border-r border-gray last-of-type:border-r-0 text-center">
                                    <p className='font-bold text-lg text-black'>{`x${totalQuantity}`}</p>
                                    <p className='text-gray-light text-sm'>Product ordered</p>
                                </td>
                                <td className="px-4 py-4 border-r border-gray last-of-type:border-r-0 text-center">
                                    <p className='font-bold text-lg text-black'>Registered</p>
                                    <p className='text-gray-light text-sm'>Order state</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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