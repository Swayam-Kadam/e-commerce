
import React, { useState, useEffect, useRef } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({openLoginModal}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const total = useSelector((state) => state.cart.total);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='mx-auto max-w-[95rem] flex justify-between h-16 items-center mb-3 sticky top-0 z-50' style={{ backgroundColor: 'rgb(243 243 243)' }}>
        <div className='lg:text-sm ml-4 tracking-widest font-bold sm:text-xl'><img src="/images/depot.webp" alt="" className='h-4 sm:h-4'/></div>
        <div className='hidden md:block'>
          <ul className='flex text-sm '>
            <li className='relative tracking-wider'><b><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>HOME</Link></b></li>
            <li className='mx-8 tracking-wider'><b><Link to='/shop' style={{ textDecoration: 'none', color: 'black' }}>SHOP</Link></b></li>
            <li className="tracking-wider relative" ref={dropdownRef}>

            {isDropdownOpen && (
                <div className="absolute  items-start left-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-md z-10">
                  <ul className="py-1">
                    <li><Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold" style={{ textDecoration: 'none' }}>About Us</Link></li>
                    <li><Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold" style={{ textDecoration: 'none' }}>FAQ</Link></li>
                    <li><Link to="/contect" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                  </ul>
                </div>
              )}
              
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="font-bold text-gray-900">PAGES</button>
            </li>

            <li className='mx-8 tracking-wider'><b><Link to='/whishlist' style={{ textDecoration: 'none', color: 'black' }}>WHISHLIST</Link></b></li>
          </ul>
        </div>
        <div className='mr-4'>
          <ul className='flex'>
            <li className='mr-4 flex items-center'>
              <FaCartPlus className='mr-2' />
              <span className='bg-red-200 rounded-md px-2 py-1 text-black font-medium text-sm tracking-wider'>
                ${total.toFixed(2)}
              </span>
            </li>
            <li className='flex text-sm items-center font-bold hover:text-gray-500 cursor-pointer' onClick={openLoginModal}><CgProfile className='mx-2' />LOGIN</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
