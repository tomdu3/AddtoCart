const Hero = () => {
    return (
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Wearables of Quality for less
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover the lastest fashon with affordable prices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Shop Now
            </button>
            <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors">
              View Deals
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;