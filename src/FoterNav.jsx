import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdPages } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";

const FoterNav = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const dropdownRef = useRef(null);


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
    <div className='sticky  bottom-0 z-50 block md:hidden bg-[#f3f3f3]'>
        <ul className='flex justify-around ml-[-2rem] pt-2 '>
            <li className='flex flex-col items-center justify-center text-center font-bold'>
            <IoHomeOutline />
                <Link to='/' className='text-black' style={{textDecoration:'none'}}>Home</Link>
            </li>

            <li className="relative text-center" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex flex-col items-center justify-center text-sm font-bold text-gray-700"
              >
                <MdPages/>
                Page
              </button>

              {isDropdownOpen && (
                <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 w-32 bg-black text-white rounded-lg shadow-lg z-50">
                  <ul className="text-sm font-semibold py-2">
                    <li>
                      <Link to="/about" className="block px-4 py-1  text-white" style={{textDecoration:'none'}}>About</Link>
                    </li>
                    <li>
                      <Link to="/faq" className="block px-4 py-1  text-white" style={{textDecoration:'none'}}>FAQ</Link>
                    </li>
                    <li>
                      <Link to="/contect" className="block px-4 py-1  text-white" style={{textDecoration:'none'}}>Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

                
            <li className='flex flex-col items-center justify-center text-center font-bold'>
            <MdOutlineShoppingBag />
            <Link to='/shop' className='text-black' style={{textDecoration:'none'}}>Shop</Link>
            </li>
                
            <li className='flex flex-col items-center justify-center text-center font-bold'>
            <BsFillBagHeartFill />
            <Link to='/whishlist' className='text-black' style={{textDecoration:'none'}}>Whishlist</Link>
            </li>
        </ul>
    </div>
  )
}

export default FoterNav