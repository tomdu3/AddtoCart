import React, { useEffect } from 'react';

const CartModal = ({ cartItems, handleRemoveFromCart, handleCloseModal, isModalOpen, handleUpdateQuantity }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                handleCloseModal();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [handleCloseModal]);


    return (
        <div
            id="cartModal"
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isModalOpen ? 'block' : 'hidden'}`}
        >
            <div className="bg-white rounded-lg shadow-md p-6 w-96 overflow-y-auto max-h-[300px]">
                <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <div>
                                    <div>{item.title}</div>
                                    <div className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</div>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                            className="bg-gray-200 px-2 py-1 rounded-l"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                                        <button
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                            className="bg-gray-200 px-2 py-1 rounded-r"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="font-bold">
                            Total: ${total.toFixed(2)}
                        </div>
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <button
                    onClick={handleCloseModal}
                    className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CartModal;