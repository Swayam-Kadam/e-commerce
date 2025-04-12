import React from 'react'
import Table from './Table'
import { Link } from 'react-router-dom';

const WhishlistPage = () => {
  return (
    <div className='mx-auto max-w-[95rem] mb-5'>
      <div className='flex items-center justify-center h-[20rem]' style={{backgroundColor:'rgb(243 243 243)'}}>
      <h1 className="items-center justify-center text-black text-5xl font-bold ">
        WHISHLIST
      </h1>
      </div>

      
      {JSON.parse(localStorage.getItem('cartItems'))?.length > 0 ? (
        <div>
          <Table />
          </div>
        ) : (
          <div className='mt-14 flex items-center justify-center '>
          <img src="/images/whishlist.webp" alt="wishlist" />
          </div>
        )}
     

      <div className='flex flex-col items-center justify-center border h-[5rem] border-gray-400 mt-14 ml-5 mr-5'>
          <h5 className='font-bold'>YOUR WISHLIST IS CURRENTLY EMPTY.</h5>
      </div>

      <div className='flex flex-col items-center justify-center mt-10'>
      <button className="border border-black bg-black font-bold py-3 px-8 text-sm" >
        <Link to='/shop' className=' text-white' style={{textDecoration:'none'}}> RETURN TO SHOP</Link>
      </button>
      </div>


    </div>
  )
}

export default WhishlistPage