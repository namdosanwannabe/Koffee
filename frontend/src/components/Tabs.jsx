import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

const Tabs = ({ tabs, defaultTab = 0, }) => {

    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleActiveTab = (index) => {
        setActiveTab(index);
        tabs[index].onClick?.();
    }

    return (
        <div className='mx-auto w-full'>
            <div className='flex justify-center gap-6'>
                {
                    tabs?.map((tab, index) => (
                        <button
                            tabIndex={-1}
                            key={index}
                            className={`relative flex-1 xs:flex-none text-lg font-medium ease-out transition-all duration-300 ${activeTab === index ? 'text-primary-dark' : 'hover:text-primary-light'}`}
                            onClick={() => handleActiveTab(index)}
                        >
                            <span className='block mb-1 px-2'>{tab.label}</span>
                            {
                                activeTab === index && (
                                    <motion.div
                                        layoutId='underline'
                                        className='absolute bottom-0 left-0 w-full h-[2px] bg-primary' />
                                )
                            }
                        </button>
                    ))
                }
            </div>

            <motion.div
                className='mt-8'
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}>
                {
                    tabs[activeTab].content
                }
            </motion.div>
        </div >
    )
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
            onClick: PropTypes.func,
        })
    ).isRequired,
    defaultTab: PropTypes.number,
};

export default Tabs