import React from 'react'


const Signup = ({isOpen,onClose}) => {
    if (!isOpen) return null;
  return (
    <div className='fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white rounded-2xl shadow-xl w-full max-w-md p-4 relative'>
            <button
            onClick={onClose}
            className='absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl'>
                &times;
            </button>
        </div>
    </div>
  )
}

export default Signup