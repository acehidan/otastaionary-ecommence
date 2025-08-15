import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">OtaStationary</h3>
                <p className="text-xs text-gray-400">Premium Stationery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for premium stationery and office supplies.
              Quality products for professionals who value excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Sale Items
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Pens & Pencils
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Notebooks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Office Supplies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Art Materials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Desk Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">
                  info@otastechsolutions.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">+95 995 120 7795</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">
                  Hledan, Yangon
                  <br />
                  Myanmar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 OtaStationary. All rights reserved. |
            <a href="#" className="hover:text-amber-500 transition-colors">
              {" "}
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-amber-500 transition-colors">
              {" "}
              Terms of Service
            </a>
          </p>

          <p className="text-gray-400 text-sm">
            Powered by{" "}
            <a
              href="https://otastechsolutions.com/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              OTAS Tech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
