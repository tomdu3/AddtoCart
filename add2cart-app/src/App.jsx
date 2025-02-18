import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsTable from './components/ProductsTable';
import Footer from './components/Footer';
import Alert from './components/Alert';
import products from './data/products.json';
const CartContext = React.createContext();


// Main App Component
const App =  ({ children }) => {


const [alert, setAlert] = useState({ message: '', type: '' });


return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      {/* <ProductCard product={products[0]} /> */}
      <ProductsTable products={products} />
      <Footer />
    </div>
  );
};

export default App;
