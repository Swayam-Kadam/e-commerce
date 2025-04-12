import React, { useEffect } from 'react';

const Swiper = () => {
  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleCaptions");
    if (window.bootstrap && carousel) {
      new window.bootstrap.Carousel(carousel, {
        ride: "carousel",
        interval: 500,
      });
    }
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mx-auto max-w-[95rem]"
      data-bs-ride="carousel"
      style={{ height: "30rem", backgroundColor: "rgb(243 243 243)" }}
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner h-full">

        {/* First Slide */}
        <div className="carousel-item active h-full">
          <div className="flex flex-col md:flex-row justify-between items-center h-full px-4">
            <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
              <div className="text-center">
                <h5 className="text-xl font-semibold">First Slide Label</h5>
                <p className="text-base">Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="/images/Slider1.webp" className="w-1/2 h-full object-contain" alt="First Slide" />
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item h-full">
          <div className="flex flex-col md:flex-row justify-between items-center h-full px-4">
            <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
              <div className="text-center">
                <h5 className="text-xl font-semibold">Second Slide Label</h5>
                <p className="text-base">Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="/images/Slider2.webp" className="w-1/2 h-full object-contain" alt="Second Slide" />
            </div>
          </div>
        </div>

        {/* Third Slide (Two Images) */}
        <div className="carousel-item h-full">
          <div className="flex flex-col md:flex-row justify-between items-center h-full px-4">
            <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
              <div className="text-center">
                <h5 className="text-xl font-semibold">Third Slide Label</h5>
                <p className="text-base">Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center gap-4">
              <img src="/images/Slider3.webp" className="w-1/3 h-full object-contain" alt="Third Slide 1" />
              <img src="/images/Slider31.webp" className="w-1/3 h-full object-contain" alt="Third Slide 2" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Swiper;

