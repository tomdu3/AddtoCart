import React from 'react';

const Alert = ({ message, type }) => {
    return (
        <div
            className={`fixed top-20 right-4 p-4 rounded-md shadow-lg z-50 text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
        >
            {message}
        </div>
    );
};

export default Alert;