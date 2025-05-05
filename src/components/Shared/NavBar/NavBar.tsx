import React from 'react';
import { Search, Phone, Heart, ShoppingCart, User, HelpCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top bar with welcome message and nav links */}
      <div className="bg-white py-2 px-4 flex justify-between items-center border-b">
        <div className="text-sm font-medium">Welcome to Angkon Brand Shop</div>
        <div className="flex gap-4">
          <Link href="/about" className="text-sm flex items-center gap-1">
            <HelpCircle className="w-4 h-4 text-green-600" />
            <span>About</span>
          </Link>
          <Link href="/contact" className="text-sm flex items-center gap-1">
            <MessageSquare className="w-4 h-4 text-green-600" />
            <span>Contact</span>
          </Link>
          <Link href="/login" className="text-sm flex items-center gap-1">
            <User className="w-4 h-4 text-green-600" />
            <span>Login</span>
          </Link>
        </div>
      </div>

      {/* Main navbar with logo, search, and cart */}
      <div className="bg-white py-3 px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-none">
          <div className="h-12 w-32 flex items-center">
            <Link href="/">
              <div className="text-green-600 font-bold flex flex-col items-center">
                <div className="bg-green-600 text-white px-2 py-3 rounded-md">
                  <span className="text-lg">ABrand Shop</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Looking for something?"
              className="w-full border border-green-600 rounded-md py-2 px-4 focus:outline-none"
            />
            <button className="absolute right-0 mt-[10px] px-3 mr-2 bg-white rounded-r-md">
              <Search className="text-green-600" />
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="flex-none mx-4">
          <div className="flex items-center">
            <Phone className="text-green-600 mr-2" />
            <div className="flex flex-col">
              <span className="text-xs">Call Us Now:</span>
              <span className="text-sm font-semibold">01717480093</span>
            </div>
          </div>
        </div>

        {/* Wishlist */}
        <div className="flex-none mx-2">
          <button className="flex flex-col items-center">
            <div className="relative">
              <Heart className="text-green-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </div>
          </button>
        </div>

        {/* Cart */}
        <div className="flex-none mx-2">
          <button className="flex items-center">
            <div className="relative mr-2">
              <ShoppingCart className="text-green-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </div>
            {/* <div className="text-right">
              <div className="text-xs">Cart amount</div>
              <div className="text-sm font-semibold">₹ 0</div>
            </div> */}
          </button>
        </div>
      </div>

      {/* Categories navbar */}
      <div className="bg-green-600 text-white">
        <ul className="flex px-4">
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">Men&apos;s Fashion</li>
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">HOODIE</li>
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">Katua</li>
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">Casual Shirts</li>
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">Formal Shirt</li>
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">Ban Colar Shirts</li>
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">Sweep Shirt</li>
          <li className="px-4 py-3 hover:bg-red-700 cursor-pointer">Short sleeve shirt</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;