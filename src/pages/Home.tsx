import React from 'react';
import FeaturedSlider from '../components/FeaturedSlider';
import ProductGrid from '../components/ProductGrid';
import TestimonialSection from '../components/TestimonialSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <FeaturedSlider />

      {/* Featured Products */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <ProductGrid />
      </div>

      {/* Collection Categories */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Room</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Living Room",
              image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              description: "Create your perfect living space"
            },
            {
              title: "Bedroom",
              image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              description: "Rest and rejuvenate in style"
            },
            {
              title: "Dining Room",
              image: "https://media.designcafe.com/wp-content/uploads/2021/09/29221230/dining-room-design-with-walnut-wood-dining-table-and-chairs-and-glass-front-crockery-unit.jpg",
              description: "Dine in elegance"
            }
          ].map((category, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="h-80 overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-lg">
                <h3 className="text-white text-2xl font-semibold mb-2">{category.title}</h3>
                <p className="text-white text-lg">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Handcrafted with the finest materials for lasting beauty"
              },
              {
                title: "Expert Design",
                description: "Professional interior design consultation included"
              },
              {
                title: "Lifetime Warranty",
                description: "We stand behind our craftsmanship with lifetime support"
              },
              {
                title: "Free Delivery",
                description: "Complimentary white-glove delivery service"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}