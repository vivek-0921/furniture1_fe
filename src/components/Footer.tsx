import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LuxeFurn</h3>
            <p className="text-gray-400">
              Crafting comfort and elegance for your home since 1995.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-amber-500">Home</a></li>
              <li><a href="/about" className="hover:text-amber-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-amber-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© 2024 LuxeFurn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}