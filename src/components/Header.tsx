import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sofa } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sofa className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-800">LuxeFurn</span>
          </div>
          <div className="flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-amber-600 font-semibold' : 'text-gray-600 hover:text-amber-600'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-amber-600 font-semibold' : 'text-gray-600 hover:text-amber-600'}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-amber-600 font-semibold' : 'text-gray-600 hover:text-amber-600'}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}