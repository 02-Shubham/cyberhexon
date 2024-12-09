// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80",
    title: "Advanced Threat Protection",
    description: "Stay ahead of cyber threats with our cutting-edge security solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=2000&q=80",
    title: "Secure Your Network",
    description: "Comprehensive network security and penetration testing services"
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
    title: "Data Protection",
    description: "Protect your sensitive data with enterprise-grade security measures"
  }
];

export function HeroSlideshow() {
  return (
    <div className="relative h-[675px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-up">
                    {slide.description}
                  </p>
                  <div className="flex justify-center gap-4 animate-fade-up">
                    <Link to="/solutions"><Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Started</Button>
                    </Link>
                    
                    <Button size="lg" className="border-white text-white hover:bg-white hover:text-black">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}