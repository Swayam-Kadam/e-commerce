import React from 'react'

const Image = () => {
  return (
    <div className="mx-auto max-w-[95rem] mb-5 relative">
 
  <img src="/images/about/about.jpg" alt="about us image" className="h-[22rem] w-screen object-cover" />


  <div className="absolute inset-0 bg-gray-200/20"></div>

 
  <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold ">
    About Us
  </h1>
</div>
  )
}

export default Image