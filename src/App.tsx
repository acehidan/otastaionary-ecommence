import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartSidebar, { CartItem } from './components/CartSidebar';
import Footer from './components/Footer';
import { Product } from './components/ProductCard';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity
        }];
      }
    });
    
    // Close product detail if open
    if (selectedProduct) {
      setSelectedProduct(null);
    }
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleUpdateCartQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={totalCartItems} onCartClick={handleCartClick} />
      <main>
        <HeroSection />
        <ProductGrid onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
      </main>
      <Footer />
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
      
      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;