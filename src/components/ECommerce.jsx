import React, { useState } from 'react';
import ProductList from './ProductList';
import Filters from './Filters';
import SortOptions from './SortOptions';
import Cart from './Cart';

const ECommerce = () => {
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mx-auto p-4 bg-zinc-900 w-full  ">
      <h1 className="text-3xl font-bold mb-4">E-Commerce Store</h1>
      <div className="flex mb-4">
        <Filters setFilter={setFilter} />
        <SortOptions setSortOption={setSortOption} />
      </div>
      <ProductList filter={filter} sortOption={sortOption} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default ECommerce;
