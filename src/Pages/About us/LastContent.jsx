import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./style.css";

const LastContent = () => {
  return (
    <div className='mx-auto max-w-[95rem] mb-5 h-[22rem] w-screen flex flex-col items-center justify-center' style={{backgroundColor:'#F1F5F9'}} >
        <h4 className='font-bold'>WHAT THEY'RE SAYING</h4>
        <Swiper className="mySwiper mt-3"
        modules={[Autoplay]} 
        autoplay={{ delay: 2000, disableOnInteraction: false }} 
        loop={true}
        >
        <SwiperSlide>
            <p className='text-[0.9rem] text-gray-500'>Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus<br/> lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, <br/>pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/><br/><span className='text-lg text-black'>MASON ROBINSON</span><br/><span cl>Devloper</span></p>
        </SwiperSlide>
        <SwiperSlide>
        <p className='text-[0.9rem] text-gray-500'>Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus<br/> lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, <br/>pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/><br/><span className='text-lg text-black'>SARAH WILSON</span><br/><span cl>Designer</span></p>
        </SwiperSlide>
        <SwiperSlide>
        <p className='text-[0.9rem] text-gray-500'>Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus<br/> lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, <br/>pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br/><br/><span className='text-lg text-black'>DEVID CLEARK</span><br/><span cl>Product Manager</span></p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default LastContent