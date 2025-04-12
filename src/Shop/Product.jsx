import React, { useState } from "react";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
// import product from "../Home/Products.json";

const Product = ({product}) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1); // page starts from 1

  const totalPages = Math.ceil(product.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const visiblePages = 5;
    const pageNumbers = [];
    const half = Math.floor(visiblePages / 2);
    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 rounded-full ${
            currentPage === i
              ? "  bg-gray-500 text-white"
              : "text-gray-500 font-semibold  hover:bg-blue-100"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };



  return (
    <div>
      {/* Display Products (6 per page) */}
      <div className="mx-auto max-w-[95rem] m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {currentItems.map((products, index) => (
          <div key={index} className="max-w-[18rem] overflow-hidden shadow-none border border-gray-400 bg-white">
            <img
              className="w-full h-48 object-cover"
              style={{ backgroundColor: "rgb(243 243 243)" }}
              src={products.img}
              alt={products.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">{products.title}</div>
              <p className="text-gray-700 text-base">{products.description}</p>
              <p className="font-semibold text-gray-700 text-center">${products.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-4">
      <div className="flex items-center justify-center space-x-2 p-4">
        
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2  ${
            currentPage === 1
              ? " text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-500"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next & Last */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2${
            currentPage === totalPages
              ? " text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-500"
          }`}
        >
          Next
        </button>
        
      </div>
      </div>
    </div>
  );
};

export default Product;
