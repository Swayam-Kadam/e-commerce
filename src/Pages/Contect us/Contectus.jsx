import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

const Contectus = () => {
  return (
    <div className='mx-auto max-w-[95rem] mb-5'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.26066503465!2d-74.0060150653081!3d40.71277608975796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317b41782d%3A0x42103b447d15c163!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1628694388236!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <div className='flex flex-col md:flex-row  justify-between mt-20 mb-10'>

        <div className='flex '>
          <div>
          <IoIosArrowDropright size={40} className='mr-5'/>
          </div>
          <div>
            <h5 className='font-bold'>PARIS STORE</h5>
            <p className='text-gray-400 pr-20'>86 rue de Raymond Poincaré, Paris
            Monday to Friday: 9am to 8pm
            depot@qodeinteractive.com</p>
          </div>
        </div>

        <div className='flex'>
          <div>
          <IoIosArrowDropright size={40} className='mr-5'/>
          </div>
          <div>
          <h5 className='font-bold'>PARIS STORE</h5>
            <p className='text-gray-400 pr-20'>86 rue de Raymond Poincaré, Paris
            Monday to Friday: 9am to 8pm
            depot@qodeinteractive.com</p>
          </div>
        </div>

        <div className='flex'>
          <div>
          <IoIosArrowDropright size={40} className='mr-5'/>
          </div>
          <div>
          <h5 className='font-bold'>PARIS STORE</h5>
            <p className='text-gray-400 pr-20'>86 rue de Raymond Poincaré, Paris
            Monday to Friday: 9am to 8pm
            depot@qodeinteractive.com</p>
          </div>
        </div>

      </div><hr/>

    <div className='flex flex-col items-center justify-center mt-20'>
      <h4 className='font-bold'>SUBSCRIBE TO NEWSLETTER</h4>
      <p className='text-xl text-gray-400 mt-3'>Your brand’s power lies in dominance. It is better to have 50% of one market, instead of 10% of five markets.</p>
    </div>

    <div className=' mx-auto justify-center flex mt-10'>
                <input 
                    type="text" 
                    placeholder="Type your question..." 
                    className="w-full border border-gray-400  mr-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                />
    <button className='btn btn-dark'>SUBSCRIBE</button>

    </div>


    </div>
  )
}

export default Contectus
