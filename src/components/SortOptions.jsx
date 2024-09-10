import React from 'react';

const SortOptions = ({ setSortOption }) => {
  return (
    <div className="w-1/4 ml-5">
      <h2 className="text-xl font-semibold mb-2">Sort By</h2>
      <select
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full p-2 border border-zinc-600 rounded bg-zinc-700"
      >
        <option value="">Default</option>
        <option value="priceAsc"><span className='bg-zinc-900 text-white'>Price: Low to High</span></option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
