import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">
                New Collection Available
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Premium Stationery
              <span className="block text-amber-600">for Professionals</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our curated collection of high-quality pens, notebooks,
              and office supplies. Elevate your workspace with tools that
              inspire creativity and productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center space-x-2 justify-center">
                <span>Shop Collection</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                View Catalog
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">4.8</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
