import React, { useState } from 'react';
import Product from './Product';
// import items from '../Home/Products.json';

const RightSide = ({items}) => {
  const [sortOrder, setSortOrder] = useState(""); // State for sorting option

  // Function to sort items based on selected option
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price; // Ascending order
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price; // Descending order
    }
    return 0; // Default order
  });

  return (
    <div >
      {/* Sorting Dropdown */}
      <div className='flex flex-col sm:flex-row justify-between'>
        <div><p className=' text-gray-500'>Showing 1-6 of {items.length} results</p></div>
        <div>
          <form>
            <select 
              name="sorting" 
              id="sorting" 
              className="border border-gray-400 p-2 rounded  text-gray-500"
              onChange={(e) => setSortOrder(e.target.value)} // Update state on change
            >
              <option value="" >Default Sorting</option>
              <option value="low-to-high" >Sort By Price: Low to High</option>
              <option value="high-to-low" >Sort By Price: High to Low</option>
            </select>
          </form>
        </div>
      </div>

      {/* Pass Sorted Items to Product Component */}
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <Product product={sortedItems} />
        </div>
      </div>

    </div>
  );
};

export default RightSide;
