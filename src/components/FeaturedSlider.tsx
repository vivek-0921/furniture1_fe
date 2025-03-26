import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Modern Living Room Sets",
    description: "Discover our latest collection of contemporary furniture"
  },
  {
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Bedroom Collections",
    description: "Transform your bedroom into a peaceful sanctuary"
  },
  {
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Dining Room Elegance",
    description: "Elevate your dining experience with our premium collections"
  }
];

export default function FeaturedSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="h-[600px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>

                <Link to={'/contact'} >
                  <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-amber-700 transition-colors">
                    Contact Us Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}