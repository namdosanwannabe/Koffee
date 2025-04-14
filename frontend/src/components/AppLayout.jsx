import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AppLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='mt-24'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout