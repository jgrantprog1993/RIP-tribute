import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close state
    };

    return (
        <header className="bg-white-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <img src="/path/to/logo.png" alt="Logo" className="h-8 w-auto" /> {/* Replace with your logo path */}
                    </div>
                    <div className="hidden md:flex space-x-10">
                        <a href="/" className="text-base font-medium text-white hover:text-gray-300">Home</a>
                        <a href="/about" className="text-base font-medium text-white hover:text-gray-300">About</a>
                        <a href="/services" className="text-base font-medium text-white hover:text-gray-300">Services</a>
                        <a href="/contact" className="text-base font-medium text-white hover:text-gray-300">Contact</a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            type="button" 
                            onClick={toggleMenu} 
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
                            aria-controls="mobile-menu" 
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
                    <a href="/" className="block text-base font-medium text-white hover:text-gray-300">Home</a>
                    <a href="/about" className="block text-base font-medium text-white hover:text-gray-300">About</a>
                    <a href="/services" className="block text-base font-medium text-white hover:text-gray-300">Services</a>
                    <a href="/contact" className="block text-base font-medium text-white hover:text-gray-300">Contact</a>
                </div>
            </div>
        </header>
    );
};

export default Header; 