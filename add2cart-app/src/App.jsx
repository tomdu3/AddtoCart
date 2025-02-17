import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main App Component
const App = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
