import React from 'react';

const Filters = ({ setFilter }) => {
  return (
    <div className="w-1/4 ">
      <h2 className="text-xl font-semibold mb-2">Filter by Category</h2>
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded bg-zinc-700"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="men's clothing">"Men Clothing</option>
        <option value="jewelery">jewelery</option>
       
      </select>
    </div>
  );
};

export default Filters;
