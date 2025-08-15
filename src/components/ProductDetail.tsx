import React, { useState } from "react";
import {
  ArrowLeft,
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  Award,
} from "lucide-react";
import { Product } from "./ProductCard";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock additional images for the product
  const productImages = [
    product.image,
    "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/261857/pexels-photo-261857.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-amber-500"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex gap-2">
                {product.isNew && (
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    New Arrival
                  </span>
                )}
                {product.isSale && discount > 0 && (
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {discount}% Off
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="text-sm text-amber-600 font-medium uppercase tracking-wide">
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-800">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                    Save ${(product.originalPrice! - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-gray">
                <p className="text-gray-600 leading-relaxed">
                  Experience premium quality with this exceptional{" "}
                  {product.name.toLowerCase()}. Crafted with attention to detail
                  and designed for professionals who demand excellence. Perfect
                  for daily use in office environments or creative projects.
                </p>
                <ul className="text-gray-600 space-y-1 mt-4">
                  <li>• Premium materials and construction</li>
                  <li>• Ergonomic design for comfortable use</li>
                  <li>• Professional grade quality</li>
                  <li>• Suitable for all skill levels</li>
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-800">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-lg">
                  <span className="text-gray-600">Total: </span>
                  <span className="font-bold text-2xl text-amber-600">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-amber-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add {quantity} to Cart</span>
                </button>
                <button className="w-full border-2 border-amber-600 text-amber-600 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-colors">
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-amber-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">
                      Free Shipping
                    </div>
                    <div className="text-xs text-gray-600">
                      On orders over $50
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-amber-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">
                      Secure Payment
                    </div>
                    <div className="text-xs text-gray-600">SSL encrypted</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-5 w-5 text-amber-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">
                      Easy Returns
                    </div>
                    <div className="text-xs text-gray-600">30-day policy</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-amber-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">
                      Quality Guarantee
                    </div>
                    <div className="text-xs text-gray-600">
                      Premium materials
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
