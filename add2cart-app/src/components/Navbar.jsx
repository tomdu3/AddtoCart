const Navbar = () => {
    return (
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white dark:text-white-400">
                TomiStore
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-white-600 dark:text-gray-300 dark:hover:text-white-400">
                All Products
              </a>
              <a href="#" className="text-gray-600 hover:text-white-600 dark:text-gray-300 dark:hover:text-white-400">
                Clothes
              </a>
              <a href="#" className="text-gray-600 hover:text-white-600 dark:text-gray-300 dark:hover:text-white-400">
                Shoes
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative p-2">
              <i class="fa-solid fa-basket-shopping text-white"></i>
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  };

  export default Navbar;