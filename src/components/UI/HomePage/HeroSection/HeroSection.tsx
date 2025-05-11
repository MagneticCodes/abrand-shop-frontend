'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const heroSlides = [
    {
      id: 1,
      title: "Premium Cotton Shirts",
      subtitle: "Exclusive Collection",
      description: "Handcrafted premium cotton shirts for the modern gentleman",
      buttonText: "Order Now",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      id: 2,
      title: "Fig & Fit Formals",
      subtitle: "Office Collection",
      description: "Professional attire designed for comfort and style",
      buttonText: "Shop Collection",
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    },
    {
      id: 3,
      title: "Casual Comfort",
      subtitle: "Weekend Specials",
      description: "Relaxed fits for your weekend adventures",
      buttonText: "Explore Now",
      bgColor: "bg-amber-100",
      textColor: "text-amber-800"
    }
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        className="w-full h-96"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className={`${slide.bgColor} w-full h-full`}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-16">
              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 z-10">
                <span className={`text-lg font-medium ${slide.textColor}`}>
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                  {slide.title}
                </h1>
                <p className="text-gray-600 mb-6">
                  {slide.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full w-fit transition-all duration-300 flex items-center gap-2">
                  {slide.buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>

              {/* Image Content */}
              <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <div className="relative">
                  {/* Main shirt image */}
                  <img 
                    src="/api/placeholder/400/500" 
                    alt="Fig & Fit Shirt Collection" 
                    className="object-contain max-h-64"
                  />
                  
                  {/* Floating shirt images */}
                  <img 
                    src="/api/placeholder/150/200" 
                    alt="White shirt" 
                    className="absolute -left-16 -bottom-8 h-32 rotate-12 shadow-lg rounded-md"
                  />
                  <img 
                    src="/api/placeholder/150/200" 
                    alt="Green shirt" 
                    className="absolute -right-12 top-4 h-32 -rotate-12 shadow-lg rounded-md"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Brand Label / Badge */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-white/90 py-2 px-4 rounded-full shadow-md flex items-center gap-2">
          <span className="text-green-600 font-bold text-lg">Fig & Fit</span>
          <span className="bg-green-600 h-6 w-px"></span>
          <span className="text-gray-700 text-sm">Premium Collection</span>
        </div>
      </div>

      {/* Shopping Cart Badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md">
          <span className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;