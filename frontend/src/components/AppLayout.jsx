import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AppLayout = ({ children }) => {

    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive((bool) => !bool);
    }

    useEffect(() => {
        const handleResize = () => {
            let width = document.body.getBoundingClientRect().width;

            if (width > 768) setActive(false);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {

        document.body.style.overflow = active ? "hidden" : "auto";

        return () => document.body.style.overflow = "auto";

    }, [active]);

    return (
        <div className="relative">
            <div>
                <div
                    className={`fixed top-0 h-full w-72 xs:w-80 bg-white z-[100]
            transition-transform duration-300 ease-out 
            ${active ? 'left-0' : '-translate-x-full'}`}
                >
                    <nav className='flex flex-col gap-8 p-12 items-center font-medium text-lg text-black leading-relaxed'>
                        <a href='/#explore'>Explore</a>
                        <Link to='/store' onClick={() => setActive(false)}>Store</Link>
                        <Link to='/about' onClick={() => setActive(false)}>About Us</Link>
                    </nav>
                </div>
                {active && (
                    <div
                        onClick={() => setActive(false)}
                        className='fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm z-[99] transition-opacity duration-300 ease-out'
                    />
                )}
            </div>

            <div>
                <Header onToggle={handleToggle} />
                <div className="mt-20 xs:mt-24">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default AppLayout