import React, { useState } from "react";
import { Filter, Grid, List } from "lucide-react";
import ProductCard, { Product } from "./ProductCard";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  onAddToCart,
  onViewDetails,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "All Products",
    "Pens & Pencils",
    "Notebooks",
    "Office Supplies",
    "Art Materials",
    "Desk Accessories",
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Fountain Pen Set",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Pens & Pencils",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Leather Bound Journal",
      price: 45.0,
      rating: 4.9,
      reviews: 203,
      image:
        "https://images.pexels.com/photos/8250924/pexels-photo-8250924.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Notebooks",
    },
    {
      id: 3,
      name: "Professional Mechanical Pencils",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.7,
      reviews: 89,
      image:
        "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Pens & Pencils",
      isSale: true,
    },
    {
      id: 4,
      name: "Desk Organizer Set",
      price: 67.5,
      rating: 4.6,
      reviews: 124,
      image:
        "https://images.pexels.com/photos/6956899/pexels-photo-6956899.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Desk Accessories",
      isNew: true,
    },
    {
      id: 5,
      name: "Watercolor Paint Set",
      price: 78.0,
      rating: 4.8,
      reviews: 67,
      image:
        "https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Art Materials",
    },
    {
      id: 6,
      name: "Executive Notebook Collection",
      price: 32.99,
      rating: 4.7,
      reviews: 198,
      image:
        "https://images.pexels.com/photos/261857/pexels-photo-261857.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Notebooks",
    },
    {
      id: 7,
      name: "Gel Pen Assortment",
      price: 18.99,
      originalPrice: 25.99,
      rating: 4.5,
      reviews: 142,
      image:
        "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Pens & Pencils",
      isSale: true,
    },
    {
      id: 8,
      name: "Premium Stapler & Supplies",
      price: 42.0,
      rating: 4.4,
      reviews: 76,
      image:
        "https://images.pexels.com/photos/6340708/pexels-photo-6340708.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Office Supplies",
    },
  ];

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium stationery and office
          supplies
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-amber-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="flex rounded-lg border border-gray-300">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${
                viewMode === "grid"
                  ? "bg-amber-600 text-white"
                  : "text-gray-600"
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list"
                  ? "bg-amber-600 text-white"
                  : "text-gray-600"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 lg:grid-cols-2"
        }`}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
