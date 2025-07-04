import React, { useState } from 'react';

const ResponsiveDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBar = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="relative">
            {/* Icon */}
            <button onClick={toggleBar} className="text-3xl p-2 md:hidden text-amber-50">
                ☰
            </button>

            {/* Dropdown Panel - only visible on small screens */}
            {isOpen && (
                <div className="absolute right-1 mt-2 w-[100px] bg-gray-200 border border-gray-300 p-6 md:hidden z-100">
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Services</h4>
                    <h4>Products</h4>
                    <h4>Contact us</h4>
                </div>
            )}
        </div>
    );
};

export default ResponsiveDropdown;
