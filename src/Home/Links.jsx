import React, { useState,useEffect } from 'react';
import product from './Products.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

const Links = () => {

  
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [hoveredId, setHoveredId] = useState(null);
  const dispatch = useDispatch();

  const categories = ['ALL', 'HOME DECOR', 'LIGHTING', 'DECORATION', 'VASES', 'BASICS'];
  const filteredProducts = selectedCategory === 'ALL' ? product : product.filter(item => item.category === selectedCategory);


   //  Apply pagination after filtering
   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem); //  updated line
 
   // Reset page to 1 when category changes
   useEffect(() => {
     setCurrentPage(1);
   }, [selectedCategory]); //  added useEffect
 
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
           className={`px-3 rounded-full ${
             currentPage === i
               ? " text-gray-800 font-bold"
               : "text-gray-500 font-semibold "
           }`}
         >
           {i}
         </button>
       );
     }
 
     return pageNumbers;
   };


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover />
      <div className='mx-auto max-w-[95rem] mt-5 '>
        <ul className='flex flex-wrap lg:mx-5 md:mx-[1px]'>
          {categories.map(category => (
            <li key={category} className={`mx-3 text-sm  p-1 rounded-md cursor-pointer md:text-sm ${selectedCategory === category 
          ? 'bg-gray-200 text-black font-bold' 
          : 'text-gray-600 hover:bg-gray-300 hover:text-black'}`} onClick={() => setSelectedCategory(category)}>
              {category}
            </li>
          ))}
        </ul>

        <div className="w-full flex justify-center">
        <div className=' max-w-[90rem] w-full px-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {currentItems.map((product, index) => (
            <div key={index} className="max-w-[18rem] overflow-hidden border border-gray-400 bg-white">
              <div
                className="relative group"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img className="w-full h-60 object-cover transition-transform duration-200 group-hover:scale-110" style={{ backgroundColor: "rgb(243 243 243)" }} src={product.img} alt={product.title} />
                {hoveredId === product.id && (
                  <>
                    <div className='absolute inset-0 bg-gray-900/40'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-lg font-bold'>
                      <p>{product.title}</p>
                      <span>${product.price}</span>
                      <div className='flex mt-2 ml-[-1rem]'>
                        <FaCartPlus className='mx-3 bg-green-600 rounded-full p-[0.4rem] text-[2.4rem] cursor-pointer hover:bg-green-700' onClick={() => handleAddToCart(product)} />
                        <FaHeart className='bg-red-600 rounded-full p-[0.4rem] text-[2.5rem] cursor-pointer  hover:bg-red-700' onClick={() => toast.error(`${product.title} added to wishlist!`)} />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2 text-center">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
                <p className="font-bold text-gray-500 text-lg text-center">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      

      

       {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center justify-center space-x-2 p-4">

                        <button
                            title="First Page"
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className={`flex items-center px-3 py-2 border rounded-md ${
                              currentPage === 1
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-[#4682b4] hover:bg-blue-50"
                            }`}
                          >
                            <FaAngleDoubleLeft className="h-5 w-5" />
                          </button>

                          <button
                            title="Previous Page"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`flex items-center px-3 py-2 border rounded-md ${
                              currentPage === 1
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-[#4682b4] hover:bg-blue-50"
                            }`}
                          >
                            <FaAngleLeft className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="flex space-x-2">
                          {renderPageNumbers()}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            title="Next Page"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`flex items-center px-3 py-2 border rounded-md ${
                              currentPage === totalPages
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-[#4682b4] hover:bg-blue-50"
                            }`}
                          >
                            <FaAngleRight className="h-5 w-5" />
                          </button>

                          <button
                            title="Last Page"
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className={`flex items-center px-3 py-2 border rounded-md ${
                              currentPage === totalPages
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-[#4682b4] hover:bg-blue-50"
                            }`}
                          >
                            <FaAngleDoubleRight className="h-5 w-5" />
                          </button>
        </div>
      </div>
  


    </div>
  );
};

export default Links;
