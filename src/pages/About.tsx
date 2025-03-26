import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About LuxeFurn</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Founded in 1995, LuxeFurn has been at the forefront of luxury furniture design and craftsmanship. 
              What started as a small family workshop has grown into one of the most respected names in 
              furniture design and manufacturing.
            </p>
            <p>
              Our mission is to create furniture that transforms houses into homes, combining timeless design 
              with modern functionality. Each piece is carefully crafted by our skilled artisans using the 
              finest materials sourced from sustainable suppliers around the world.
            </p>
            <p>
              We believe that furniture is more than just functional pieces - it's an expression of personal 
              style and a crucial element in creating spaces where memories are made. This philosophy drives 
              our commitment to excellence in every piece we create.
            </p>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quality",
                  description: "We never compromise on materials or craftsmanship"
                },
                {
                  title: "Sustainability",
                  description: "Committed to environmentally responsible practices"
                },
                {
                  title: "Innovation",
                  description: "Constantly evolving our designs and techniques"
                },
                {
                  title: "Customer Focus",
                  description: "Your satisfaction is our top priority"
                }
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* History Timeline */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
            <div className="space-y-8">
              {[
                {
                  year: "1995",
                  title: "The Beginning",
                  description: "Started as a small family-owned workshop in New York"
                },
                {
                  year: "2000",
                  title: "First Showroom",
                  description: "Opened our flagship showroom in Manhattan's Design District"
                },
                {
                  year: "2010",
                  title: "Sustainable Practices",
                  description: "Implemented eco-friendly manufacturing processes"
                },
                {
                  year: "2020",
                  title: "Design Excellence",
                  description: "Received multiple awards for innovative furniture design"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="w-24 flex-shrink-0">
                    <span className="text-xl font-bold text-amber-600">{milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}