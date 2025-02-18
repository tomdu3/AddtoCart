import React from 'react';

const Navbar = ({ cartItemCount, handleOpenModal }) => {
    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            TomiStore
                        </span>
                    </div>
                    <div className="flex items-center space-x-8">
                        <a href="#" className="hidden md:flex text-gray-600 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-white transition-colors">
                            All Products
                        </a>
                        <a href="#" className="hidden md:flex text-gray-600 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-white transition-colors">
                            Clothes
                        </a>
                        <a href="#" className="hidden md:flex text-gray-600 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-white transition-colors">
                            Shoes
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 hover:cursor-pointer" onClick={handleOpenModal}>
                        <i class="fa-solid fa-basket-shopping text-white md:text-2xl"></i>
                            <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;