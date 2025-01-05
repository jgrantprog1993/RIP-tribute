import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabaseClient';
import { useUser } from '../../contexts/UserContext';
import { UserCircleIcon } from '@heroicons/react/24/outline'

const Header =  () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, setUser } = useUser();
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Logout failed:', error.message);
        } else {
            setUser(null);
            router.push('/');
        }
    };

    return (
        <header className="bg-white-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center relative">
                        {user ? (
                            <>
                                <button
                                    onClick={toggleUserMenu}
                                    className="flex items-center focus:outline-none"
                                >
                                    <UserCircleIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                                </button>
                                
                                {/* Dropdown Menu */}
                                {showUserMenu && (
                                    <div className="absolute top-8 left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                        <a
                                            href="/member/dashboard"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Homepage
                                        </a>
                                        <a
                                            href="/member/family-notices/manage"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            My Family Notices
                                        </a>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <a href="/auth" className="text-gray-900 font-medium hover:text-indigo-600">
                                Login
                            </a>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                       
                        <a href="/death-notices" className="text-base font-medium text-blue-900 hover:text-gray-300">Death Notices</a>
                        <a href="/family-notices" className="text-base font-medium text-blue-900 hover:text-gray-300">Family Notices</a>
                        <a href="/services-directory" className="text-base font-medium text-blue-900 hover:text-gray-300">Services Directory</a>
                        <a href="/info" className="text-base font-medium text-blue-900 hover:text-gray-300">Info</a>
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
                    <a href="/death-notices" className="block text-base font-medium text-blue-900 hover:text-gray-300">Death Notices</a>
                    <a href="/family-notices" className="block text-base font-medium text-blue-900 hover:text-gray-300">Family Notices</a>
                    <a href="/services-directory" className="block text-base font-medium text-blue-900 hover:text-gray-300">Services Directory</a>
                    <a href="/info" className="block text-base font-medium text-blue-900 hover:text-gray-300">Info</a>
                    {/* <a href="/about" className="block text-base font-medium text-blue-900 hover:text-gray-300">About</a>
                    <a href="/services" className="block text-base font-medium text-blue-900 hover:text-gray-300">Services</a>
                    <a href="/contact" className="block text-base font-medium text-blue-900 hover:text-gray-300">Contact</a> */}
                </div>
            </div>
        </header>
    );
};

export default Header; 