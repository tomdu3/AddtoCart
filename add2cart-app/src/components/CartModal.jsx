import React from 'react';

const CartModal = ({ cartItems, handleRemoveFromCart, handleCloseModal, isModalOpen }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isModalOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="bg-white rounded-lg shadow-md p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <div>
                                    {item.title} - ${item.price}
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