import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X, User, Heart } from "lucide-react";

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-amber-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          Free shipping on orders over $50 | Premium stationery for
          professionals
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">OT</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                OtaStationary
              </h1>
              <p className="text-xs text-gray-500">Premium Stationery</p>
            </div>
          </div>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for pens, notebooks, office supplies..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm">Account</span>
            </button>
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Wishlist</span>
            </button>
            <button className="relative flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline text-sm">Cart</span>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Navigation */}
        {/* <nav className="hidden md:block mt-4">
          <ul className="flex space-x-8 text-sm font-medium text-gray-700">
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Pens & Pencils
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Notebooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Office Supplies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Art Materials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-600 transition-colors">
                Desk Accessories
              </a>
            </li>
            <li>
              <a href="#" className="text-amber-600 font-semibold">
                Sale
              </a>
            </li>
          </ul>
        </nav> */}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-4">
            <ul className="space-y-4 text-sm font-medium text-gray-700">
              <li>
                <a href="#" className="block hover:text-amber-600">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-amber-600">
                  Pens & Pencils
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-amber-600">
                  Notebooks
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-amber-600">
                  Office Supplies
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-amber-600">
                  Art Materials
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-amber-600">
                  Desk Accessories
                </a>
              </li>
              <li>
                <a href="#" className="block text-amber-600 font-semibold">
                  Sale
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
