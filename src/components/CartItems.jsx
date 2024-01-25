// src/components/Cart.js
import React from 'react';

const CartItems = () => {
  const cartItems = [
    {
      price: 100,
      quantity: 1000,
      name: 'Cement',
    },
  ];
  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-3xl font-bold text-blue-800 mb-6'>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className='bg-white p-6 rounded-md shadow-md mb-4'
            >
              <h3 className='text-xl font-bold mb-2'>{item.name}</h3>
              <p className='text-gray-600 mb-2'>Price: {item.price}</p>
              <p className='text-gray-600 mb-2'>Quantity: {item.quantity}</p>
              <p className='text-gray-600 mb-4'>
                Total: {item.price * item.quantity}
              </p>
            </div>
          ))}
          <div className='flex justify-between items-center'>
            <p className='text-lg font-bold'>Total: $123.45</p>
            <button className=' text-white py-2 bg-yellow-500 px-4 rounded hover:bg-yellow-700 focus:outline-none focus:ring focus:border-blue-700'>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
