import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-zinc-800">
      <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-disc pl-5 mb-4">
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full mr-4"
                  />
                  <span className="text-sm">{item.quantity} x</span>
                  <span className="ml-2 text-white">{item.title}</span>
                </div>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <hr></hr>
          <p className="font-semibold">Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
