import React from 'react'
import Signup from './Signup';

const LoginModal = ({ isOpen, onClose,isOpenSignup }) => {

    if (!isOpen) return null;



  return (
    <div
    
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        
        <div className="flex justify-center mt-1">
          <button className="text-blue-600" onClick={isOpenSignup}>Create an account</button>
        </div>

      </div>
    </div>
  )
}

export default LoginModal