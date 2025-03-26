import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$1,299",
    rating: 4.8,
    description: "Premium Italian leather sofa with contemporary design"
  },
  {
    id: 2,
    name: "Minimalist Coffee Table",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$399",
    rating: 4.6,
    description: "Sleek marble top coffee table with solid wood base"
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$599",
    rating: 4.9,
    description: "Premium mesh office chair with lumbar support"
  },
  {
    id: 4,
    name: "Queen Size Bed Frame",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$899",
    rating: 4.7,
    description: "Modern platform bed with integrated storage"
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
          <div className="relative h-64">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 rounded">
              {product.price}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <span className="ml-1 text-gray-600">{product.rating}</span>
              </div>
              <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}