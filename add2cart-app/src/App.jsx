
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductsTable from './components/ProductsTable';
import CartModal from './components/CartModal';
import Alert from './components/Alert';
import { products } from './data/products';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert] = useState({ message: '', type: '', visible: false });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const showAlert = (message, type) => {
        setAlert({ message, type, visible: true });
        setTimeout(() => {
            setAlert({ message: '', type: '', visible: false });
        }, 3000);
    };

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            showAlert('Item already added to cart', 'error');
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
            showAlert('Item added to cart successfully', 'success');
        }
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
        showAlert('Item removed from cart', 'success');
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Navbar cartItemCount={cartItems.length} handleOpenModal={handleOpenModal} />
            <Hero />
            <ProductsTable products={products} handleAddToCart={handleAddToCart} />
            <CartModal
                cartItems={cartItems}
                handleRemoveFromCart={handleRemoveFromCart}
                handleCloseModal={handleCloseModal}
                isModalOpen={isModalOpen}
            />
            <Footer />
            {alert.visible && <Alert message={alert.message} type={alert.type} />}
        </div>
    );
};

export default App;