import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Foter = () => {
    const items1=['Help & Contact Us','Returns & Refunds','Online Stores','Terms & Conditions']
    const items2=['What We Do','Available Services','Latest Posts','FAQs']
    const items3=['Twitter','Instagram','Tumblr','Pinterest']
    const items4=['My Account','Checkout','Order Tracking','Help & Support']

    
  return (
    <div className='mx-auto max-w-[95rem]  items-center' style={{backgroundColor:'rgb(243 243 243)'}}>
        {/* <div className='flex p-5 justify-between'>
            <div id='item1'>
                <p className='font-bold text-lg'>CUSTOMER SERVICE</p>

                {items1.map((item)=>(
                  <p key={item}className='text-muted text-sm cursor-pointer'>{item}</p> 
                ))}
            </div>

            <div id='item2'>
                <p className='font-bold text-lg'>COMPANY</p>
                {items2.map((item)=>(
                  <p key={item}className='text-muted text-sm cursor-pointer'>{item}</p> 
                ))}
            </div>

            <div id='item3'>
                <p className='font-bold text-lg'>SOCIAL MEDIA</p>
                {items3.map((item)=>(
                  <p key={item}className='text-muted text-sm cursor-pointer'>{item}</p> 
                ))}
            </div>

            <div id='item4'>
                <p className='font-bold text-lg'>PROFILE</p>
                {items4.map((item)=>(
                  <p key={item}className='text-muted text-sm cursor-pointer'>{item}</p> 
                ))}
            </div>
        </div> */}

<div className="w-full flex justify-center">
<div className="flex flex-col md:flex-row p-5 justify-between gap-8 max-w-6xl w-full">
  <div id="item1" className="text-center">
    <p className="font-bold text-lg ">CUSTOMER SERVICE</p>
    {items1.map((item) => (
      <p key={item} className="text-muted text-sm cursor-pointer">
        {item}
      </p>
    ))}
  </div>

  <div id="item2" className="text-center">
    <p className="font-bold text-lg">COMPANY</p>
    {items2.map((item) => (
      <p key={item} className="text-muted text-sm cursor-pointer">
        {item}
      </p>
    ))}
  </div>

  <div id="item3" className="text-center">
    <p className="font-bold text-lg">SOCIAL MEDIA</p>
    {items3.map((item) => (
      <p key={item} className="text-muted text-sm cursor-pointer">
        {item}
      </p>
    ))}
  </div>

  <div id="item4" className="text-center">
    <p className="font-bold text-lg">PROFILE</p>
    {items4.map((item) => (
      <p key={item} className="text-muted text-sm cursor-pointer">
        {item}
      </p>
    ))}
  </div>
</div>
</div>

        <hr/>


        <div className='flex justify-between pr-5 pl-5'>
                <div>
                    <p className='text-muted text-xs'>© 2025 Code Interactive, All Rights Reserved</p>
                </div>

                <div className='flex'>
                    <p className='text-muted text-xs'>Follow Us</p>
                    <FaTwitter className='mx-2 cursor-pointer'/>
                    <FaInstagram className='cursor-pointer'/>
                    <FaFacebookF className='mx-2 cursor-pointer'/>
                </div>
        </div>
    </div>
  )
}

export default Foter