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
      name: "Pilot Disposal Fountain Pen",
      price: 12000,
      originalPrice: 15000,
      rating: 4.8,
      reviews: 156,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/PENRPISVP4MBL.webp",
      category: "Pens & Pencils",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "A'zone Uno Ring Note Book",
      price: 25000,
      rating: 4.9,
      reviews: 203,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/NOTBAZUNOA5-all.jpg",
      category: "Notebooks",
    },
    {
      id: 3,
      name: "Pilot Mechanical Pencil Shaker",
      price: 25000,
      originalPrice: 34990,
      rating: 4.7,
      reviews: 89,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/MECPPISH1010_sq.jpg",
      category: "Pens & Pencils",
      isSale: true,
    },
    {
      id: 4,
      name: "Steel Metal Ruler 12 Inch",
      price: 17500,
      rating: 4.6,
      reviews: 124,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/steel-metal-ruler-12-inch_sq.jpg",
      category: "Desk Accessories",
      isNew: true,
    },
    {
      id: 5,
      name: "Staedtler Acrylic Paint 12 Colour",
      price: 78000,
      rating: 4.8,
      reviews: 67,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/staedtler-acrylic-paint-12-colour-8500c12-1a_sq.jpg",
      category: "Art Materials",
    },
    {
      id: 6,
      name: "PaperOne Premium Paper A4",
      price: 32000,
      rating: 4.7,
      reviews: 198,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/PPCPPONE-2_sq.jpg",
      category: "Notebooks",
    },
    {
      id: 7,
      name: "Pentel Permanent Marker",
      price: 18000,
      originalPrice: 25000,
      rating: 4.5,
      reviews: 142,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/PERMPEN850-060325.jpg",
      category: "Pens & Pencils",
      isSale: true,
    },
    {
      id: 8,
      name: "Deli Scissors 170mm",
      price: 15000,
      rating: 4,
      reviews: 76,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/E0603_3_sq.jpg",
      category: "Office Supplies",
    },
    {
      id: 9,
      name: "Deli Stapler (25 Sheets)",
      price: 12000,
      rating: 4.4,
      reviews: 80,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/E1E0312-1_sq.jpg",
      category: "Office Supplies",
    },
    {
      id: 10,
      name: "PVC Arch File 3 Inch A4 No Index",
      price: 18000,
      rating: 4.6,
      reviews: 70,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/ARCFPVC3INA4-1_sq_WIgEQeU.jpg",
      category: "Office Supplies",
    },
    {
      id: 11,
      name: "Pilot Polymer Mechanical Pencil Lead 2B 0.5mm",
      price: 22000,
      originalPrice: 25000,
      rating: 4.5,
      reviews: 142,
      image:
        "https://df3k2q0k3bu2n.cloudfront.net/static/images/PENLPI0P52B_sq.jpg",
      category: "Pens & Pencils",
      isSale: true,
    },
    {
      id: 12,
      name: "Deli Mesh Desk Organizer",
      price: 40500,
      rating: 4.6,
      reviews: 124,
      image: "https://df3k2q0k3bu2n.cloudfront.net/static/images/E9175_sq.jpg",
      category: "Desk Accessories",
      isNew: true,
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
