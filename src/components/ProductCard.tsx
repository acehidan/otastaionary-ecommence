import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
          )}
          {product.isSale && discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
        
        {/* Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        
        {/* Quick add to cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-amber-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-1"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Add</span>
            </button>
            <button 
              onClick={() => onViewDetails(product)}
              className="bg-white text-amber-600 py-2 px-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm border border-amber-600"
            >
              View
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4 cursor-pointer" onClick={() => onViewDetails(product)}>
        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
          {product.category}
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-gray-800">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;